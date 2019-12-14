import React, { Component } from 'react';
import '../assets/CSS/CriarEvento2.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'

class CriarEvento2 extends Component {
  render() {
    return (
      <div className="CriarEvento2">
        <Cabecalho/>
       
              <div className="banner_sub2">
                <img src={require("../assets/imagens/submeter_evento2.png")} alt="" />
              </div>
              {/* <!--Fim banner_sub2--> */}
              <div className="texto1_sub2">
                <h2>Informações básicas sobre o evento:</h2>
              </div>
              <section className="form_sub2">
                <form className='form-sub2' action="#" method="POST">
                  <div className="input_sub2">
                    <input type="text" id="nome" placeholder="Nome" />
                  </div>
                  <div className="input_sub2">
                    <input type="email" id="email" placeholder="E-mail" />
                  </div>
                  <div className="input_sub2">
                    <input type="text" id="organizador" placeholder="Organizador do Evento*" />
                    <p>*Comunidade ou empresa responsável</p>
                  </div>
                  <div className="input_sub2">
                    <input type="text" id="rede social org" placeholder="Rede Social*" />
                    <p>*Da comunidade ou empresa responsável (opcional)</p>
                  </div>
                </form>
                <section className="calendario_sub2">
                  <section className="texto_sub2">
                    <div className="selecione_data">
                      <h2>Selecione uma data:</h2>
                    </div>
                    <div className="mes-sub2">
                      <a href="#">
                        <img src={require("../assets/imagens/left-arrow.png")} alt="" />
                      </a>
                      <h2>Setembro</h2>
                      <a href="#">
                        <img src={require("../assets/imagens/right-arrow.png")} alt="" />
                      </a>
                    </div>
                    {/* <!-- mes --> */}
                    <div className="semana-sub2">
                      <p>d</p>
                      <p>s</p>
                      <p>t</p>
                      <p>q</p>
                      <p>q</p>
                      <p>s</p>
                      <p>s</p>
                    </div>
                    {/* <!--semana--> */}
                    <div className="dias_sub2">
                      <div className="dias1-sub2">
                        <a href="1">
                          {/* <!--1--> */}
                          <div className="dia1-sub2 box-sub2">
                            <p>1</p>
                          </div>
                        </a>
                        {/* <!--1--> */}
                        <a href="2">
                          {/* <!--2--> */}
                          <div className="dia2-sub2 box-sub2">
                            <p>2</p>
                          </div>
                        </a>
                        {/* <!--2--> */}
                        <a href="#">
                          {/* <!--3--> */}
                          <div className="dia3-sub2 box-sub2">
                            <p>3</p>
                          </div>
                        </a>
                        {/* <!--3--> */}
                        {/* <!--4--> */}
                        <a href="#">
                          {/* <!--4--> */}
                                <div className="dia4-sub2 box-sub2">
                            <p>4</p>
                          </div>
                        </a>
                        {/* <!--4--> */}
                        {/* <!--5--> */}
                        <a href="#">
                          <div className="dia5-sub2 box-sub2">
                            <p>5</p>
                          </div>
                        </a>
                        {/* <!--5--> */}
                        {/* <!--6--> */}
                        <a href="#">
                          <div className="dia6-sub2 box-sub2">
                            <p>6</p>
                          </div>
                        </a>
                        {/* <!--6--> */}
                        {/* <!--7--> */}
                        <a href="#">
                          <div className="dia7-sub2 box-sub2">
                            <p>7</p>
                          </div>
                        </a>
                        {/* <!--7--> */}
                      </div>
                      {/* <!--semana1--> */}
                      <div Name="dias2-sub2">
                        {/* <!--semana2--> */}
                        <a href="#">
                          {/* <!--8--> */}
                          <div className="dia8-sub2 box-sub2">
                            <p>8</p>
                          </div>
                        </a>
                        {/* <!--8--> */}
                        <a href="#">
                          {/* <!--9--> */}
                          <div className="dia9-sub2 box-sub2">
                            <p>9</p>
                          </div>
                        </a>
                        {/* <!--9--> */}
                        <a href="#">
                          {/* <!--10--> */}
                          <div Name="dia10-sub2 box-sub2">
                            <p>10</p>
                          </div>
                        </a>
                        {/* <!--10--> */}
                        {/* <!--11--> */}
                        <a href="#">
                          {/* <!--11--> */}
                          <div className="dia11-sub2 box-sub2">
                            <p>11</p>
                          </div>
                        </a>
                        {/* <!--11--> */}
                        {/* <!--12--> */}
                        <a href="#">
                          <div className="dia12-sub2 box-sub2">
                            <p>12</p>
                          </div>
                        </a>
                        {/* <!--12--> */}
                        {/* <!--13--> */}
                        <a href="#">
                          <div className="dia13-sub2 box-sub2">
                            <p>13</p>
                          </div>
                        </a>
                        {/* <!--13--> */}
                        {/* <!--14--> */}
                        <a href="#">
                          <div className="dia14-sub2 box-sub2">
                            <p>14</p>
                          </div>
                        </a>
                        {/* <!--14--> */}
                      </div>
                      {/* <!--semana2--> */}

                      <div className="dias3-sub2">
                        {/* <!--semana3--> */}
                        <a href="#">
                          {/* <!--15--> */}
                          <div className="dia15-sub2 box-sub2">
                            <p>15</p>
                          </div>
                        </a>
                        {/* <!--15--> */}
                        <a href="#">
                          {/* <!--16--> */}
                          <div className="dia16-sub2 box-sub2">
                            <p>16</p>
                          </div>
                        </a>
                        {/* <!--16--> */}
                        <a href="#">
                          {/* <!--17--> */}
                          <div className="dia17-sub2 box-sub2">
                            <p>17</p>
                          </div>
                        </a>
                        {/* <!--17--> */}
                        {/* <!--18--> */}
                        <a href="#">
                          <div className="dia18-sub2 box-sub2">
                            <p>18</p>
                          </div>
                        </a>
                        {/* <!--18--> */}
                        {/* <!--19--> */}
                        <a href="#">
                          <div className="dia19-sub2 box-sub2">
                            <p>19</p>
                          </div>
                        </a>
                        {/* <!--19--> */}
                        {/* <!--20--> */}
                        <a href="#">
                          <div className="dia20-sub2 box-sub2">
                            <p>20</p>
                          </div>
                        </a>
                        {/* <!--20--> */}
                        {/* <!--21--> */}
                        <a href="#">
                          <div className="dia21-sub2 box-sub2">
                            <p>21</p>
                          </div>
                        </a>
                        {/* <!--21--> */}
                      </div>
                      {/* <!--semana3--> */}

                      {/* <!--semana4--> */}
                      <div className="dias4-sub2">
                        <a href="#">
                          {/* <!--22--> */}
                          <div className="dia22-sub2 box-sub2">
                            <p>22</p>
                          </div>
                        </a>
                        {/* <!--22--> */}
                        <a href="#">
                          {/* <!--23--> */}
                          <div className="dia23-sub2 box-sub2">
                            <p>23</p>
                          </div>
                        </a>
                        {/* <!--23--> */}
                        <a href="#">
                          {/* <!--24--> */}
                          <div className="dia24-sub2 box-sub2">
                            <p>24</p>
                          </div>
                        </a>
                        {/* <!--24-->
                            <!--25--> */}
                        <a href="#">
                          <div className="dia25-sub2 box-sub2">
                            <p>25</p>
                          </div>
                        </a>
                        {/* <!--25-->
                            <!--26--> */}
                        <a href="#">
                          <div className="dia26-sub2 box-sub2">
                            <p>26</p>
                          </div>
                        </a>
                        {/* <!--26-->
                            {<!--27--> */}
                        <a href="#">
                          <div className="dia27-sub2 box-sub2">
                            <p>27</p>
                          </div>
                        </a>
                        {/* <!--27--> */}
                        {/* <!--28--> */}
                        <a href="#">
                          <div className="dia28-sub2 box-sub2">
                            <p>28</p>
                          </div>
                        </a>
                        {/* <!--28--> */}
                      </div>
                      {/* <!--semana4--> */}

                      {/* <!--semana5--> */}
                      <div className="dias5-sub2">
                        <a href="#">
                          {/* <!--29--> */}
                          <div className="dia29-sub2 box-sub2">
                            <p>29</p>
                          </div>
                        </a>
                        {/* <!--29--> */}
                        <a href="#">
                          {/* <!--30--> */}
                          <div className="dia30-sub2 box-sub2">
                            <p>30</p>
                          </div>
                        </a>
                        {/* <!--30--> */}
                      </div>
                      {/* <!--semana4--> */}
                    </div>
                    {/* <!--fim dias--> */}
                  </section>
                  <section className="legenda-sub4">
                  </section>
                </section>

              </section>
              {/* <!--Fim form_sub2--> */}

              {/* <!--fim calendario--> */}
              <div className="botão_sub2">
                <a href="#">Continuar</a>
              </div>
   
            {/* <!--Fim do Main--> */}
        <Rodape/>
    </div>
        )
      }
      
      }
      
      
export default CriarEvento2;

