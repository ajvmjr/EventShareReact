import React, { Component } from "react";
import '../assets/CSS/PerfilAdmAprovarEventos.css';
import Api from '../services/Api';
import Cabecalho from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';
import TopoPerfil from '../components/TopoPerfil';

class PerfilAdmAprovarEvento extends Component {
  render() {
    return (
      <div>
        <Cabecalho/>
        <TopoPerfil/>
        <main class="main-perfil-adm-aprovar-eventos">
          <section class="titulo-perfil-adm-aprovar-eventos">
            <h1>Aprovar Eventos</h1>
          </section>

          <section id="eventos-perfil-adm-aprovar-eventos">
            <div class="eventos-perfil-adm-aprovar-eventos">
              <a href="#">
                <div class="evento-1-perfil-adm-aprovar-eventos">
                  <div class="evento-um-perfil-adm-aprovar-eventos">
                    <img
                      src={require("../assets/imagens/Evento1.jpeg")}
                      alt=""
                      class="evento-imagem-perfil-adm-aprovar-eventos"
                    />
                    <div class="evento-nome-data-hora-local-perfil-adm-aprovar-eventos">
                      <div class="evento-nome-perfil-adm-aprovar-eventos">
                        <p>WAKANDA TALKS</p>
                      </div>
                      <div class="evento-data-hora-local-perfil-adm-aprovar-eventos">
                        <div class="data-evento-perfil-adm-aprovar-eventos">
                          <p>07 Agosto</p>
                        </div>
                        <div class="hora-evento-perfil-adm-aprovar-eventos">
                          <p>19:00</p>
                        </div>
                        <div class="espaco-evento-perfil-adm-aprovar-eventos">
                          <p>Lounge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="evento-2-perfil-adm-aprovar-eventos">
                  <div class="evento-dois-perfil-adm-aprovar-eventos">
                    <img
                      src={require("../assets/imagens/Evento2.jpeg")}
                      alt=""
                      class="evento-imagem-perfil-adm-aprovar-eventos"
                      />
                    <div class="evento-nome-data-hora-local-perfil-adm-aprovar-eventos">
                      <div class="evento-nome-perfil-adm-aprovar-eventos">
                        <p>THOUGHTWORKS TECH TALKS</p>
                      </div>
                      <div class="evento-data-hora-local-perfil-adm-aprovar-eventos">
                        <div>
                          <p>16 Julho</p>
                        </div>
                        <div>
                          <p>19:00</p>
                        </div>
                        <div>
                          <p>Lounge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <section id="secao-botao-ver-mais-perfil-adm-aprovar-eventos">
              <button class="botao-ver-mais-perfil-adm-aprovar-eventos">
                Ver mais
              </button>
            </section>
          </section>
        </main>
        <Rodape/>
      </div>
    );
  }
}

export default PerfilAdmAprovarEvento;
