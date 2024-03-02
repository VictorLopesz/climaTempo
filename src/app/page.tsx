'use client'
import Image from "next/image";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Key = "bcdd1ca6b3b6617e908b50f1dc55837f";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dadosApi, setDadosApi] = useState(null);


  const fetchWeather = async () => {
    if (inputRef.current) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Key}`;
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Falha na busca do Weather Data');
        }
        
        const data = await response.json();
        setDadosApi(null);
        setDadosApi(data);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  fetchWeather();

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
        </div>
      </div>
  );
}