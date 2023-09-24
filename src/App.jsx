import { useState } from "react";

import Perfil from "./components/Perfil"
import ReposList from "./components/RepoList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
    <input type="text" onBlur={e => setNomeUsuario(e.target.value)} className="input-user" placeholder="Digite o usuário" />

    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    </>
  )
}

export default App
