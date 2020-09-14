import React from "react"
import './VamosConversar.css'
import Francisco from '../../static/assets/foto-fran2.png'

const VamosConversar = () => {
  return (
    <section className="vamos-conversar-wrapper">
      <div className="container">
        <div 
          className="conversa-img"
          style={{
            backgroundImage: `url(${Francisco})`
          }}
          alt="foto do francisco"
        >
        </div>
        <div className="text-btn-wrapper">
          <h1>
            E aí, vamos conversar?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing
            <br />
            elit, sed diam nonummy nibh euismod tincidunt ut
          </p>
          <a
            target='_blank'
            rel="noopener"
            href="https://wa.me/5548984289990?text=SantaContabilidade"
          >
            <button>
              Falar com um especialista
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default VamosConversar
