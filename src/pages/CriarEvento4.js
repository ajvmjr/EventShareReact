import React, { Component } from 'react';
import '../assets/CSS/CriarEvento4.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento4 extends Component {
    render() {
        return (

            <div className='CriarEvento4'>
                <Cabecalho />
                <main>
                    <div className="banner-criar-evento-4">
                    </div>

                    <div className="titulo-criar-evento-4">
                        <h1>PREENCHA O FORMULÁRIO</h1>
                    </div>

                    <div className='container-sub6'>
                        <form id="formulario-sub6">

                            <div className="criar-evento-4-pai-input">
                                <input className="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Nome do evento"/>
                                <input className="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Link para formulário de inscrição (opcional)"/>
                                <div className="criar-evento-4-div-texto">
                                    <textarea className="criar-evento-4-texto" cols="35" rows="5" placeholder="Descrição do evento para o site"></textarea>
                                </div>
                            </div>{/* fim criar-evento-4-pai-input */}

                            <div className="radiogeral-sub6">

                                <p>Número de participantes:</p>
                                <div className="radio-sub6">
                                    <div>
                                        <input type="radio" name="#" value=""/> 0 - 25
       
                                    </div>
                                    <div>
                                        <input type="radio" name="#" value=""/> 26 - 40
                                    </div>
                                    <div>
                                        <input type="radio" name="#" value=""/> 41 - 60   
                                    </div>
                                </div>{/* fim radio-sub6 */}
                            </div>{/* fim radiogeral-sub6 */}


                            <div className="acesso-sub6">

                                <div className="plu-priv">
                                    <p>Se você for um funcionário da ThoughtWorks, seu evento será público ou privado?*</p>
                                </div>

                                <div className="radio2-sub6">
                                    <div>
                                        <input type="radio" name="1" value="male"/>Sim
                                    </div>
                                    <div>
                                        <input type="radio" name="1" value="male"/>Não
                                    </div>
                                </div>

                                <div className="obs">
                                    <p>*Essa pergunta só será válida se você for um funcionário da ThoughtWorks</p>
                                </div>

                                <div className="categorias-sub6">
                                        <p>Selecione a categoria que o seu evento se encaixa:</p>
                                    <select name="categoria">
                                        <option value="valor0" selected>Selecione</option>
                                        <option value="valor1">Tecnologia</option>
                                        <option value="valor2">Aprendizagem</option>
                                        <option value="valor3">Idiomas</option>
                                        <option value="valor4">Cultura</option>
                                        <option value="valor5">Música</option>
                                        <option value="valor6">Movimentos</option>
                                        <option value="valor7">LGBTQ+</option>
                                        <option value="valor8">Carreiras e Negócios</option>
                                    </select>
                                </div>
                            </div>{/* fim acesso-sub6 */}


                        <div className="diversidade-sub6">
                            <p>Seu evento tem foco em diversidade?</p>
                            <div className="radio2-sub6">
                                <div>
                                    <input type="radio" name="25" value="male"/>Sim
                                </div>
                                <div>
                                    <input type="radio" name="25" value="male"/>Não
                                </div>
                            </div>
                            <div className="criar-evento-4-pai-input">
                                <input className="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Se sim, qual?"/>
                            </div>
                        </div>
                    


                        <div className="coffe-sub6">
                            <p>Coffe?</p>
                            <div>
                                <input type="radio" name="s" value="male"/> Sim
                            </div>
                            <div>
                                <input type="radio" name="s" value="male"/> Não
                            </div>
                            <div className="criar-evento-4-pai-input">
                                <input className="criar-evento-4-input" type="text" name="Nome" id=""
                                    placeholder="Se sim, qual?"/>
                            </div>
                        </div>




                    <div className="foto-sub6">
                        <p>Adicionar foto para o ícone do evento?(Opcional)</p>
                        <input className="procurar-arquivo" type="file" />
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
                        <Rodape/>
    </div>
                    );
                }
            }
            
export default CriarEvento4;