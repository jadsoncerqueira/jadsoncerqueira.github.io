import React from 'react';
import iconCheck from '../images/check.svg';
import '../css/sectionProjects.css'

export default function SectionProjects() {
  return (
    <section id="sec-projects">
        <div id="hed-projects">
            <img src={ iconCheck } alt="" />
            <h2>Projetos</h2>
        </div>
        <div id="projects">
            <div className="project">
                <div className="img"><img src="" alt="" /></div>
                <h3>Titulo do projeto</h3>
                <p>Descrição do projeto vai ficar <br /> aqui</p>
            </div>

            <div className="project">
                <div className="img"><img src="" alt="" /></div>
                <h3>Titulo do projeto</h3>
                <p>Descrição do projeto vai ficar <br /> aqui</p>
            </div>
            
            <div className="project">
                <div className="img"><img src="" alt="" /></div>
                <h3>Titulo do projeto</h3>
                <p>Descrição do projeto vai ficar <br /> aqui</p>
            </div>
            
            <div className="project">
                <div className="img"><img src="" alt="" /></div>
                <h3>Titulo do projeto</h3>
                <p>Descrição do projeto vai ficar <br /> aqui</p>
            </div>

            <div className="project">
                <div className="img"><img src="" alt="" /></div>
                <h3>Titulo do projeto</h3>
                <p>Descrição do projeto vai ficar <br /> aqui</p>
            </div>

            <div className="project">
                <div className="img"><img src="" alt="" /></div>
                <h3>Titulo do projeto</h3>
                <p>Descrição do projeto vai ficar <br /> aqui</p>
            </div>
        </div>
    </section>
  )
}