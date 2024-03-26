'use client'
import React from 'react'
import { Fade } from "react-awesome-reveal";
import termometro from '../../public/assets/termometros.png';
import umidade from '../../public/assets/umidade.png';
import ventos from '../../public/assets/ventos.png';
import atmosferico from '../../public/assets/atmosferico.png';
import { format } from 'date-fns';


const Informacoes = ({ dadosApi }: any) => {

    interface Traducoes {
        [key: string]: string;
    }

    const traducoes: Traducoes = {
        "Clear": "Céu Limpo",
        "Clouds": "Nuvens",
        "Rain": "Chuva",
        "Drizzle": "Chuvisco",
        "Thunderstorm": "Tempestade",
        "Snow": "Neve",
        "Mist": "Névoa",
        "Smoke": "Fumaça",
        "Haze": "Neblina",
        "Dust": "Poeira",
        "Fog": "Nevoeiro",
        "Sand": "Areia",
        "Ash": "Cinzas",
        "Squall": "Rajadas",
        "Tornado": "Tornado"
    };

    const descricao = dadosApi && dadosApi.weather[0].main;
    const descricaoTraduzida = descricao && traducoes[descricao];

    return (
        <>
            {dadosApi && (
                <div>
                    <div className="grid grid-cols-1 w-full text-left text-sm align-items-center">
                        <Fade delay={500}>
                            <p className="text-white shadow-2xl ml-1 -mt-2 font-semibold flex items-center justify-center text-[50px] mb-10">
                                {Math.floor(dadosApi.main.temp)}°
                            </p>
                        </Fade>
                        <div className="grid grid-cols-3 gap-1 text-center">
                            <Fade delay={600}>
                                <p className="text-black bg-[#b5b5ff] border rounded-tl-lg p-3 border-[#b5b5ff] shadow-2xl">
                                    <span className="font-semibold mb-1">Descrição</span>
                                    <br />
                                    {descricaoTraduzida}
                                </p>
                            </Fade>
                            <Fade delay={600}>
                                <p className="text-black bg-[#b5b5ff] border p-3 border-[#b5b5ff] shadow-2xl">
                                    <div className="grid grid-cols-1 justify-items-center">
                                        <span className="text-white flex flex-col">
                                            <div className="text-black flex items-center justify-center gap-1">
                                                <p className="font-semibold">Máxima</p> <p className="flex items-center justify-center rounded-[50%] h-[10px] w-[10px] shadow-2xl bg-[#DD0000]"></p>
                                                {Math.floor(dadosApi.main.temp_max)}º
                                            </div>
                                            <div className=" text-black flex items-center justify-center gap-1">
                                            <p className="font-semibold mr-1">Mínima</p> <p className="flex items-center justify-center rounded-[50%] h-[10px] w-[10px] shadow-2xl bg-[#0025dd]"></p>
                                                {Math.floor(dadosApi.main.temp_min)}º
                                            </div>
                                        </span>
                                    </div>
                                </p>
                            </Fade>
                            <Fade delay={600}>
                                <p className="text-black bg-[#b5b5ff] border p-3 rounded-tr-lg border-[#b5b5ff] shadow-2xl grid grid-cols-2 mb-1">
                                    <img src={termometro.src} alt="termometro" className="-ml-3 w-9" />
                                    <p className="grid grid-cols-1 -ml-6">
                                        <p className="font-semibold -mr-2 ">ST</p>
                                        {Math.floor(dadosApi.main.feels_like)}°C
                                    </p>
                                </p>
                            </Fade>
                            <Fade delay={700}>
                                <p className="text-black bg-[#b5b5ff] border rounded-bl-lg p-2 border-[#b5b5ff] shadow-2xl grid grid-cols-2 mb-1">
                                    <img src={umidade.src} alt="umidade" className="w-8 -ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-4 mt-1">
                                        <p className="font-semibold">Umidade</p>
                                        {dadosApi.main.humidity}%
                                    </p>
                                </p>
                            </Fade>
                            <Fade delay={700}>
                                <p className="text-black bg-[#b5b5ff] border p-2 border-[#b5b5ff] shadow-2xl grid grid-cols-2 mb-1">
                                    <img src={ventos.src} alt="ventos" className="w-8 ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-5 mt-1">
                                        <p className="font-semibold">Ventos</p>
                                        {Math.floor(dadosApi.wind.speed)} km/h
                                    </p>
                                </p>
                            </Fade>
                            <Fade delay={700}>
                                <p className="text-black bg-[#b5b5ff] border p-2 rounded-br-lg border-[#b5b5ff] shadow-2xl grid grid-cols-2 mb-1">
                                    <img src={atmosferico.src} alt="atmosferico" className="w-8 -ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-4 mt-1">
                                        <p className="font-semibold">Pressão</p>
                                        <p className="-ml-1">
                                            {Math.floor(dadosApi.main.pressure)} mbar
                                        </p>
                                    </p>
                                </p>
                            </Fade>
                        </div>
                    </div>
                </div >
            )}
        </>
    )
}

export default Informacoes;
