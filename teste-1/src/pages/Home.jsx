import React from 'react';
import FundoMPB from '../Components/FundoMPB';
import { Outlet , useNavigate} from 'react-router-dom';
import Sertanejo from '../Components/Sertanejo';
import Axe from '../Components/Axe';
import Forro from '../Components/Forro';
import Funk from '../Components/Funk';
import Pagode from '../Components/Pagode';
import Reggae from '../Components/Reggae';
import Samba from '../Components/Samba';
import Trap from '../Components/Trap';
import Rock from '../Components/Rock';

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

        <div>
            <p><FundoMPB/></p>
            <p><Axe/></p>
            <p><Sertanejo/></p>
            <p><Forro/></p>
            <p><Funk/></p>
            <p><Pagode/></p>
            <p><Trap/></p>
            <p><Samba/></p>
            <p><Reggae/></p>
            <p><Rock/></p>
        </div>
        {/* <p><Sertanejo/></p> */}
    
        <Outlet/>
        </>
    )
  };

export default Home
