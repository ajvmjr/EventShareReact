import React, { Component } from 'react';
import '../assets/CSS/CriarEvento4.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'
import ImageUploader from 'react-images-upload';

class CriarEvento4 extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.state = {
            pictures: '',
            listaCategorias: [],
            categoriaId: '',
            categoria: '',
            categoriaNome: '',
            eventoNome: '',
            eventoData: '07/01/2020',
            eventoHorarioComeco: '',
            eventoHorarioFim: '',
            eventoDescricao: '',
            eventoCategoriaId: '',
            eventoStatusId: 3,
            criadorUsuarioId: 2,
            evento: '',
            eventoEspacoId: 1,
            eventoLinkInscricao: '',
            eventoRestrito: false
        }
        this.cadastrarEvento = this.cadastrarEvento.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(picture)
    }


    cadastrarEvento() {
        fetch('http://localhost:5000/api/eventotbl', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventoNome: this.state.eventoNome,
                eventoData: this.state.eventoData,
                eventoHorarioComeco: this.state.eventoHorarioComeco,
                eventoHorarioFim: this.state.eventoHorarioFim,
                eventoDescricao: this.state.eventoDescricao,
                eventoCategoriaId: this.state.eventoCategoriaId,
                eventoEspacoId: this.state.eventoEspacoId,
                eventoStatusId: this.state.eventoStatusId,
                criadorUsuarioId: this.state.criadorUsuarioId,
                eventoLinkInscricao: this.state.eventoLinkInscricao,
                eventoRestrito: this.state.eventoRestrito
            })
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Ta dando certo');
                }
            })
            .catch(erro => console.log(erro))
    }

    

    buscarCategorias() {
        console.log('Entrei')
        fetch('http://localhost:5000/api/categoria')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaCategorias: data }))
            .catch((erro) => console.log(erro))
    }
    updateStateData(event) {
        this.setState({ data: event.target.value })
        console.log(this.state.data)
    }



    armazenaCategoria(event) {
        let id = event.target.value
        console.log(id)
    }

    componentDidMount() {
        this.buscarCategorias()
    }


    render() {
        return (

            <div className='CriarEvento4'>
                <Cabecalho />
                <main className='main-criar-evento-4'>
                    <div className="banner-criar-evento-4">
                    </div>

                    <div className="titulo-criar-evento-4">
                        <h1>PREENCHA O FORMULÁRIO</h1>
                    </div>

                    <div className='container-sub6'>
                        <form id="formulario-sub6">

                            <div className="criar-evento-4-pai-input">
                                <input className="criar-evento-4-input" type="text" name="NomeEvento" value={this.state.eventoNome} placeholder="Nome do evento" />
                                <input className="criar-evento-4-input" type="text" name="HorarioInicio" value={this.state.eventoHorarioComeco} placeholder="Horário de início" />
                                <input className="criar-evento-4-input" type="text" name="HorarioFim" value={this.state.eventoHorarioFim} placeholder="Horário do fim" />
                                <input className="criar-evento-4-input" type="text" name="LinkInscricao" value={this.state.eventoLi} placeholder="Link para formulário de inscrição (opcional)" />
                                <div className="criar-evento-4-div-texto">
                                    <textarea className="criar-evento-4-texto" cols="35" rows="5" name='' placeholder="Descrição do evento para o site"></textarea>
                                </div>
                            </div>{/* fim criar-evento-4-pai-input */}

                            <div className="radiogeral-sub6">

                                <p>Número de participantes:</p>
                                <div className="radio-sub6">
                                    <div>
                                        <input type="radio" name="#" value="" /> 0 - 25

                                    </div>
                                    <div>
                                        <input type="radio" name="#" value="" /> 26 - 40
                                    </div>
                                    <div>
                                        <input type="radio" name="#" value="" /> 41 - 60
                                    </div>
                                </div>{/* fim radio-sub6 */}
                            </div>{/* fim radiogeral-sub6 */}


                            <div className="acesso-sub6">

                                <div className="plu-priv">
                                    <p>Se você for um funcionário da ThoughtWorks, seu evento será público ou privado?*</p>
                                </div>

                                <div className="radio2-sub6">
                                    <div>
                                        <input type="radio" name="1" value="male" />Sim
                                    </div>
                                    <div>
                                        <input type="radio" name="1" value="male" />Não
                                    </div>
                                </div>

                                <div className="obs">
                                    <p>*Essa pergunta só será válida se você for um funcionário da ThoughtWorks</p>
                                </div>

                                <div className="categorias-sub6">
                                    <p>Selecione a categoria que o seu evento se encaixa:</p>
                                    <select onChange={this.armazenaCategoria.bind(this)} name="categoria">
                                        <option selected>Escolha uma categoria</option>
                                        {
                                            this.state.listaCategorias.map(function (categoria) {
                                                return <option value={categoria.categoriaId} key={categoria.categoriaId} name="teste">{categoria.categoriaNome}</option>
                                            })
                                        }

                                    </select>
                                </div>
                            </div>{/* fim acesso-sub6 */}


                            <div className="diversidade-sub6">
                                <p>Seu evento tem foco em diversidade?</p>
                                <div className="radio2-sub6">
                                    <div>
                                        <input type="radio" name="25" value="male" />Sim
                                </div>
                                    <div>
                                        <input type="radio" name="25" value="male" />Não
                                </div>
                                </div>
                                <div className="criar-evento-4-pai-input">
                                    <input className="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Se sim, qual?" />
                                </div>
                            </div>



                            <div className="coffe-sub6">
                                <p>Coffe?</p>
                                <div>
                                    <input type="radio" name="s" value="male" /> Sim
                            </div>
                                <div>
                                    <input type="radio" name="s" value="male" /> Não
                            </div>
                                <div className="criar-evento-4-pai-input">
                                    <input className="criar-evento-4-input" type="text" name="Nome" id=""
                                        placeholder="Se sim, qual?" />
                                </div>
                            </div>




                            <div className="foto-sub6">
                                <p>Adicionar foto para o ícone do evento?(Opcional)</p>
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Escolha um arquivo'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png']}
                                    maxFileSize={5242880}
                                />
                            </div>

                            <div className="criar-evento-4-div-texto">
                                <textarea className="criar-evento-4-texto" cols="35" rows="5" placeholder="Observações adicionais(opcional)"></textarea>
                            </div>

                            <div className="botão_sub6">
                                <button>Continuar</button>
                            </div>


                        </form>

                    </div>{/* fim container-sub6 */}

                </main>
                <Rodape />
            </div>
        );
    }
}

export default CriarEvento4;