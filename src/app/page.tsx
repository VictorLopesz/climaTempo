'use client'
import Cards from '../components/cards';
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { BiLoaderAlt } from 'react-icons/bi';

const Key = "bcdd1ca6b3b6617e908b50f1dc55837f";

export default function Home() {

  const inputRef = useRef<HTMLInputElement>(null);
  const [dadosApi, setDadosApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (inputRef.current) {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Key}`);
        
        if (response.data.cod !== 200) {
          throw new Error(`Erro ao buscar os dados: ${response.data.message}`);
        }
        
        setDadosApi(response.data);
        inputRef.current.value = "";
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
        <div style={{ textAlign: 'center' }}>
        <div className="font-roboto h-screen bg-gradient-to-t to-[#38507a] via-[#1d79b6] from-[#fff] bg-cover grid place-items-center shadow-xl">
            <div className="bg-gradient-to-r from-[#8585E6] to-[#404096] w-96 h-[90%] p-3 rounded-xl shadow-lg shadow-indigo-500/50">
             <br/>
              <div className="flex items-center justify-center">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Digite uma cidade"
                  className="text-sm rounded-md p-3 bg-[#1b1a1da8] text-white w-full"
                />
                <div className="">
                  <button
                    onClick={fetchWeather}
                    className="m-1 ml-3">
                    {loading ? (
                      <BiLoaderAlt className="animate-spin text-[#71B5BC] w-6 h-6" />
                    ) : (
                      <FaSearch className="text-[#71B5BC] w-6 h-6 mt-1 hover:text-sky-800 transition ease-in-out delay-150 duration-300 active:duration-75 active:transition active:ease-in-out" />
                    )}
                  </button>
                </div>
              </div>
              {error !== "" && <p className="text-white bg-red-400 p-1 rounded-xl text-[10px] mt-2 m-5 flex items-center justify-center">{error}</p>}
              <div>
                <Cards dadosApi={dadosApi} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}