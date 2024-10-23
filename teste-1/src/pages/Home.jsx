import React from 'react';
import FundoMPB from '../Components/FundoMPB';
import { Outlet , useNavigate} from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className='faixaInicial'>
            <h1 className='tituloHome'>Ritmo & Melodia</h1>
            <p className='subtituloHome'>Um site para você se aventurar nas músicas dos seus artistas brasilieros favoritos!</p>
        </div>
        <div>
            <form className='barraPesquisa' >
                <input className='inputPesquisa' type="text" name="query" placeholder="Faça sua pesquisa"></input>
                <button className='enviarPequisa' type="submit">Buscar</button>
            </form>
        </div>

        <p><FundoMPB/></p>
        {/* <p><Sertanejo/></p> */}
    
        <Outlet/>
        </>
    )
  };

export default Home
