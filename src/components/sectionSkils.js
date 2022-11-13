import React from 'react';
import iconTools from '../images/tools.svg';
import iconHtml from '../images/html-icon.svg';
import iconCss from '../images/css-icon.svg';
import iconJs from '../images/js-icon.svg';
import iconReact from '../images/react-icon.png';
import iconNode from '../images/node-icon.svg';
import iconMysql from '../images/mysql-icon.svg';
import '../css/sectionSkills.css';

export default function SectionSkills() {
  return (
    <section id="skills">
        <div id="hed-tools">
            <img src={ iconTools } alt="" />
            <h2>Skills</h2>
        </div>
        <div id="tools">
            <div className="tool"><img src={ iconHtml } alt="" />Html</div>
            <div className="tool"><img src={ iconCss } alt="" />Css</div>
            <div className="tool"><img src={ iconJs } alt="" />JavaScript</div>
            <div className="tool"><img className="react" src={ iconReact } alt="" />React js</div>
            <div className="tool"><img src={ iconNode } alt="" />Node js</div>
            <div className="tool"><img src={ iconMysql } alt="" />Mysql</div>
        </div>
    </section>
  )
}