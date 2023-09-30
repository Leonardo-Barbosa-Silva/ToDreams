import buttonLeft from '../../img/button-left.svg'
import buttonRight from '../../img/button-right.svg'
import Product from '../Product/Product'

function Slider({ products }) {

    return (
        <div className="slider">
          <div className="items">
            {products.map( (product) => (
              <Product product={product} key={product.productName}/>
            ))}
          </div>

          <div className="button-left"><img src={buttonLeft} alt="left slider button"/></div>
          <div className="button-right"><img src={buttonRight} alt="right slider button"/></div>
        </div>
    )
}

export default Slider