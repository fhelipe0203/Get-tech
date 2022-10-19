import React from 'react';
import './Styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/'>Como funciona</Link>
            <Link to='/'>Depoimentos</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos de serviço</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contate-nos</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Ajuda</Link>
            <Link to='/'>Reclamações</Link>
            <Link to='/'>Patrocínios</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Especialidades</h2>
            <Link to='/'>TI e Programação</Link>
            <Link to='/'>Design & Multimedia</Link>
            <Link to='/'>Tradução e conteúdos</Link>
            <Link to='/'>Marketing e Vendas</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              GetTech
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>GetTech © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;