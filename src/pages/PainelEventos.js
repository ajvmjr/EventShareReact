import React, { Component } from 'react';
import '../assets/CSS/PainelEventos.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'
import TopoPerfil from '../components/TopoPerfil';

class PainelEventos extends Component {
  render() {
    return (
      <div className="PainelEventos">
        <Cabecalho />
        <TopoPerfil />
        <div>
          <main class="main-perfilU">
            <section class="container-perfilU">
              <div class="texto-perfilU">
                <h2>Painel de Eventos</h2>
                <p>1 evento</p>
              </div>
              <div class="display-perfilU">
                <div class="painel-perfilU">
                  <div class="esquerda-perfilU">
                    <h3>Wakanda Talks</h3>
                    <img src={require("../assets/imagens/wakanda.png")} alt="" />
                  </div>

                  <div class="direita-perfilU">
                    <div class="editar-perfilU">
                      <a href="#">Editar Evento</a>
                    </div>
                    <div class="box-perfilU">
                      <h3>Data:</h3>
                      <p>07 de setembro de 2019</p>
                    </div>
                    <div class="box-perfilU">
                      <h3>Horário:</h3>
                      <p>Início 19h</p>
                      <p>Fim 22h</p>
                    </div>
                    <div class="box-perfilU">
                      <h3>Local:</h3>
                      <p>Lounge</p>
                    </div>
                    <div class="box-perfilU">
                      <h3>Status:</h3>
                      <div class="status-perfilU">
                        <div class="circulo-perfilU"></div>
                        <p>Esperando aprovação</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--fim painel--> */}

              </div>
            </section>
          </main>

        </div>
        <Rodape/>
      </div>
        );
      }
    }
      
export default PainelEventos;