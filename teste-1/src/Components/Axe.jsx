import React from 'react';

import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

import imagemAxe from '../assets/axe.webp'

const Axe = () => {

  const navigate = useNavigate(); // Inicialize o hook

  function handleClick() {
    navigate('/musicas-axe'); // Altere para a rota que você deseja
  };

  return (
    <div>
    <h1>Axé</h1>
    <button onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
        <img
            src={imagemAxe}
            alt="Descrição da imagem"
            width="403"
            height="403"
        />
    </button>
  </div>
  )
}

export default Axe
