'use client'
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
import Informacoes from '../components/informacoes';
import calor from '../../public/assets/calor.png';
import frio from '../../public/assets/frio.png';
import chocolateQuente from '../../public/assets/chocolate-quente.png';
import congelando from '../../public/assets/congelando.png';
import praia from '../../public/assets/praia.png';
import ioga from '../../public/assets/ioga.png';
import { Fade } from "react-awesome-reveal";


const Cards = ({ dadosApi }: any) => {
    const horaAtual = new Date().getHours();

    const sensacaoTermica = () => {
        if (dadosApi && dadosApi.main && dadosApi.main.feels_like) {
            if (dadosApi.main.feels_like > 30) {
                return calor.src;
            } else if (dadosApi.main.feels_like >= 20 && dadosApi.main.feels_like <= 30) {
                return praia.src;
            } else if (dadosApi.main.feels_like >= 15 && dadosApi.main.feels_like <= 20) {
                return ioga.src;
            } else if (dadosApi.main.feels_like >= 5 && dadosApi.main.feels_like <= 15) {
                return chocolateQuente.src;
            } else if (dadosApi.main.feels_like >= 1 && dadosApi.main.feels_like <= 5) {
                return frio.src;
            } else {
                return congelando.src;
            }
        }
        return "";
    }

    const ClimaTipo = [
        {
            type: "Céu Limpo",
            icon: horaAtual >= 6 && horaAtual <= 18 ? sol : lua,
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Vai sair? Não se esqueça do protetor solar" : "Aproveite a vida, ela é bela demais",
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
            mensagem: horaAtual >= 6 && horaAtual <= 18 ? "Que tal assistir um filme? Prepare a pipoca" : "O céu está com nuvens, veja como é lindo"
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
                                <p className="text-[12px] bg-[#39398B] shadow-md rounded-full p-2 text-white flex text-center justify-center ml-3">
                                    {dadosApi.name}, {dadosApi.sys.country}
                                </p>
                                <Fade
                                    direction='right'
                                    duration={1000}
                                >
                                    <img src={sensacaoTermica()} alt="Sensação Térmica" width={40} height={40} className="mr-8" />
                                </Fade>
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
                            <div className="-mt-2">
                                <Informacoes dadosApi={dadosApi} />
                            </div>
                            <br />
                        </>
                    )}
                </div>
            </Fade>
        </>
    );
}

export default Cards;