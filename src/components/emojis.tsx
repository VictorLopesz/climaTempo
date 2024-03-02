import react from 'react';
import sol from '@public/assets/sol.png'
import chuva from '@public/assets/chuva.png'
import flocodeNeve from '@public/assets/floco-de-neve.png'
import nuvens from '@public/assets/nuvens.png'
import nevoa from '@public/assets/nevoa.png'
import ventos from '@public/assets/vento.png'
import chuvisco from '@public/assets/chuvisco.png'

const ClimaTipo = [
    {
        type: "Céu limpo",
        icon: sol,
        mensagem: [
            "Vai sair? Não se esqueça do protetor solar",
            "Que tal uma vitamina D? Hoje é dia de praia",
            "Hoje é dia de praia, vamos pegar um sol? Não esqueça o protetor solar",
            "Aproveite o dia para fazer uma caminhada ao ar livre",
            "O sol está radiante, aproveite para se exercitar"
        ],
    },
    {
        type: "Chuva",
        icon: chuva,
        mensagem: [
            "Não se esqueça do guarda-chuva quando sair",
            "Prepare uma pipoca para assistir um filme, o clima hoje está propício à chuva",
            "O dia pede um cobertor e um bom livro",
            "Aproveite para relaxar em casa e ouvir a chuva caindo",
            "Chuva é vida! A natureza agradece"
        ],
    },
    {
        type: "Neve",
        icon: flocodeNeve,
        mensagem: [
            "Agasalhe-se, está muito frio lá fora",
            "Que tal um chocolate quente? Está frio!",
            "Hora de fazer um boneco de neve!",
            "A neve deixa tudo mais bonito, aproveite a paisagem",
            "Cuidado ao caminhar, a neve pode estar escorregadia"
        ],
    },
    {
        type: "Nuvens",
        icon: nuvens,
        mensagem: [
            "O céu está com nuvens, mas ainda passe o protetor para se proteger dos raios UVA e UVB",
            "Nada como um dia nublado para um passeio tranquilo",
            "Aproveite o clima ameno para uma tarde no parque",
            "O sol pode estar escondido, mas os raios ainda estão presentes",
            "As nuvens trazem um clima aconchegante, aproveite"
        ]
    },
    {
        type: "Névoa",
        icon: nevoa,
        mensagem: [
            "Olá, o nevoeiro chegou. Cuidado ao dirigir!",
            "A névoa pode prejudicar a visibilidade, fique atento!",
            "A névoa cria um clima misterioso, aproveite a atmosfera",
            "A névoa deixa tudo mais calmo e silencioso",
            "A névoa é como um véu que cobre a paisagem, aprecie a vista"
        ]
    },
    {
        type: "Ventos",
        icon:  ventos,
        mensagem: [
            "Está ventando bastante, cuidado!",
            "O vento traz um ar fresco e renovador",
            "Os ventos de hoje vão levar embora qualquer preocupação",
            "O vento pode bagunçar seu cabelo, mas também traz uma sensação de liberdade",
            "Aproveite a brisa suave para relaxar"
        ]
    },
    {
        type: "Chuvisco",
        icon: chuvisco,
        mensagem: [
            "É só um chuvisco, vai passar...",
            "Leve o guarda-chuva porque a chuva pode apertar",
            "O dia está perfeito para um chá quente e um bom livro",
            "Aproveite o clima para uma tarde de filmes e pipoca",
            "O chuvisco traz um clima aconchegante, aproveite em casa"
        ]
    },
]

export default ClimaTipo;
