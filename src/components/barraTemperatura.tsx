import React from 'react';

const TemperaturaBarra = ({ temperatura, temperaturaMaxima, temperaturaMinima }:any) => {
    const percentual = ((temperatura - temperaturaMinima) / (temperaturaMaxima - temperaturaMinima)) * 100;
    const cor = `hsl(${120 - percentual * 1.2}, 100%, 50%)`;

    return (
        <div className="flex items-center">
            <div
                className="h-6 bg-gray-200 rounded-lg"
                style={{ width: 'calc(100% - 50px)' }}
            >
                <div
                    className="h-6 rounded-lg"
                    style={{ width: `${percentual}%`, backgroundColor: cor }}
                ></div>
            </div>
            <div className="ml-2">{temperatura}°C</div>
        </div>
    );
};

export default TemperaturaBarra;
