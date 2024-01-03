import React from "react";
import style from "../About/About.module.css"
import img from "../About/perfil.jpg"

const About=()=>{
    return(
        <div className={style.container}>
            <h1 className={style.title}>PI Dogs soyHenry</h1>
            <p>¡Hola! Soy Esteban Aleart, un apasionado desarrollador web en formación. 
                Actualmente, estoy inmerso en el bootcamp de SoyHenry para fortalecer mis habilidades 
                en el desarrollo web Full Stack.</p>
            <p>Recientemente, culminé con éxito el M4 de SoyHenry, donde adquirí conocimientos sólidos en 
                desarrollo web y tecnologías tanto Front-end como Back-end. Mi enfoque se centra en utilizar HTML,
                CSS y JavaScript para construir sitios web atractivos y funcionales.</p>
            <p>Me considero un entusiasta del aprendizaje continuo y la mejora constante. Estoy activamente en 
                busca de oportunidades para aplicar mis habilidades técnicas y contribuir al emocionante mundo 
                del desarrollo web.</p>
            <img src={img}  alt="about"/>
        </div>
    )
}

export default About