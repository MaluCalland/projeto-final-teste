import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemMPB from '../assets/DJAVAN-2022-6-b.jpg.webp';

const FundoMPB = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-mpb'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>MPB</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemMPB}
                    alt="Descrição da imagem"
                    width="403"
                    height="303"
                />
            </button>
        </div>
    );
}

export default FundoMPB;
