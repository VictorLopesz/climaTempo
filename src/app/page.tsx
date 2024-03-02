'use client'
import Cards from '../components/cards';
import Image from "next/image";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useForm } from "react-hook-form";

const Key = "bcdd1ca6b3b6617e908b50f1dc55837f";

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);
  const [dadosApi, setDadosApi] = useState(null);
  const { reset } = useForm();



  const fetchWeather = async () => {
    if (inputRef.current) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Key}`);
  
        if (response.data.cod !== 200) {
          throw new Error(`Erro ao buscar os dados: ${response.data.message}`);
        }
  
        setDadosApi(response.data);
      } catch (error) {
        console.error('Erro na busca:', error);
      }
    }
    reset({
      inputRef: ''
    });
  }  
  
  return (
      <div className="bg-[#0F0F0F] h-screen w-full grid place-items-center">
        <div className="bg-[#1D1D1F] w-80 p-3 rounded-lg">
          <div className="flex items-center justify-center">
            <input 
            ref={inputRef}
              type="text"
              placeholder="Digite sua Localização"
              className="text-lg border-b p-1 border-[#1B1A1D] bg-[#1B1A1D] text-white" 
            />
<button 
    onClick={fetchWeather}
    className="m-1 ml-3">
    <FaSearch className="w-6 h-6 hover:text-[#9c907c] transition ease-in-out delay-150 hover:scale-110 duration-300 active:w-4 active:h-4 active:delay-100"/>
</button>
          </div>
          <div>
            <Cards dadosApi={dadosApi}/>
          </div>
        </div>
      </div>
  );
}