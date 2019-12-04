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
                    <div class="banner-criar-evento-4">
                    </div>

                    <div class="titulo-criar-evento-4">
                        <h1>PREENCHA O FORMULÁRIO</h1>
                    </div>

                    <div class='container-sub6'>
                        <form id="formulario-sub6">

                            <div class="criar-evento-4-pai-input">
                                <input class="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Nome do evento"/>
                                <input class="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Link para formulário de inscrição (opcional)"/>
                                <div class="criar-evento-4-div-texto">
                                    <textarea class="criar-evento-4-texto" cols="35" rows="5" placeholder="Descrição do evento para o site"></textarea>
                                </div>
                            </div>{/* fim criar-evento-4-pai-input */}

                            <div class="radiogeral-sub6">

                                <p>Número de participantes:</p>
                                <div class="radio-sub6">
                                    <div>
                                        <input type="radio" name="25" value=""> 0 - 25</input>
       
                                    </div>
                                    <div>
                                        <input type="radio" name="40" value=""> 26 - 40</input>
                                    </div>
                                    <div>
                                        <input type="radio" name="60" value=""> 41 - 60</input>   
                                    </div>
                                </div>{/* fim radio-sub6 */}
                            </div>{/* fim radiogeral-sub6 */}


                            <div class="acesso-sub6">

                                <div class="plu-priv">
                                    <p>Se você for um funcionário da ThoughtWorks, seu evento será público ou privado?*</p>
                                </div>

                                <div class="radio2-sub6">
                                    <div>
                                        <input type="radio" name="25" value="male">Sim</input>
                                    </div>
                                    <div>
                                        <input type="radio" name="25" value="male">Não</input>
                                    </div>
                                </div>

                                <div class="obs">
                                    <p>*Essa pergunta só será válida se você for um funcionário da ThoughtWorks</p>
                                </div>

                                <div class="categorias-sub6">
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


                        <div class="diversidade-sub6">
                            <p>Seu evento tem foco em diversidade?</p>
                            <div class="radio2-sub6">
                                <div>
                                    <input type="radio" name="25" value="male">Sim</input>
                                </div>
                                <div>
                                    <input type="radio" name="25" value="male">Não</input>
                                </div>
                            </div>
                            <div class="criar-evento-4-pai-input">
                                <input class="criar-evento-4-input" type="text" name="Nome" id="" placeholder="Se sim, qual?"/>
                            </div>
                        </div>
                    


                        <div class="coffe-sub6">
                            <p>Coffe?</p>
                            <div>
                                <input type="radio" name="s" value="male"> Sim</input>
                            </div>
                            <div>
                                <input type="radio" name="n" value="male"> Não</input>
                            </div>
                            <div class="criar-evento-4-pai-input">
                                <input class="criar-evento-4-input" type="text" name="Nome" id=""
                                    placeholder="Se sim, qual?"/>
                            </div>
                        </div>




                    <div class="foto-sub6">
                        <p>Adicionar foto para o ícone do evento?(Opcional)</p>
                        <input class="procurar-arquivo" type="file" />
                    </div>

                    <div class="criar-evento-4-div-texto">
                        <textarea class="criar-evento-4-texto" cols="35" rows="5" placeholder="Observações adicionais(opcional)"></textarea>
                    </div>

                    <div class="botão_sub6">
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