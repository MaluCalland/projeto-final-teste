import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemFunk from '../assets/funk.png';

const Funk = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-funk'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Funk</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemFunk}
                    alt="Imagem do cantor Djavan"
                    width="403"
                    height="303"
                />
            </button>
        </div>
    );
}

export default Funk;