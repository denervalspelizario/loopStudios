

import '../styles/componentes/Header.sass';

import Logo from '/image/logo.svg'; 


const Header = (props) => {

  
  return (
    <header>
        <div className="header__container">
            <figure>
                <a href="index.html"><img  className="header--logo" src={Logo} alt="Logo loopStudio" title="loopStudio"/></a>
            </figure>
            <nav>
                <ul className="menu__desktop--links">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
            </nav>
            <nav className="container__menu--mobile">
                <button id="hamburger" className={props.openMode ? 'bottom__open': 'bottom__close'}  onClick={props.alterMenu}>
                    <i className="menuIcon material-icons " >menu</i>
                    <i className="closeIcon material-icons">close</i>
                </button> 
                <menu id="menu__responsive--links" className={props.openMode ? 'menu__open': 'menu__close'}>
                    <ul>
                        <li><a class="menuLogo" href="#"><img  class="header--logo--menu" src={Logo} alt="Logo loopStudio" title="loopStudio"/></a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Eventos</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Suporte</a></li>
                    </ul> 
                </menu>
                  
            </nav>
        </div>
        <div className="header__container__text">
            <div className="header__text">
                <h1>Experiências</h1>
                <h1>Imersivas</h1>
                <h1>Que Entregam</h1>
            </div>
        </div>
    </header>
  )
}

export default Header