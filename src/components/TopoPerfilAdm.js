import React, { Component } from 'react'
import '../assets/CSS/TopoPerfilAdm.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { parseJwt }  from '../services/auth';


class TopoPerfilAdm extends Component {
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
                <div className="pai-TopoPerfil1">
                    <div className="capa-TopoPerfil1">
                        <div key={this.state.usuario.usuarioId} className="nome-TopoPerfil1">
                            <p>{this.state.usuario.usuarioNome}</p>
                        </div>
                        <div className="fotoperfil-TopoPerfil1">
                            <img src={require("../assets/imagens/iconeUsuario.png")} alt="" />
                        </div>
                        {/* <!--fim textor--> */}
                    </div>
                    {/* <nav className="menu-TopoPerfil">
                        <Link to={"/PerfilAdmAprovarEventos"} >Aprovar Eventos</Link>
                    </nav> */}
                </div>
            </div>
        )
    }

}

export default TopoPerfilAdm
