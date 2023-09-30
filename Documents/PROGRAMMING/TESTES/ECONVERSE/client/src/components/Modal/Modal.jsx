import './modal.sass'


function Modal({ product, modal, setModal }) {

    return (
        <>
            {modal && (
                <div className="modal">
                    <div className="content">
                        <div className="close">
                            <button type="button" onClick={setModal}>X</button>
                        </div>
                        <div className="body">
                            <div className="img">
                                <img src={product.photo} alt={`vitrine icon in modal of ${product.productName}`} />
                            </div>
                            <div className="text">
                                <h3>{product.productName}</h3>
                                <h4>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                                <h5>Many desktop publishing packages and web page editors<br />now many desktop publishing</h5>
                                <p><span>Veja mais detalhes do produto {'>'}</span></p>
                                <div className="count">
                                    <div className="less">-</div>
                                    <div className="number">1</div>
                                    <div className="more">+</div>
                                </div>
                                <button type="button">comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal