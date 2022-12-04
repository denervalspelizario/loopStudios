import '../styles/componentes/Footer.sass';
import Facebook from '/image/icon-facebook.svg';
import Twitter from '/image/icon-twitter.svg';
import Pinterest from '/image/icon-pinterest.svg';
import Instagram from '/image/icon-instagram.svg';

const Footer = () => {
  return (
    <footer>
        <div class="footer__container">
            <div class="footer__nav">
                <figure>
                    <img  class="header--logo" src="./img/logo.svg" alt="Logo loopStudio" title="loopStudio"/>
                </figure>
                <nav>
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Carreiras</a></li>
                        <li><a href="#">Eventos</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Suporte</a></li>
                    </ul>
                </nav>
            </div>
            <div class="footer__nav">
                <div class="footer__social--media">
                    <ul>
                        <li><a href="#"><img src={Facebook} alt="facebook"/></a></li>
                        <li><a href="#"><img src={Twitter} alt="twitter"/></a></li>
                        <li><a href="#"><img src={Pinterest} alt="pinterest"/></a></li>
                        <li><a href="#"><img src={Instagram} alt="instagram"/></a></li>
                    </ul>                   
                </div>
                <p>© 2021 LoopStudios. All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer