import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemSertanejo from '../assets/marilia-mendonca-1-2.jpg';

const Sertanejo = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-sertanejo'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Sertanejo</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemSertanejo}
                    alt="Descrição da imagem"
                    width="403"
                    height="333"
                />
            </button>
        </div>
    );
}

export default Sertanejo;
