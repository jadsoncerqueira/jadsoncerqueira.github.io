import React from 'react';
import '../css/header.css';

function Header() {
    return (
        <header>
            <div id="logo">Jadson</div>
            <ul id="nav">
                <li className="links">Home</li>
                <li className="links">Sobre</li>
                <li className="links">Resumo</li>
                <li className="links">Portifolio</li>
            </ul>
        </header>
    )
}

export default Header;
