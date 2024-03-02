'use client'
import react, { useState } from 'react';
import sol from '../../public/assets/sol.png'
import chuva from '../../public/assets/chuva.png'
import flocodeNeve from '../../public/assets/floco-de-neve.png'
import nuvens from '../../public/assets/nuvens.png'
import nevoa from '../../public/assets/nevoa.png'
import ventos from '../../public/assets/vento.png'
import chuvisco from '../../public/assets/chuvisco.png'
import rajadas from '../../public/assets/rajada.png'
import tempestade from '../../public/assets/tempestade.png'
import { Fade } from "react-awesome-reveal";

const ClimaTipo = [
    {
        type: "Céu limpo",
        icon: sol,
        mensagem: [
            "Vai sair? Não se esqueça do protetor solar",
        ],
    },
    {
        type: "Chuva",
        icon: chuva,
        mensagem: [
            "Não se esqueça do guarda-chuva quando sair",
        ],
    },
    {
        type: "Neve",
        icon: flocodeNeve,
        mensagem: [
            "Agasalhe-se, está muito frio lá fora",
        ],
    },
    {
        type: "Nuvens",
        icon: nuvens,
        mensagem: [
            "Aproveite o clima ameno para uma tarde no parque",
        ]
    },
    {
        type: "Névoa",
        icon: nevoa,
        mensagem: [
            "Olá, o nevoeiro chegou. Cuidado ao dirigir!",
        ]
    },
    {
        type: "Ventos",
        icon:  ventos,
        mensagem: [
            "O vento traz um ar fresco e renovador",
        ]
    },
    {
        type: "Chuvisco",
        icon: chuvisco,
        mensagem: [
            "Leve o guarda-chuva porque a chuva pode apertar",
        ]
    },
    {
        type: "Tempestade",
        icon: tempestade,
        mensagem: [
            "Proteja-se, está chovendo muito"
        ]
    },
        {
        type: "Rajada",
        icon: rajadas,
        mensagem: [
            "Cuidado com as rajadas"
        ]
    },
];



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
      

const Cards = ({dadosApi}:any) => {
    const [icons, setSelectedType] = useState(null);
    const descricao = dadosApi && dadosApi.weather[0].main;

    const descricaoTraduzida = descricao && traducoes[descricao];
    
    return(
        <>
        <div 
        className="gap-6 mt-10 mb-5"
        >
            {dadosApi && (
                <>
                <Fade
                direction="down"
                duration={1000}
                >
                    <p className="text-2xl font-semibold text-white flex items-center justify-center">
                        {dadosApi.name}, {dadosApi.sys.country}
                        {ClimaTipo.map((clima, index) => {
                            if (clima.type === descricaoTraduzida){
                                return (
                                    <span key={index} className="ml-2">
                                    <img 
                                        src={clima.icon.src}
                                        alt={clima.type}
                                        width={35} height={35}
                                        className="ml-2"
                                    />
                                </span>
                                )
                            }
                        })}
                    </p>
                </Fade>
                    <br/>
                    <div className="grid grid-cols-1 w-full m-2 text-sm">
                        <Fade delay={500}>
                            <p className="text-white">
                                <span className="font-semibold">Temperatura: </span> 
                                {dadosApi.main.temp}°C
                            </p>
                        </Fade>
                        <Fade delay={600}>
                            <p className="text-white">
                                <span className="font-semibold">Sensação Térmica: </span> 
                                {dadosApi.main.feels_like}°C
                            </p>
                        </Fade>
                        <Fade delay={700}>
                            <p className="text-white">
                                <span className="font-semibold">Umidade: </span> 
                                {dadosApi.main.humidity}%
                            </p>
                        </Fade>
                        <Fade delay={800}>
                            <p className="text-white">
                                <span className="font-semibold">Descrição: </span> 
                                {descricaoTraduzida}
                            </p>
                        </Fade>
                    </div>
                    <br/>
                    <br className="border border-b-[#505050e4]"/>
                    <Fade delay={1000}
                    direction="up"
                    >
                    <div className="flex items-center justify-center">
                        {ClimaTipo.map((clima, index):any => {
                            if (clima.type === descricaoTraduzida) {
                                return (
                                    <div key={index}>
                                        <p className="text-white font-medium text-center flex text-sm">
                                            {clima.mensagem}
                                        </p>
                                    </div>
                                )
                            }
                        })}
                       <br/>
                    </div>
                    </Fade>
                </>
            )}
        </div>
        </>
    );
}

export default Cards;