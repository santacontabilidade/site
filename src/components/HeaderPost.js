import React, { useState } from "react"
import { Menu, X } from 'react-feather'
import LogoHero from '../../static/assets/logo-branco.png'
// import LupaBranca from '../../static/assets/lupa-branca.png'
import './HeaderPost.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active bg-header-green container' : 'header-wrapper container';

  return (
    <header
      className={menuClassNames}
    >
      <div className="header-left">
        <div className="logo-header">
          <a href="/">
            <img src={LogoHero} alt="" />
          </a>
        </div>
      </div>
      <div className="header-right-desk">
        {/* <a href="#search">
          <img src={LupaBranca} alt="lupa anchor search" />
        </a> */}
        <div className="btns-wrapper">
          <button className="btn-materiais-post">
            <a href="http://localhost:8000/">
              Materiais Gratuitos
              </a>
          </button>
          <button className="btn-fale">
            <a href="http://localhost:8000/">
              Fale com um especialista
              </a>
          </button>
        </div>
      </div>
      <div className="header-right-mob">
        {/* <a href="#search">
          <img src={LupaBranca} alt="lupa anchor search" />
        </a> */}
        <div className="btns-wrapper">
          <button className="btn-materiais-post">
            <a href="http://localhost:8000/">
              Materiais Gratuitos
            </a>
          </button>
          <button className="btn-fale">
            <a href="http://localhost:8000/">
              Fale com um especialista
            </a>
          </button>
        </div>
      </div>
      <button
        className="button-blank menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ?
          <X
            color={"#fff"}
            className="x"
          />
            :
          <Menu
            color={"#fff"}
            className="menu"
          />}
      </button>
    </header>
  )
}

export default Header