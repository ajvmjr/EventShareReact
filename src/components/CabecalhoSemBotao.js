import React, { Component } from 'react'
import '../assets/CSS/CabecalhoSemBotao.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoSemBotao extends Component {
    render() {
        return (
            <div className="">
                <header>
                    <section id="cabecalho-padrao1">
                        <div class="itens-cabecalho-padrao1">

                            <div class="logo-eventshare-cabecalho-padrao1">
                                <a href="/">
                                    <img src={Logo} alt="Logo do projeto Eventshare1" />
                                </a>
                            </div>

                            <div class="menu-cabecalho-padrao1">
                                <nav class="menu1">
                                    <ul>
                                        <li>
                                            <a href="/Cadastro">Criar Conta</a>
                                        </li>
                                        <li>
                                            <a href="/Login">Login</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </section>
                </header>
            </div>
        )
    }
}

export default CabecalhoSemBotao