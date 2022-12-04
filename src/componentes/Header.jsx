import '../styles/componentes/Header.sass';
import Logo from '/image/logo.svg'; 


const Header = () => {
  
  return (
    <header>
        <div class="header__container">
            <figure>
                <a href="index.html"><img  class="header--logo" src={Logo} alt="Logo loopStudio" title="loopStudio"/></a>
            </figure>
            <nav>
                <ul class="menu__desktop--links">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Carreiras</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
            </nav>
            <nav class="container__menu--mobile">
                <ul class="menu">
                    <li><a class="menuLogo" href="#"><img  class="header--logo--menu" src={Logo} alt="Logo loopStudio" title="loopStudio"/></a></li>
                    <li><a class="menuItem" href="#">Sobre</a></li>
                    <li><a class="menuItem" href="#">Carreiras</a></li>
                    <li><a class="menuItem" href="#">Eventos</a></li>
                    <li><a class="menuItem" href="#">Produtos</a></li>
                    <li><a class="menuItem" href="#">Suporte</a></li>
                </ul>
                <button class="hamburger">
                    <i class="menuIcon material-icons ">menu</i>
                    <i class="closeIcon material-icons">close</i>
                </button>    
            </nav>
        </div>
        <div class="header__container__text">
            <div class="header__text">
                <h1>Experiências</h1>
                <h1>Imersivas</h1>
                <h1>Que Entregam</h1>
            </div>
        </div>
    </header>
  )
}

export default Header