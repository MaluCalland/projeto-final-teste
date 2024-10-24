import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemSamba from '../assets/samba.png';

const Samba = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-samba'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Samba</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemSamba}
                    alt="Imagem do cantor Djavan"
                    width="403"
                    height="303"
                />
            </button>
        </div>
    );
}

export default Samba;