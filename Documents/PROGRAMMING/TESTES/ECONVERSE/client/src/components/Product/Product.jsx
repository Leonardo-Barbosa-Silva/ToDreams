import { useState } from "react"
import Modal from "../Modal/Modal"

function Product({ product }) {

    const [ modal, setModal ] = useState(false)

    return (
        <div className="item" key={product.productName}>
            <div className="img">
                <img src={product.photo} alt={`vitrine icon ${product.productName}`} loading="lazy"/>
            </div>
            <div className="info">
                <p>{product.descriptionShort}</p>
                <div className="pay">
                <p>
                    <s>{(product.price / 1.5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</s>
                </p>
                <p><span>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
                <p>ou 2x de R$ 49,95 sem juros</p>
                <div className="delivery">
                    <p>Frete grátis</p>
                </div>
                </div>
            </div>

            <Modal product={product} modal={modal} setModal={() => setModal(!modal)}/>

            <button type="button" onClick={() => setModal(!modal)} className="buy">comprar</button>
        </div>
    )
}

export default Product