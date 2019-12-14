import React, { Component } from 'react';
import '../assets/CSS/CriarEvento2.css'
import Cabecalho from '../components/CabecalhoLogado'
import Rodape from '../components/Rodape'

class CriarEvento2 extends Component {
  render() {
    return (
      <div className="CriarEvento2">
        <Cabecalho/>
       
              <div class="banner_sub2">
                <img src={require("../assets/imagens/submeter_evento2.png")} alt="" />
              </div>
              {/* <!--Fim banner_sub2--> */}
              <div class="texto1_sub2">
                <h2>Informações básicas sobre o evento:</h2>
              </div>
              <section class="form_sub2">
                
               </section>

              

              
              <div class="botão_sub2">
                <a href="#">Continuar</a>
              </div>
   
            {/* <!--Fim do Main--> */}
        <Rodape/>
    </div>
        )
      }
      
      }
      
      
export default CriarEvento2;

