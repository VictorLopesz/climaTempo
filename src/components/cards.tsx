'use client'
import react, { useEffect, useState } from 'react';
import sol from '../../public/assets/sol.png'
import lua from '../../public/assets/lua.png'
import chuva from '../../public/assets/chuva.png'
import flocodeNeve from '../../public/assets/floco-de-neve.png'
import nuvens from '../../public/assets/nuvens.png'
import nevoa from '../../public/assets/nevoa.png'
import ventos from '../../public/assets/vento.png'
import chuvisco from '../../public/assets/chuvisco.png'
import rajadas from '../../public/assets/rajada.png'
import tempestade from '../../public/assets/tempestade.png'
import { Fade } from "react-awesome-reveal";


const Cards = ({ dadosApi }: any) => {
    const horaAtual = new Date().getHours();
    const [datahora, setDatahora] = useState(new Date().toLocaleTimeString());

    const ClimaTipo = [
        {
            type: "Céu Limpo",
            icon: sol,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Vai sair? Não se esqueça do protetor solar" : "Hoje teremos um dia lindo",
        },
        {
            type: "Chuva",
            icon: chuva,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Não se esqueça do guarda-chuva quando sair" : "Que delicia dormir com barulho da chuva"
        },
        {
            type: "Neve",
            icon: flocodeNeve,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Agasalhe-se, está muito frio lá fora" : "Seu cobertor está quentinho, que inveja",
        },
        {
            type: "Nuvens",
            icon: nuvens,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Aproveite o clima ameno, respire" : "O céu está com nuvens, veja como é lindo"
        },
        {
            type: "Névoa",
            icon: nevoa,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Olá, o nevoeiro chegou. Cuidado ao dirigir!" : "Olá, o nevoeiro chegou. Cuidado ao dirigir!"
        },
        {
            type: "Ventos",
            icon: ventos,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "O vento traz um ar fresco e renovador" : "Barulho estranho, né? É só o vento na sua porta, relaxe e descanse"
        },
        {
            type: "Chuvisco",
            icon: chuvisco,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Leve o guarda-chuva porque a chuva pode apertar" : "Tire a roupa da corda; a chuva pode apertar"
        },
        {
            type: "Tempestade",
            icon: tempestade,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Proteja-se, está chovendo muito" : "Fique alerta, a chuva pode ser perigosa"
        },
        {
            type: "Rajada",
            icon: rajadas,
            mensagem:
                "Cuidado com as rajadas"
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

    const descricao = dadosApi && dadosApi.weather[0].main;
    const descricaoTraduzida = descricao && traducoes[descricao];

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDatahora(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <>
            <Fade
                duration={1000}
            >
                <div
                    className="gap-6 mt-3 mb-5"
                >
                    {dadosApi && (
                        <>
                            <div className="text-center flex items-center justify-between w-auto">
                                <p className="text-[12px] bg-[#39398B] shadow-md rounded-full p-2 text-white">
                                    {dadosApi.name}, {dadosApi.sys.country}
                                </p>
                                <p className="mr-4 mt-1 text-white font-semibold ">
                                    {datahora}
                                </p>
                            </div>
                            <br />
                            <Fade
                                direction="down"
                                duration={1000}
                            >
                                <p className="flex items-center justify-center">
                                    {ClimaTipo.map((clima, index) => {
                                        if (clima.type === descricaoTraduzida) {
                                            return (
                                                <span key={index} className="ml-2">
                                                    <img
                                                        src={clima.icon.src}
                                                        alt={clima.type}
                                                        width={140} height={140}
                                                    />
                                                </span>
                                            )
                                        }
                                    })}
                                </p>
                            </Fade>
                            <br />
                            <div className="grid grid-cols-1 w-full text-left text-sm">
                                <Fade delay={500}>
                                    <p className="text-white shadow-2xl font-semibold flex items-center justify-center text-[30px] mb-10">
                                        {Math.floor(dadosApi.main.temp)}°C
                                    </p>
                                </Fade>
                                <div className="grid grid-cols-3 gap-2 text-center">
                                    <Fade delay={800}>
                                        <p className="text-white">
                                            <span className="font-semibold mb-1">Descrição</span>
                                            <br />
                                            {descricaoTraduzida}
                                        </p>
                                    </Fade>
                                    <Fade delay={600}>
                                        <p className="text-white">
                                            <span className="font-semibold mb-1">Sensação Térmica </span>
                                            <br />
                                            {Math.floor(dadosApi.main.feels_like)}°C
                                        </p>
                                    </Fade>
                                    <Fade delay={700}>
                                        <p className="text-white">
                                            <span className="font-semibold mb-1">Umidade </span>
                                            <br />
                                            {dadosApi.main.humidity}%
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                            <br />
                            <br className="border border-b-[#505050e4]" />

                            <Fade delay={1000}
                                direction="up"
                            >
                                <div className="flex items-center justify-center p-2 bg-[#e4e4ea] rounded-xl shadow-2xl">
                                    {ClimaTipo.map((clima, index): any => {
                                        if (clima.type === descricaoTraduzida) {
                                            return (
                                                <div key={index}>
                                                    <p className="text-[#353689] font-semibold text-center flex text-sm">
                                                        {clima.mensagem}
                                                    </p>
                                                </div>
                                            )
                                        }
                                    })}
                                    <br />
                                </div>
                            </Fade>
                        </>
                    )}
                </div>
            </Fade>
        </>
    );
}

export default Cards;