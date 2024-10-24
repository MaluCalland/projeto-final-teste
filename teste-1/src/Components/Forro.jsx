import React from 'react';

import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

import imagemForro from '../assets/forro.png'

const Forro = () => {

  const navigate = useNavigate(); // Inicialize o hook

  function handleClick() {
    navigate('/musicas-forro'); // Altere para a rota que você deseja
  };

  return (
    <div>
    <h1>Forró</h1>
    <button  onClick={handleClick} style={{ border: 'none', background: 'none', padding: 0 }}>
        <img
            src={imagemForro}
            alt="Descrição da imagem"
            width="403"
            height="303"
        />
    </button>
  </div>
  )
}

export default Forro
