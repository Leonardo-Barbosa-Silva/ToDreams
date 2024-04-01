import banner from '../../img/banner.svg'

function Banner() {

    return (
        <section id="banner">
          <img src={banner} alt="banner of discounts"/>

          <div className="content-layout">
            <div className="text">
              <h2>Venha conhecer nossas<br/> promoções</h2>
              <h3>50% Off nos produtos</h3>
            </div>

            <button type="button">Ver produto</button>
          </div>
        </section>
    )
}


export default Banner;