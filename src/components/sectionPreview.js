import React from 'react';
import imgPerfil from '../images/foto-perfil.jpg';
import imgFace from '../images/face.png';
import imgLinkedin from '../images/linkedin.png';
import imgTwitter from '../images/twitter.png';
import imgGitHub from '../images/github.png';

import '../css/sectionPreview.css'

export default function SectionPreview() {
  return (
    <section id="preview">
        <div id="info">
            <img id = "foto-perfil" src={ imgPerfil } alt="" />
            <div>
                <h1><span>Jadson</span> Cerqueira</h1>
                <p>Desenvolvedor Web Full Stack</p>
            </div>
            <div id="redes-sociais">
              <a href='#' target="_blank"><img className="redes" src={ imgFace } alt="" /></a>
              <a href='#' target="_blank"><img className="redes" src={ imgLinkedin } alt="" /></a>
              <a href='#' target="_blank"><img className="redes" src={ imgTwitter } alt="" /></a>
              <a href='https://github.com/jadsoncerqueira/' target="_blank"><img className="redes" src={ imgGitHub } alt="" /></a>
            </div>
        </div>
    </section>    
  )
}