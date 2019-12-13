import React, { Component } from 'react';
import '../assets/CSS/EditarPerfilAdm.css'
import CabecalhoBotao from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import TopoPerfil from '../components/TopoPerfil'


function EditarPerfilAdm () {
    return (
      <div>
        <CabecalhoBotao />
        <TopoPerfil />
        <main className="adm-editar-perfil-main">
          <section className="adm-editar-perfil-pai">

            <div className="adm-editar-perfil-dados">

              <div class="adm-editar-perfil-nome">
                <p>Ana Camargo</p>
              </div>

              <div class="adm-editar-perfil-email">
                <p>anacamargo@gmail.com</p>
              </div>

              <div class="adm-editar-perfil-senha">
                <p>anac1234</p>
              </div>

            </div>
          </section>
        </main>
        <Rodape />
      </div>
    );
}

export default EditarPerfilAdm;