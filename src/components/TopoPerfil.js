import React, { Component } from 'react'
import '../assets/CSS/TopoPerfil.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { parseJwt }  from '../services/auth';


class TopoPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            usuarioId: parseJwt().UserId,
            usuarioNome: ''
        }
    }

    buscarUsuario(){
        fetch('https://localhost:5001/api/usuariotbl/' + this.state.usuarioId)
          .then(resposta => resposta.json())
          .then(data => {
            this.setState({ usuario: data })
          })
          .catch(erro => {
            console.log(erro);
          })
    }

    componentDidMount() {
        this.buscarUsuario();
    }

    render() {
        return (
            <div className="">
                <div class="pai-TopoPerfil">
                    <div class="capa-TopoPerfil">
                        <div key={this.state.usuario.usuarioId} class="nome-TopoPerfil">
                            <p>{this.state.usuario.usuarioNome}</p>
                        </div>
                        <div class="fotoperfil-TopoPerfil">
                            <img src={require("../assets/imagens/perfil1.png")} alt="" />
                        </div>
                        {/* <!--fim textor--> */}
                    </div>
                    <nav class="menu-TopoPerfil">
                        <Link to={"/EditarPerfilUsuario"}>Editar Perfil</Link>
                        <Link to={"/PerfilUsuario"} >Painel de Eventos</Link>
                    </nav>
                </div>
            </div>
        )
    }

}

export default TopoPerfil

