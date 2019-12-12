import React, { Component } from 'react'
import '../assets/CSS/TopoPerfil.css'



class TopoPerfil extends Component {
    render() {
        return (
            <div className="">
    <div className="pai-TopoPerfil">
        <div className="capa-TopoPerfil">
            <div className="nome-TopoPerfil">
                <p>Enzo Valentina</p>
            </div>
            <div className="fotoperfil-TopoPerfil">
            <img src={require("../assets/imagens/perfil1.png")} alt=""/>
            </div>
            {/* <!--fim textor--> */}
        </div>
        <nav className="menu-TopoPerfil">
            <a href="#">Editar Perfil</a>
            <a href="#">Painel de Eventos</a>
        </nav>
    </div>
            </div>
        )
    }
}

export default TopoPerfil
