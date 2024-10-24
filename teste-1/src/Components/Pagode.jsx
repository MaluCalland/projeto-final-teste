import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemPagode from '../assets/pagode.png';

const Pagode = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-pagode'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Pagode</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemPagode}
                    alt="Imagem do cantor Djavan"
                    width="403"
                    height="323"
                />
            </button>
        </div>
    );
}

export default Pagode;