import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/47895394?s=460&u=fa8eef461017e8985832ebb7be4ac818c28b763a&v=4" alt="Lilian Dias" />

        <div>
          <strong>Lilian Dias</strong>
          <span>Geografia</span>
        </div>
      </header>

      <p>
        As vezes não sei nem onde eu tô, mas consigo me localizar facilmente
        em qualquer lugar.
      <br /><br />
      Tenho memória fotográfica e nunca fico perdida.
      Eu ensino a galera como não se perder na vida, com lições geográficas
      simples pra você nunca mais precisar de mapa na sua bela vida.
    </p>

      <footer>
        <p>
          Preço/hora

        <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}
