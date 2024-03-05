'use client'
import React from 'react'
import { Fade } from "react-awesome-reveal";
import termometro from '../../public/assets/termometros.png';
import umidade from '../../public/assets/umidade.png';
import TemperaturaBarra from './barraTemperatura';

const Informacoes = ({ dadosApi, temperatura, temperaturaMaxima, temperaturaMinima }: any) => {

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
                            <p className="text-white shadow-2xl mt-1 font-semibold flex items-center justify-center text-[30px] mb-10">
                                {Math.floor(dadosApi.main.temp)}°C
                            </p>
                        </Fade>

                        <div className="grid grid-cols-1 -mt-4 ml-4 justify-items-center">
                        <span>
                                {Math.floor(dadosApi.main.temp_max)}º
                                <TemperaturaBarra
                                    temperatura={temperatura}
                                    temperaturaMaxima={temperaturaMaxima}
                                    temperaturaMinima={temperaturaMinima}
                                />
                                {Math.floor(dadosApi.main.temp_min)}º
                            </span>
                        </div>
                        <br />
                        <div className="grid grid-cols-3 gap-3 text-center">
                            <Fade delay={800}>
                                <p className="text-black bg-[#b5b5ff] border rounded-lg p-3 border-[#b5b5ff] shadow">
                                    <span className="font-semibold mb-1">Descrição</span>
                                    <br />
                                    {descricaoTraduzida}
                                </p>
                            </Fade>
                            <Fade delay={600}>
                                <p className="text-black bg-[#b5b5ff] border rounded-lg p-3 border-[#b5b5ff] shadow grid grid-cols-2 mb-1">
                                    <img src={termometro.src} alt="termometro" className="-ml-3 w-9" />
                                    <p className="grid grid-cols-1 -ml-6">
                                        <p className="font-semibold -mr-2 ">ST</p>
                                        {Math.floor(dadosApi.main.feels_like)}°C
                                    </p>
                                </p>
                            </Fade>
                            <Fade delay={700}>
                                <p className="text-black bg-[#b5b5ff] border rounded-lg p-2 border-[#b5b5ff] shadow grid grid-cols-2 mb-1">
                                    <img src={umidade.src} alt="umidade" className="w-8 -ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-4 mt-1">
                                        <p className="font-semibold">Umidade</p>
                                        {dadosApi.main.humidity}%
                                    </p>
                                </p>
                            </Fade>

                            <Fade delay={800}>
                                <p className="text-black bg-[#b5b5ff] border rounded-lg p-2 border-[#b5b5ff] shadow grid grid-cols-2 mb-1">
                                    <img src={umidade.src} alt="umidade" className="w-8 -ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-4 mt-1">
                                        <p className="font-semibold">Umidade</p>
                                        {dadosApi.main.humidity}%
                                    </p>
                                </p>
                            </Fade>
                            <Fade delay={900}>
                                <p className="text-black bg-[#b5b5ff] border rounded-lg p-2 border-[#b5b5ff] shadow grid grid-cols-2 mb-1">
                                    <img src={umidade.src} alt="umidade" className="w-8 -ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-4 mt-1">
                                        <p className="font-semibold">Umidade</p>
                                        {dadosApi.main.humidity}%
                                    </p>
                                </p>
                            </Fade>
                            <Fade delay={1000}>
                                <p className="text-black bg-[#b5b5ff] border rounded-lg p-2 border-[#b5b5ff] shadow grid grid-cols-2 mb-1">
                                    <img src={umidade.src} alt="umidade" className="w-8 -ml-1 mt-1" />
                                    <p className="mb-1 grid grid-cols-1 -ml-4 mt-1">
                                        <p className="font-semibold">Umidade</p>
                                        {dadosApi.main.humidity}%
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
