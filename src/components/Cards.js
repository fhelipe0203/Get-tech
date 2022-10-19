import React from 'react';
import './Styles/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='service'>Nossos Serviços!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Desenho de sites Web personalizados? Manutenção do seu site? entre em contato com nossos desenvolvedores cadastrados agora!'
              label='Desenvolvedores Web'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='O nivel de experiencia de nossos cientistas de dados não tem concorrentes, venha agora e faz o teu orçamento com uns dos nossos profissionais!'
              label='Administrador de Banco de Dados'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Profissionais com ampla experiencia no eCommerce, entre em nosso banco de dados e procure orçamento.'
              label='eCommerce'
              path='/services'
            />
            <CardItem
              src='images/img-4.webp'
              text='Nossos profissionais cadastrados tem amplia experiencia em Marketing digital e desenho grafico; está procurando impulsar seu negocio, esta no lugar correto!'
              label='Desenho e Marketing'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Não sofra mais com técnicos em celulares sem experiencia, arrume seu celular ou tablet com proficionais certificados!'
              label='Tablets e Celulares'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;