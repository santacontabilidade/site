import React, { useState } from "react"
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import LogoHero from '../../static/assets/logo-verde.png'
import Lupa from '../../static/assets/lupa.png'
import './MateriaisHeader.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper container';

  const scrollToSearch = () => {
    document.querySelector('#search').scrollIntoView({ behavior: 'smooth' });
  }

  return (
      <header
        className="header-pag"
        id="Header-Mat"
      >
        <div className={menuClassNames}>
          <div className="header-left">
            <div className="logo-header">
              <a href="/">
                <img src={LogoHero} alt="" />
              </a>
            </div>
          </div>
          <div className="header-right-desk">
            <a
              href="#search"
              onClick={() => {
                scrollToSearch()
              }}
            >
              <img src={Lupa} alt="lupa anchor search" />
            </a>
            <div className="btns-wrapper">
              <Link to={"/blog"} className="btn-materiais">
                Blog
              </Link>
              <button className="btn-fale">
                <a href="https://contabilidade.santacontabilidade.com.br/especialista">
                  Fale com um especialista
                  </a>
              </button>
            </div>
          </div>
          <div className="header-right-mob">
            <a href="#search">
              <img src={Lupa} alt="lupa anchor search" />
            </a>
            <div className="btns-wrapper">
              <Link to={"/blog"} className="btn-materiais">
                Blog
              </Link>
              <button className="btn-fale">
                <a href="https://contabilidade.santacontabilidade.com.br/especialista">
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
                color={"#06606B"}
                className="x"
              />
                :
              <Menu
                color={"#06606B"}
                className="menu"
              />}
          </button>
        </div>
      </header>
  )
}

export default Header
