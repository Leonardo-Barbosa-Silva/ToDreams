import next from '../../img/next.svg'
import vtexLogo from '../../img/vtex-logo.svg'

function ProductsMarks() {

    return (
        <div className="products-marks">
            <div className="heading">
                <div className="title">
                  <h2>Navegue por marcas</h2>
                </div>
            </div>

            <div className="logos">
              <div className="wrapper">
                <img src={vtexLogo} alt="vtex circle mode logo"/>
              </div>
              <div className="wrapper">
                <img src={vtexLogo} alt="vtex circle mode logo"/>
              </div>
              <div className="wrapper">
                <img src={vtexLogo} alt="vtex circle mode logo"/>
              </div>
              <div className="wrapper">
                <img src={vtexLogo} alt="vtex circle mode logo"/>
              </div>
              <div className="wrapper">
                <img src={vtexLogo} alt="vtex circle mode logo"/>
              </div>

              <div className="next-img"><img src={next} alt="right slider icon" /></div>
            </div>
        </div>
    )
}

export default ProductsMarks