import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemReggae from '../assets/reggae.jpg';

const Reggae = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-reggae'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Reggae</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemReggae}
                    alt="Imagem do cantor Djavan"
                    width="403"
                    height="353"
                />
            </button>
        </div>
    );
}

export default Reggae;