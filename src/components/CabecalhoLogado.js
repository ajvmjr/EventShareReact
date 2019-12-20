import React, { Component } from 'react'
import '../assets/CSS/CabecalhoLogado.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoLogado extends Component {

    
    

    render() {
        return (
            <div className="">
                <header>
                    <section id="cabecalho-padrao">
                        <div className="itens-cabecalho-padrao">

                            <div className="logo-eventshare-cabecalho-padrao">
                                <a href="/">
                                    <img src={Logo} alt="Logo do projeto Eventshare" />
                                </a>
                            </div>


                            <div className="menu-cabecalho-padrao">
                                <nav className="menu">

                                    <ul>
                                        <li>
                                            <a href="/CriarEvento" id="btns-menu-cabecalho-padrao">Publicar evento</a>
                                        </li>
                                    </ul>

                                    <ul>

                                        <li>
                                            <a href="/PerfilUsuario">Meu Perfil</a>
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

export default CabecalhoLogado

