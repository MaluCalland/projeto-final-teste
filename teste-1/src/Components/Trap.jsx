import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import imagemTrap from '../assets/trap.png';

const Trap = () => {
    const navigate = useNavigate(); // Inicialize o hook

    function handleClick() {
        navigate('/musicas-trap'); // Altere para a rota que você deseja
    };

    return (
        <div>
            <h1>Trap</h1>
            <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
                <img
                    src={imagemTrap}
                    alt="Imagem do cantor Djavan"
                    width="403"
                    height="353"
                />
            </button>
        </div>
    );
}

export default Trap;