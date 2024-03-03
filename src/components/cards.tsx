'use client'
import react, { useState } from 'react';
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


const Cards = ({dadosApi}:any) => {
    const horaAtual = new Date().getHours();
    
    const ClimaTipo = [
        {
            type: "Céu Limpo",
            icon: horaAtual >= 6 && horaAtual <= 18  ? sol : lua,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "Vai sair? Não se esqueça do protetor solar" : "Tenha uma boa noite, durma bem!",
        },
        {
            type: "Chuva",
            icon: chuva,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "Não se esqueça do guarda-chuva quando sair" : "Que delicia dormir com barulho da chuva"
        },
        {
            type: "Neve",
            icon: flocodeNeve,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "Agasalhe-se, está muito frio lá fora" : "Seu cobertor está quentinho, que inveja",
        },
        {
            type: "Nuvens",
            icon: nuvens,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "Aproveite o clima ameno para uma tarde no parque" : "O céu está com nuvens e é lindo à noite"
        },
        {
            type: "Névoa",
            icon: nevoa,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "Olá, o nevoeiro chegou. Cuidado ao dirigir!" : "Não dá para enxergar nada essa hora, fique em casa"
        },
        {
            type: "Ventos",
            icon:  ventos,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "O vento traz um ar fresco e renovador" : "Barulho estranho, né? É só o vento na sua porta, relaxe e descanse"
        },
        {
            type: "Chuvisco",
            icon: chuvisco,
            mensagem:  horaAtual >= 6 && horaAtual <= 18  ? "Leve o guarda-chuva porque a chuva pode apertar" : "Tire a roupa da corda antes de dormir; a chuva pode apertar"
        },
        {
            type: "Tempestade",
            icon: tempestade,
            mensagem: horaAtual >= 6 && horaAtual <= 18  ? "Proteja-se, está chovendo muito" : "Fique alerta, a chuva pode ser perigosa"
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
          
    const [icons, setSelectedType] = useState(null);
    const descricao = dadosApi && dadosApi.weather[0].main;
    const descricaoTraduzida = descricao && traducoes[descricao];
    
    return(
        <>
        <Fade
        duration={1000}
        >
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
                    <div className="grid grid-cols-1 w-full text-left m-2 text-sm">
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
        </Fade>
        </>
    );
}

export default Cards;