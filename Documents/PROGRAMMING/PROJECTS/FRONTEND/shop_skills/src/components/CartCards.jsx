import React from 'react';

export default function CartCards({ item, removeCart }) {

    return (
        <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{`Price und: ${item.price} | Qtd: ${item.qtd}`}</p>
            <p className="card-text">{`Total: $ ${item.price * item.qtd}`}</p>
            <button className="btn btn-danger" onClick={removeCart.bind(null, item.id)}>Remove</button>
        </div>

        /*
        React.createElement('div', { className: 'card-body' },
            React.createElement('h5', { className: 'card-title' }, `${item.title}`),
            React.createElement('p', { className: 'card-text' }, `Price und: ${item.price} | Qtd: ${item.qtd}`),
            React.createElement('p', { className: 'card-text' }, `Total: $ ${item.price * item.qtd}`),
            React.createElement('button', { className: 'btn btn-danger', onClick: removeCart.bind(null, item.id) }, 'Remove')
        )
        */
    )
}