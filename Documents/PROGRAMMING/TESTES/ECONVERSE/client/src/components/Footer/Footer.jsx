import econverseLogo from '../../img/econverse-logo.svg'
import vtexLogo2 from '../../img/vtex-logo2.svg'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import youtube from '../../img/youtube.svg'
import elo from '../../img/elo.svg'
import pix from '../../img/pix.svg'
import sodexo from '../../img/sodexo.svg'
import ticket from '../../img/ticket.svg'
import mastercard from '../../img/mastercard.svg'
import dinners from '../../img/dinners.svg'
import alelo from '../../img/alelo.svg'
import amex from '../../img/amex.svg'
import visa from '../../img/visa.svg'
import ifood from '../../img/ifood.svg'


function Footer() {

    return (
        <footer>
            <section className="services">
            <div className="content-layout">
                <div className="infos">
                <div className="about-us">
                    <div className="title">
                    <h3>Sobre nós</h3>
                    </div>
                    <div className="content">
                    <ul>
                        <li><a href="#know">Conheça</a></li>
                        <li><a href="#how">Como comprar</a></li>
                        <li><a href="#discount">Indicação e desconto</a></li>
                    </ul>
                    <div className="icons">
                        <a href="#facebook"><img src={facebook} alt="facebook icon"/></a>
                        <a href="#instagram"><img src={instagram} alt="instagram icon"/></a>
                        <a href="#youtube"><img src={youtube} alt="youtube icon"/></a>
                    </div>
                    </div>
                </div>

                <div className="important">
                    <div className="title">
                    <h3>Informações úteis</h3>
                    </div>
                    <div className="content">
                    <ul>
                        <li><a href="#contact-us">Fale conosco</a></li>
                        <li><a href="#doubts">Dúvidas</a></li>
                        <li><a href="#deadline">Prazos de entrega</a></li>
                        <li><a href="#pay-methods">Formas de pagamento</a></li>
                        <li><a href="#privacy-policy">Política de privacidade</a></li>
                        <li><a href="#returns">Trocas e devoluções</a></li>
                    </ul>
                    </div>
                </div>

                <div className="payment">
                    <div className="title">
                        <h3>Formas de pagamento</h3>
                    </div>

                    <div className="icons">
                    <a href="#visa"><img src={visa} alt="visa icon"/></a>
                    <a href="#elo"><img src={elo} alt="elo icon"/></a>
                    <a href="#alelo"><img src={alelo} alt="alelo icon"/></a>
                    <a href="#dinners"><img src={dinners} alt="dinners icon"/></a>
                    <a href="#ifood"><img src={ifood} alt="ifood icon"/></a>
                    <a href="#mastercard"><img src={mastercard} alt="mastercard icon"/></a>
                    <a href="#pix"><img src={pix} alt="pix icon"/></a>
                    <a href="#amex"><img src={amex} alt="amex icon"/></a>
                    <a href="#ticket"><img src={ticket} alt="ticket icon"/></a>
                    <a href="#sodexo"><img src={sodexo} alt="sodexo icon"/></a>
                    </div>
                </div>
                </div>

                <div className="register">
                <div className="title">
                    <h3>Cadastre-se e receba nossas<br/><span>novidades
                    e promoções</span></h3>
                </div>
                <div className="text">
                    <p>Excepteur sint occaecat cudatat non ent, sunt in<br />culpa qui officia lorem ipsum</p>
                </div>
                <form>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="SEU E-MAIL"
                    />
                    <button type="submit">OK</button>
                </form>
                </div>
            </div>
            </section>

            <section className="copy">
            <div className="content-layout">
                <div className="text">
                    <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br />É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                </div>

                <div className="icons">
                    <a href="#econverse"><img src={econverseLogo} alt="econverse logo"/></a>
                    <a href="#vtex"><img src={vtexLogo2} alt="vtex white logo"/></a>
                </div>
            </div>
            </section>
        </footer>
    )
}

export default Footer;