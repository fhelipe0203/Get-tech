import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function SignUp() {
  return (
    <div className='Sign-container'>
    <section className='Sign-subscription'>
      <h1 className='Sign-up'>Se cadastre para receber notificações</h1>
        <p className='Sign-subscription-heading'>
          As melhores ofertas para teus projetos estão aqui!
        </p>
        <p className='Sign-subscription-text'>
          pode se suscribir em qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='Sign-input'
              name='email'
              type='email'
              placeholder='Seu Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      </div>
  )
}