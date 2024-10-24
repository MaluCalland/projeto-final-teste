import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemRock from '../assets/rock-brasil.webp';

const Rock = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-rock'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Rock</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemRock}
                    alt="Imagem do cantor Djavan"
                    width="403"
                    height="253"
                />
            </button>
        </div>
    );
}

export default Rock;
