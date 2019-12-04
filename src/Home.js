import React, { Component } from 'react';
import './Home.css';
import Moment from 'react-moment';
import 'moment-timezone';
import Cabecalho from './components/CabecalhoSemBotao'
import Rodape from './components/Rodape'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaEventos: [],
      listaCategorias: [],
      eventoId: '',
      eventoNome: '',
      eventoData: '',
      eventoDescricao: '',
      eventoImagem: '',
      loading: false,
      categoria: '',
      categoriaId: '',
      categoriaNome: '',
      listaFiltroCategorias: '',
      eventoEspaco: '',
      eventoEspacoId: '',
      espacoNome: '',
      eventoHorarioComeco: '',
      eventosFiltrados: [],
      valorA: ''
      
    }
    this.buscarEvento = this.buscarEvento.bind(this);
    this.buscarCategorias = this.buscarCategorias.bind(this);
  }

  toggleFiltro(event){
    let myEvent = {
    id: event.target.getAttribute('id')
    };
    this.filtrarCategorias(myEvent)
    console.log(myEvent)
  }

  componentDidMount() {
    this.buscarEvento();
    this.buscarCategorias();
  }

  buscarEvento() {
    fetch('http://localhost:5000/api/eventotbl')
      .then(resposta => resposta.json())
      .then(data => this.setState({ listaEventos: data }))
      .catch((erro) => console.log(erro));
  }

  buscarCategorias() {
    this.setState({ loading: true });

    fetch('http://localhost:5000/api/categoria')
      .then(resposta => resposta.json())
      .then(data => this.setState({ listaCategorias: data }))
      .catch((erro) => console.log(erro))
  }

  // filtrarPorCategoria = (categoriaId) => {
  //   fetch('http://localhost:5000/api/eventotbl', {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json'
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       this.listaAtualizada();
  //       this.state(() => ({ lista: this.state.lista }))
  //     })
  //     .catch(error => console.log(error))
  //     .then(this.buscarEvento)
  // }

  


  filtrarCategorias(){
    
  }



  render() {

    return (
      <div classNameName="Home">
        <Cabecalho/>
        <main className="main-home">

          <section id="banner-home">
            <div className="banner-texto-home">
              <h1>Eventos</h1>
              <p>Agende o seu aqui</p>
              <a className='botaoPublicar' href="/CriarEvento">Publicar Evento</a>
            </div>
          </section>

          <section id="eventos-home">

            <div className="filtro-home">
              <div className="filtro-caixas-home">
                <div className="filtro-categorias-data-home">

                  <select  onClick={this.toggleFiltro.bind(this)}  value='value-select' id='id-select' className="filtro-categorias-home" >
                  <option id="value-option1" selected>Selecione uma categoria</option>
                  {
                    this.state.listaCategorias.map(function(categoria){
                    return <option  value={categoria.categoriaId} key={categoria.categoriaId}  name="teste">{categoria.categoriaNome}</option>
                    })
                  }
                  </select>

                  <input className="filtro-data-home" type="date"/>
                </div>
                </div>
                <div className="filtro-botão-home">
                  <button className="filtro-botão-input-home">Filtrar</button>
                </div>
              </div>

              <div className="eventos-home">
                {
                  this.state.listaEventos.map(function (evento) {
                    return(
                    <a href="#">
                      <div key={evento.eventoId} className="evento-1-home">
                        <div className="evento-um-home">
                          <img src={require("./assets/imagens/Evento1.jpeg")} alt="" className="evento-imagem-home"/>
                            <div className="evento-nome-data-hora-local-home">
                              <div className="evento-nome-home">
                                <p>{evento.eventoNome}</p>
                              </div>
                              <div className="evento-data-hora-local-home">
                                <div className="data-evento-home">
                                <p>Data:</p>
                                <Moment class='data-formato-home' format="DD/MM/YYYY">
                                {evento.eventoData}
                                </Moment>
                                </div>
                                <div class="hora-evento-home">
                                  <p class='horario-bold-home'>Horário:</p>
                                  <p>{evento.eventoHorarioComeco}</p>
                                </div>
                                <div className="espaco-evento-home">
                                  <p className='espaco-home'>Local:</p>
                                  <p>{evento.eventoEspaco.espacoNome}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </a>
                  )
                  })
                  }
                </div>

                  <section id="secao-botao-ver-mais-home">
                    <button className="botao-ver-mais-home">Ver mais</button>
          </section>

                  </section>

                <section id="FAQ-home">
                  <div className="FAQ-conteudo-home">
                    <div className="FAQ-texto-home">
                      <p>Você possui dúvidas?</p>
                      <p>Acesse nossa central de ajudas.</p>
                    </div>
                    <div className="FAQ-botão-home">
                      <a href="#">Saiba Mais</a>
                    </div>
                  </div>
                </section>

        </main>
        <Rodape/>
      </div>
            );
          }
        }
        
        
        
export default Home;
