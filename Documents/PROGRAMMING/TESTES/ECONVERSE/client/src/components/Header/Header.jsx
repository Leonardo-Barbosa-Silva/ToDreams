import vtexLogo from '../../img/vtex-logo.svg'
import card from '../../img/card.svg'
import shield from '../../img/shield.svg'
import truck from '../../img/truck.svg'
import box from '../../img/box.svg'
import heart from '../../img/heart.svg'
import userCircle from '../../img/userCircle.svg'
import shopCart from '../../img/shopCart.svg'
import crown from '../../img/crown.svg'

function Header() {

    return (
        <header>
            <div className="content-layout">
                <section className="top">
                    <p><img src={shield} alt="shield icon"/>Compra <span>100% segura</span></p>
                    <p><img src={truck}  alt="truck icon"/><span>Frete grátis</span> acima de R$ 200</p>
                    <p><img src={card}  alt="card icon"/><span>Parcele</span> suas compras</p>
                </section>

                <section className="middle">
                    <a href="#vtex"><img src={vtexLogo} alt="VTEX logo" /></a>
                    <form action="/search" method="GET" role="search">
                        <input 
                            type="search" 
                            id="site-search" 
                            name="q" 
                            aria-label="Pesquisar através do site" 
                            placeholder="O que você está buscando?"
                        />
                    </form>
                    <nav>
                        <a href="#box" aria-label="delivery"><img src={box} alt="box icon"/></a>
                        <a href="#heart" aria-label="favorites"><img src={heart} alt="heart icon"/></a>
                        <a href="#account" aria-label="account"><img src={userCircle} alt="user icon"/></a>
                        <a href="#cart" aria-label="cart"><img src={shopCart} alt="cart icon"/></a>
                    </nav>
                </section>

                <section className="bottom">
                    <nav>
                        <ul>
                            <a href="#all-categories"><li>Todas categorias</li></a>
                            <a href="#supermaket"><li>Supermercado</li></a>
                            <a href="#books"><li>Livros</li></a>
                            <a href="#fashion"><li>Moda</li></a>
                            <a href="#news"><li>Lançamentos</li></a>
                            <a href="#offers"><li><span>Ofertas do dia</span></li></a>
                            <a href="#plan"><li><img src={crown} alt="crown icon"/>Assinatura</li></a>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    )
}


export default Header;