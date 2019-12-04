import React, { Component } from 'react'
import CabecalhoSemBotao from '../components/CabecalhoSemBotao'
import '../assets/CSS/Login.css'
import Rodape from '../components/Rodape'

class Login extends Component {
  render() {
    return (
      <div>
        <CabecalhoSemBotao/>
        <section id="banner-login">
          <div class="texto-login">
            <h1>LOGIN</h1>
          </div>
        </section>

        <section class="login-pai">
          <input class="login-input" type="email" name="Email" id="" placeholder="E-mail"/>
            <input class="login-input" type="password" name="Senha" id="" placeholder="Senha"/>
              <a href="#" class="login-button">Entrar</a>
        </section>
        <Rodape/>
        </div>
          )
   }  
   }                   
export default Login;
