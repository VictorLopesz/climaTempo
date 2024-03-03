import React from 'react';
import useSWR from 'swr';

const fetcher = (url:any) => fetch(url).then((res) => res.json());

const RandomImage = () => {
  const { data, error } = useSWR(
    'https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=BYWJXPJCPH71XDJHFenmyI-cQZXg5ROmOjnixrBIFMA',
    fetcher
  );

  if (error) return <div className="bg-gray-900 text-white p-4">Erro ao carregar imagem</div>;
  if (!data || !data.urls) return(<></>);

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${data.urls.regular})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return <div style={backgroundImageStyle}></div>;
};

export default RandomImage;