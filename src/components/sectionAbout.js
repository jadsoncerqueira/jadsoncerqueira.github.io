import React from 'react';
import iconGame from '../images/game-icon.svg';
import iconMusic from '../images/musica-icon.svg';
import iconViagem from '../images/viagem-icon.svg';
import iconMoney from '../images/money-icon.svg';
import iconAbout from '../images/about.svg';
import '../css/sectionAbout.css';

export default function SectionAbout() {
  return (
    <section id="about">
        <div id="info-about">
            <div id="hed">
                <img src={ iconAbout } alt="" />
                <div>
                    <h2>Sobre mim</h2>
                    <p>jadsoncerqueira97@gmail.com</p>
                </div>
            </div>
            <p id="descricao">
                Sou entusiasta de tecnologia, Especialista em HTML, CSS e Javascript,
                com sólidos conhecimentos em arquitetura do ecosistema Front-End e em tecnologias 
                com React, TypeScript, design responsivo web.
            </p>
            <h2>Interesses</h2>
            <div id="interesses">
                <div className="interesse" ><img src={ iconGame } alt=""/>Games</div>
                <div className="interesse" ><img src={ iconMusic } alt=""/>Musicas</div>
                <div className="interesse" ><img src={ iconViagem } alt=""/>Viagens</div>
                <div className="interesse" ><img src={ iconMoney } alt=""/>Money</div>
            </div>
        </div>
    </section>
  )
}