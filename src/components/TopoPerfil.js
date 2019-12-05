import React, { Component } from 'react'
import '../assets/CSS/TopoPerfil.css'



class TopoPerfil extends Component {
    render() {
        return (
            <div className="">
    <div class="pai-perfilU">
        <div class="capa-perfilU">
            <div class="nome-perfilU">
                <p>Enzo Valentina</p>
            </div>
            <div class="fotoperfil-perfilU">
            <img src={require("../assets/imagens/perfil1.png")} alt=""/>
            </div>
            {/* <!--fim textor--> */}
        </div>
        <nav class="menu-perfilU">
            <a href="#">Editar Perfil</a>
            <a href="#">Painel de Eventos</a>
        </nav>
    </div>
            </div>
        )
    }
}

export default TopoPerfil
