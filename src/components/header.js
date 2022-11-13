import React from 'react';
import '../css/header.css';

function animateLink() {
  const links = document.querySelectorAll('#nav li');
  links.forEach((link, index) => {
    link.style.animation 
    ? (link.style.animation = '')
    : (link.style.animation = `navFade 0.5s ease forwards ${index / 2 * 0.3}s`)
  })
}

function handleClick() {
  const nav = document.querySelector('#nav');
  const sam = document.querySelector('.sanduba');
  nav.classList.toggle('active');
  sam.classList.toggle('active');
  animateLink();
}

function Header() {
    return (
        <header>
            <div id="logo">Jadson</div>
            <div onClick={ handleClick } className="sanduba">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul id="nav">
                <li className="links"><a href="#preview">Home</a></li>
                <li className="links"><a href='#about'>Sobre</a></li>
                <li className="links"><a href='#skills'>Resumo</a></li>
                <li className="links"><a href='#sec-projects'>Portifolio</a></li>
            </ul>
        </header>
    )
}

export default Header;
