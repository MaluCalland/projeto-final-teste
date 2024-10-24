import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Playlist from "./pages/Playlist";
import NoPage from "./pages/NoPage";
import "./App.css"
import Cadastrar from "./pages/Cadastrar";
import MusicasMPB from "./pages/MusicasMPB";
import MusicasAxe from "./pages/MusicasAxe";
import MusicasForro from "./pages/MusicasForro";
import MusicasFunk from "./pages/MusicasFunk";
import MusicasReggae from "./pages/MusicasReggae";
import MusicasSamba from "./pages/MusicasSamba";
import MusicasSertanejo from "./pages/MusicasSertanejo";
import MusicasTrap from "./pages/MusicasTrap";
import MusicasPagode from "./pages/MusicasPagode";
import MusicasRock from './pages/MusicasRock'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="cadastro" element={<Cadastrar />} />
          <Route path="musicas-mpb" element={<MusicasMPB />} />
          <Route path="musicas-axe" element={<MusicasAxe />} />
          <Route path="musicas-forro" element={<MusicasForro />} />
          <Route path="musicas-funk" element={<MusicasFunk  />} />
          <Route path="musicas-reggae" element={<MusicasReggae />} />
          <Route path="musicas-samba" element={<MusicasSamba />} />
          <Route path="musicas-sertanejo" element={<MusicasSertanejo />} />
          <Route path="musicas-trap" element={<MusicasTrap />} />
          <Route path="musicas-pagode" element={<MusicasPagode />} />
          <Route path="musicas-rock" element={<MusicasRock />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;