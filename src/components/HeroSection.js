import React from 'react';
import '../App.css';
import './Styles/HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Somos GetTech!!</h1>
      <p>Teu equipe de confiança!</p>
      <div className='hero-btns'>
        <button
          className='btnTec'>
          <Link className='link' to="/Tec">
            Tecnicos
            </Link>
        </button>

        <button
          className='btnUser' onClick={console.log('Opa!')}>
          <Link className='linkUser' to="/user">
            Usuarios
            </Link>
        </button>        
      </div>
    </div>
  );
}

export default HeroSection;