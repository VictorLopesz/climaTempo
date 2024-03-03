'use client'
import Cards from '../components/cards';
import Image from "next/image";
import { useRef, useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from 'react-icons/bi';
import Background from '../components/background';
import { Fade } from "react-awesome-reveal";

const Key = "bcdd1ca6b3b6617e908b50f1dc55837f";

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);
  const [dadosApi, setDadosApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { reset } = useForm();


  const fetchWeather = async () => {
    if (inputRef.current) {
      setLoading(true);
      setError("");
      reset();
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Key}`);
  
        if (response.data.cod !== 200) {
          throw new Error(`Erro ao buscar os dados: ${response.data.message}`);
        }
  
        setDadosApi(response.data);
      } catch (error) {
        console.error('Erro na busca:', error);
        setError("Localização não encontrada. Por favor, tente novamente.");
      } finally {
        setLoading(false);
      }
    }
  }  
  
  return (
    <>
    <div>
      <Background />
      <div style={{ textAlign: 'center' }}>
      <div className="h-screen w-full grid place-items-center shadow-xl">
        <div className="bg-[#161617cd] w-80 p-3 rounded-lg border border-sky-600">
          <div className="flex items-center justify-center">
            <input 
            ref={inputRef}
              type="text"
              placeholder="Digite sua Localização"
              className="text-sm border border-sky-600 rounded-md p-1 bg-[#1b1a1da8] text-white" 
            />
            <div className="">
            <button 
              onClick={fetchWeather}
              className="m-1 ml-3">
                {loading ? (
                  <BiLoaderAlt className="animate-spin text-sky-600 w-6 h-6" />
                ) : (
                  <FaSearch className="text-sky-600 w-6 h-6 mt-1 hover:text-sky-800 transition ease-in-out delay-150 duration-300 active:duration-75 active:transition active:ease-in-out" />
                )}
            </button>
            </div>
          </div>
          {error !== "" && <p className="text-red-400 text-sm mt-2 flex items-center justify-center">{error}</p>}
          <div>
            <Cards dadosApi={dadosApi}/>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}