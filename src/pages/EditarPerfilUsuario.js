import React, { Component } from 'react';
import '../assets/CSS/EditarPerfilUsuario.css';
import Cabecalho from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import TopoPerfil from '../components/TopoPerfil';
import { parseJwt }  from '../services/auth';
import Api from '../services/Api';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class EditarPerfilUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      usuarioId: parseJwt().UserId,
      usuarioNome: '',
      usuarioEmail: '',
      usuarioComunidade: '',
      usuarioSenha: '',
      usuarioTipoId: parseJwt().Tipo,
      editarModal: {
        usuario: '',
        usuarioId: parseJwt().UserId,
        usuarioNome: '',
        usuarioEmail: '',
        usuarioComunidade: '',
        usuarioSenha: '',
        usuarioTipoId: parseJwt().Tipo,
      }
    }

    this.atualizarEstadoNome = this.atualizarEstadoNome.bind(this);
    this.atualizarEstadoEmail = this.atualizarEstadoEmail.bind(this);
    this.atualizarEstadoComunidade = this.atualizarEstadoComunidade.bind(this);
    this.atualizarEstadoSenha = this.atualizarEstadoSenha.bind(this);
    this.buscarUsuario = this.buscarUsuario.bind(this);
    this.salvarAlteracoes = this.salvarAlteracoes.bind(this);
  }

  buscarUsuario(){
    fetch('https://localhost:5001/api/usuariotbl/' + this.state.usuarioId)
      .then(resposta => resposta.json())
      .then(data => {
        this.setState({ usuario: data })
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  atualizarEstadoNome(event) {
    this.setState({ usuarioNome: event.target.value })
  }

  atualizarEstadoEmail(event) {
    this.setState({ usuarioEmail: event.target.value })
  }

  atualizarEstadoComunidade(event) {
    this.setState({ usuarioComunidade: event.target.value })
  }

  atualizarEstadoSenha(event) {
    this.setState({ usuarioSenha: event.target.value })
  }

  alterarUsuario() {
    this.setState({
      editarModal: {
        usuarioId: this.state.usuario.usuarioId,
        usuarioNome: this.state.usuario.usuarioNome,
        usuarioEmail: this.state.usuario.usuarioEmail,
        usuarioComunidade: this.state.usuario.usuarioComunidade,
        usuarioSenha: this.state.usuario.usuarioSenha,
        usuarioTipoId: this.state.usuario.usuarioTipoId
      }
    })
    console.log(this.state.usuario.usuarioId);
    console.log(this.state.usuario.usuarioNome);
    console.log(this.state.usuario.usuarioEmail);
    console.log(this.state.usuario.usuarioComunidade);
    console.log(this.state.usuario.usuarioSenha);
    console.log(this.state.usuario.usuarioTipoId);

    this.toggle();
  }

  // salvarAlteracoes = (event) => {
  //   event.preventDefault();
    
  //   fetch('https://localhost:5001/api/usuariotbl/'+ this.state.usuario.usuarioId, {
  //     method: "PUT",
  //     body: JSON.stringify(this.state.editarModal),
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   })
  //     .then(resposta => resposta.json())
  //     .then(setTimeout(() => {
  //         this.buscarUsuario()
  //       }, 1000)
  //     )
  //     .catch(erro => console.log(erro))
  //     this.toggle();
  // }

  salvarAlteracoes = (event) => {
    event.preventDefault();

    Api.put('/usuariotbl/' + this.state.usuario.usuarioId)
    .then(setTimeout(() => {
        this.buscarUsuario()
      }, 1000)
    )
    .catch(erro => console.log(erro))
    this.toggle()
  }

  atualizaEditarModalNome(event) {
    this.setState({
      editarModal: {
        usuarioId: this.state.editarModal.usuarioId,
        usuarioNome: event.target.value,
      }
    })
  }

  atualizaEditarModalEmail(event) {
    this.setState({
      editarModal: {
        usuarioId: this.state.editarModal.usuarioId,
        usuarioEmail: event.target.value
      }
    })
  }

  atualizaEditarModalComunidade(event) {
    this.setState({
      editarModal: {
        usuarioId: this.state.editarModal.usuarioId,
        usuarioComunidade: event.target.value
      }
    })
  }

  atualizaEditarModalSenha(event) {
    this.setState({
      editarModal: {
        usuarioId: this.state.editarModal.usuarioId,
        usuarioSenha: event.target.value
      }
    })
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.buscarUsuario();
  }

  render() {
    return (
      <div>
        <Cabecalho />
        <TopoPerfil />
        <main className="usuario-editar-perfil-main">
          <section className="usuario-editar-perfil-pai">

                  <div key={this.state.usuario.usuarioId} className="usuario-editar-perfil-dados">

                    <div className="usuario-editar-perfil-nome">
                      <p>{this.state.usuario.usuarioNome}</p>
                    </div>

                    <div className="usuario-editar-perfil-email">
                      <p>{this.state.usuario.usuarioEmail}</p>
                    </div>

                    <div className="usuario-editar-perfil-comunidade">
                      <p>{this.state.usuario.usuarioComunidade}</p>
                    </div>

                    <div className="usuario-editar-perfil-senha">
                      <p>{this.state.usuario.usuarioSenha}</p>
                    </div>

                    <div className="usuario-editar-perfil-button">
                      <button type="submit" onClick={i => this.alterarUsuario(this.state.usuario)} className="usuario-editar-perfil-botao-editar">Editar</button>
                    </div>

                  </div>
          </section>
        </main>

        <MDBContainer>
          <form onSubmit={this.salvarAlteracoes}>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>Editar Perfil</MDBModalHeader>
              <MDBModalBody  key={this.state.editarModal.usuarioId} >
                <MDBInput
                  label='Nome'
                  value={this.state.editarModal.usuarioNome}
                  onChange={this.atualizaEditarModalNome.bind(this)}
                />
                <MDBInput
                  label='Email'
                  value={this.state.editarModal.usuarioEmail}
                  onChange={this.atualizaEditarModalEmail.bind(this)}
                />
                <MDBInput
                  label='Comunidade'
                  value={this.state.editarModal.usuarioComunidade}
                  onChange={this.atualizaEditarModalComunidade.bind(this)}
                />
                <MDBInput
                  label='Senha'
                  value={this.state.editarModal.usuarioSenha}
                  onChange={this.atualizaEditarModalSenha.bind(this)}
                />
                </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Cancelar</MDBBtn>
                <MDBBtn type="submit" color="primary">Salvar</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </form>
        </MDBContainer>

        <Rodape />
      </div>
    );
  }
}
export default EditarPerfilUsuario
