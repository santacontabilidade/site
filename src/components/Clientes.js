import React from 'react'
import './Clientes.css'
import ConexNeg from '../../static/assets/conex_negocios.png'
import PromoPrev from '../../static/assets/promoprev-color.png'
import DoisW from '../../static/assets/2w.png'
import Reiko from '../../static/assets/reiko.png'
import Growth from '../../static/assets/growth.png'
import Wdi from '../../static/assets/wdi.png'

const Clientes = () => {
  return (
    <section className="clientes-wrapper">
      <div className="container">
        <h1>
          Quem <strong>confia</strong> na gente? Confere aí :)
        </h1>
        <div className="logos-grid">
          <a href="https://conexnegocios.com.br/" target="_blank">
            <img src={ConexNeg} className="ConexNeg" alt="logos dos clientes" />
          </a>
          <a href="https://agencia2w.com/" target="_blank">
            <img src={DoisW} className="DoisW" alt="logos dos clientes" />
          </a>
          <a href="https://www.growthsales.com.br/" target="_blank">
            <img src={Growth} className="Growth" alt="logos dos clientes" />
          </a>
          <a href="https://www.promoprev.com.br/" target="_blank">
            <img
              src={PromoPrev}
              className="PromoPrev"
              alt="logos dos clientes"
            />
          </a>
          <a href="http://www.reiko.top/" target="_blank">
            <img src={Reiko} className="Reiko" alt="logos dos clientes" />
          </a>
          <a href="http://wdi.digital/" target="_blank">
            <img src={Wdi} className="Wdi" alt="logos dos clientes" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Clientes
