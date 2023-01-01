import React from 'react';
import iconCheck from '../images/check.svg';
import store from '../images/store.png';
import trybetunes from '../images/trybetunes.png';
import wallet from '../images/wallet.png';
import qrcode from '../images/qrcode.png';
import store_manager from '../images/store-manager.png';
import blogs_api from '../images/blogs-api.png';
import '../css/sectionProjects.css'
import imgGitHub from '../images/gith.png';
import imgNave from '../images/nave.png';

export default function SectionProjects() {
  return (
    <section id="sec-projects">
        <div id="hed-projects">
            <img src={ iconCheck } alt="" />
            <h2>Projetos</h2>
        </div>
        <div id="projects">
            <div className="project">
                <div className="img">
                  <img className="capa" src={ store } alt="" />
                  <div className="info-project">
                    <h3>Store</h3>
                    <p>Uma loja online desenvolvida com React utilizando<br /> hooks e Context API.</p>
                    <div className="btn-project">
                      <a href="https://jadsoncerqueira.github.io/store/" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgNave } alt="rinternet" /></div>
                      </a>
                      <a href="https://github.com/jadsoncerqueira/store" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgGitHub } alt="rede social" /></div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

            <div className="project">
                <div className="img">
                  <img className="capa" src={ trybetunes } alt="" />
                  <div className="info-project">
                    <h3>TrybeTunes</h3>
                    <p>Aplicação de preview de músicas criada<br /> com React e componentes de classe.</p>
                    <div className="btn-project">
                      <a href="https://jadsoncerqueira.github.io/trybetunes/" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgNave } alt="rinternet" /></div>
                      </a>
                      <a href="https://github.com/jadsoncerqueira/trybetunes" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgGitHub } alt="rede social" /></div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="project">
                <div className="img">
                  <img className="capa" src={ wallet } alt="" />
                  <div className="info-project">
                    <h3>Wallet</h3>
                    <p>Gerenciador de gastos com conversão de moedas, criado<br /> com React e Redux.</p>
                    <div className="btn-project">
                      <a href="https://jadsoncerqueira.github.io/wallet" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgNave } alt="rinternet" /></div>
                      </a>
                      <a href="https://github.com/jadsoncerqueira/wallet" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgGitHub } alt="rede social" /></div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="project">
                <div className="img">
                  <img className="capa" src={ qrcode } alt="" />
                  <div className="info-project">
                    <h3>QrCode</h3>
                    <p>Uma aplicação gerador de qrcode,<br /> desenvolvida em React.</p>
                    <div className="btn-project">
                      <a href="https://jadsoncerqueira.github.io/qr-code/" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgNave } alt="rinternet" /></div>
                      </a>
                      <a href="https://github.com/jadsoncerqueira/qr-code" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgGitHub } alt="rede social" /></div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

            <div className="project">
                <div className="img">
                  <img className="capa" src={ store_manager } alt="" />
                  <div className="info-project">
                    <h3>API Store</h3>
                    <p>API rest para gerenciar loja, possui Arquitetura <br /> Model, Service e Controller.</p>
                    <div className="btn-project">
                      {/* <a href="https://jadsoncerqueira.github.io/calculator/" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgNave } alt="rinternet" /></div>
                      </a> */}
                      <a href="https://github.com/jadsoncerqueira/API-store-manager" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgGitHub } alt="rede social" /></div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>

            <div className="project">
                <div className="img">
                  <img className="capa" src={ blogs_api } alt="" />
                  <div className="info-project">
                    <h3>Blogs API</h3>
                    <p>Uma API REST para gerenciar blog, foi desenvolvida em<br /> NodeJs com a ORM Sequelize.</p>
                    <div className="btn-project">
                      {/* <a href="https://jadsoncerqueira.github.io/calculator/" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgNave } alt="rinternet" /></div>
                      </a> */}
                      <a href="https://github.com/jadsoncerqueira/blogs-api" rel="noreferrer" target="_blank">
                        <div className='git'><img className="gitHub" src={ imgGitHub } alt="rede social" /></div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}