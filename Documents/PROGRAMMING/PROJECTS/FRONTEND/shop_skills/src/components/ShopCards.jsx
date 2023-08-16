import React from 'react';

export default function ShopCards({ item, addCart }) {

    return (
        <div className="col-sm-4 mb-3">
            <div className="card shop__item">
                <img className="card-img-top" src={item.image} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <small>$ {item.price}</small>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary" onClick={addCart.bind(null, item)}>Add</button>
                </div>
            </div>
        </div>
    )
}