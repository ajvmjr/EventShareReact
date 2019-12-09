import React from 'react';
import '../assets/CSS/Categoria.css';
import Api from '../services/Api';
import Cabecalho from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import { Component } from 'react';

class Categoria extends Component{
  render(){
    return(
      <div>
        <Cabecalho/>
        <main className="pai-de-tudo"> 
        <section class="secao-add-categoria">
          
                <div>
                    <input type="text" name="nome-categoria" id="add-categoria"/>
                </div>

                <div class="botao-add-categoria">
                    <button>Adicionar</button>
                </div>
            
        </section>

        <section class="section-main-categoria">
            <section class="section-container-categoria">
                <section class="section-lista-categorias">
                    <section class="section-minicard-categoria">
                        <div class="div-minicard-nome-categoria">
                            <p>Aprendizagem</p>
                        </div>
                        <div class="div-editar-deletar-categoria">
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/edit.png")} alt="editar categoria" class="edits"/>
                                </button>
                            </div>
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/cross.png")} alt="excluir categoria" class="deletes"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="section-minicard-categoria">
                        <div class="div-minicard-nome-categoria">
                            <p>Saúde e Bem Estar</p>
                        </div>
                        <div class="div-editar-deletar-categoria">
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/edit.png")} alt="editar categoria" class="edits"/>
                                </button>
                            </div>
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/cross.png")} alt="excluir categoria" class="deletes"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="section-minicard-categoria">
                        <div class="div-minicard-nome-categoria">
                            <p>Carreiras e negócios</p>
                        </div>
                        <div class="div-editar-deletar-categoria">
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/edit.png")} alt="editar categoria" class="edits"/>
                                </button>
                            </div>
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/cross.png")} alt="excluir categoria" class="deletes"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="section-minicard-categoria">
                        <div class="div-minicard-nome-categoria">
                            <p>Cultura</p>
                        </div>
                        <div class="div-editar-deletar-categoria">
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/edit.png")} alt="editar categoria" class="edits"/>
                                </button>
                            </div>
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/cross.png")} alt="excluir categoria" class="deletes"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="section-minicard-categoria">
                        <div class="div-minicard-nome-categoria">
                            <p>Idiomas</p>
                        </div>
                        <div class="div-editar-deletar-categoria">
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/edit.png")} alt="editar categoria" class="edits"/>
                                </button>
                            </div>
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/cross.png")} alt="excluir categoria" class="deletes"/>
                                </button>
                            </div>
                        </div>
                    </section>
                    <section class="section-minicard-categoria">
                        <div class="div-minicard-nome-categoria">
                            <p>LGBTQ</p>
                        </div>
                        <div class="div-editar-deletar-categoria">
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/edit.png")}alt="editar categoria" class="edits"/>
                                </button>
                            </div>
                            <div>
                                <button class="botao-editar-excluir-categoria">
                                    <img src={require("../assets/imagens/cross.png")} alt="excluir categoria" class="deletes"/>
                                </button>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    </main>
    <Rodape/>
      </div>
    )
  }
}

export default Categoria;
