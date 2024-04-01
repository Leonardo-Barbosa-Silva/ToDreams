import office from '../../img/office.svg'

function RelatedProducts() {

    return (
        <div className="related-products">
            <div className="heading">
                <div className="title">
                  <div className="left-line"></div>
                    <h2>Produtos relacionados</h2>
                  <div className="right-line"></div>
                </div>
                <p>Ver todos</p>
            </div>
            <div className="two-bg-img">
              <div>
                <img src={office} alt="office background"/>
                <div className="text-bg-img">
                    <h3>Parceiros</h3>
                    <h4>Lorem ipsum dolor sit<br />amet, consectetur</h4>
                    <button type="button">confira</button>
                </div>
              </div>

              <div>
                <img src={office} alt="office background"/>
                <div className="text-bg-img">
                    <h3>Parceiros</h3>
                    <h4>Lorem ipsum dolor sit<br />amet, consectetur</h4>
                    <button type="button">confira</button>
                </div>
              </div>
            </div>
        </div>
    )
}


export default RelatedProducts