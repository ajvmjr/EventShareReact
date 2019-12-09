import React from 'react';
import '../assets/CSS/EditarPerfilUsuario.css';
import Cabecalho from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import TopoPerfil from '../components/TopoPerfil'


function EditarPerfilUsuario() {
  return (
    <div>
      <Cabecalho />
      <TopoPerfil/>
      <main className="usuario-editar-perfil-main">
        <section className="usuario-editar-perfil-pai">
          <div className="usuario-editar-perfil-dados">
            <div className="usuario-editar-perfil-nome">
              <p>Enzo Valentina</p>
            </div>
            <div className="usuario-editar-perfil-email">
              <p>enzovalentina@gmail.com</p>
            </div>
            <div className="usuario-editar-perfil-comunidade">
              <p>SOUJava</p>
            </div>
            <div className="usuario-editar-perfil-senha">
              <p>enzo1234</p>
            </div>
          </div>
          <div className="usuario-editar-perfil-button">
            <button className="usuario-editar-perfil-botao-editar">Editar</button>
            <button className="usuario-editar-perfil-botao-excluir">Excluir</button>
          </div>
        </section> 
        </main>
      <Rodape/>
    </div>
  );
}

export default EditarPerfilUsuario;