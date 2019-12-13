import React, { Component } from 'react';
import '../assets/CSS/DescricaoEvento.css'
import CabecalhoSemBotao from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

class DescricaoEvento extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventoIdProps: this.props.match.params.id,
      evento: {
        eventoId: '',
        eventoNome: '',
        eventoData: '',
        eventoHorarioComeco: '',
        eventoHorarioFim: '',
        eventoDescricao: '',
        eventoCategoriaId: '',
        eventoEspacoId: '',
        criadorUsuario: '',
        criadorUsuarioId: '',
        usuarioId: '',
        usuarioNome: '' ,
        eventoImagem: '',
        eventoLinkInscricao: '',
        criadorUsuario: {
          usuarioId: '',
          usuarioNome: '',
        }
      }
    }

    this.buscarEvento = this.buscarEvento.bind(this)
    // this.teste = this.teste.bind(this)
  }

  // teste(){
  //   console.log(this.state.eventoId)
  // }

  buscarEvento() {
    fetch('http://localhost:5000/api/eventotbl/evento/' + this.state.eventoIdProps)
      .then(resposta => resposta.json())
      .then(resposta => {
        console.log("Resposta do fetch: ", resposta)
        this.setState({ evento: resposta }, () => console.log("Evento do state: ", this.state.evento));
      })
      .catch((erro) => console.log(erro))
  }

  componentDidMount() {
    // this.teste()
    this.buscarEvento()
  }
  render() {

    return (
      <div>
        <CabecalhoSemBotao />
        <main class="main-descricao">
          <section class="secao-geral-descricao">
            <section class="container_descrição">
              <div class="esquerda_topo_descrição">
                <h1 class="h1_descrição">{this.state.evento.eventoNome}</h1>
              </div>
              <div class="usuario_descrição">
                <div class="imagem-usuario">
                  <img src={require("../assets/imagens/ÍconeUsuário.png")} alt="" />
                </div>
                <div class="nome-usuario-descrição-evento">
                  <p>{this.state.evento.criadorUsuarioId}</p>
                </div>
              </div>
              <div class="descrição_descrição">
                <div class="imagem-evento">
                  <img src={require("../assets/imagens/Evento1.jpeg")} alt="" />
                </div>
                <div class="descricao-evento">
                  <p class="titulo-descrição">Detalhes</p>
                  <p>{this.state.evento.eventoDescricao}</p>
                </div>
              </div>
            </section>
            <section class="quadrado_forades">
              <div class="direita_topo_descrição">
                <div class="botao-inscrever-descricao-evento">
                  {/* <button onClick={() => window.location.replace></button> */}
                  
                <Link to={this.state.evento.eventoLinkInscricao} target="_blank">Me inscrever</Link>
                 {/* <Link to={'${{this.state.evento.eventoLinkInscricao}}'}>Me inscever</Link>
                 */}
                 {/* <a href={this.state.evento.eventoLinkInscricao}></a> */}
                </div>
                <div class="redes_descrição">
                  <div class="texto-compartilhar-descricao-evento">
                    <p>Compartilhar:</p>
                  </div>
                  <div class="rede-social-compartilhar-descricao-evento">
                    <a href="#">
                      <img src={require("../assets/imagens/iconeFacebook.png")} alt="Logo do Facebook" />
                    </a>
                  </div>
                  <div class="rede-social-compartilhar-descricao-evento">
                    <a href="#">
                      <img src={require("../assets/imagens/Twitter.jpg")} alt="Logo do Twitter" />
                    </a>
                  </div>
                  <div class="rede-social-compartilhar-descricao-evento">
                    <a href="#">
                      <img src={require("../assets/imagens/iconeInstagram.png")} alt="Logo do Instragram" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="info_descrição">
                <div class="textoinfo_descrição">
                  <div class="parte1_descrição">
                    <div class="data_descrição">
                      <div class="data_img-descrição">
                        <img src={require("../assets/imagens/clock.png")} alt="" />
                        <p>Data e Horário</p>
                      </div>
                      <div class="data-horario-descrição">
                        <Moment class='data-formato-home' format="DD/MM/YYYY">
                        {this.state.evento.eventoData}
                        </Moment>
                        <p>Das {this.state.evento.eventoHorarioComeco} as {this.state.evento.eventoHorarioFim}</p>
                      </div>
                    </div>
                  </div>
                  <div class="parte2_descrição">
                    <div class="local_descrição">
                      <div class="nome_local_img-descrição">
                        <img src={require("../assets/imagens/pin.png")} alt="" />
                        <p>Localização</p>
                      </div>
                      <div class="endereco_local_img-descrição">
                        <p>ThoughtWorks - Lounge</p>
                        <p>Av. Paulista 2300, Conjunto 41</p>
                        <p>São Paulo - SP</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="parte3_descrição">
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3279061044573!2d-46.66348088502224!3d-23.5566638846853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd6d0340c1%3A0xb82b9c6071314983!2sThoughtWorks!5e0!3m2!1spt-BR!2sbr!4v1574946138238!5m2!1spt-BR!2sbr"
                width="381.3" height="218" frameborder="0" style="border:0;" allowfullscreen=""/> */}
                </div>
              </div>
            </section>
          </section>
        </main>
        <Rodape />
      </div>
    );
  }
}

export default DescricaoEvento;