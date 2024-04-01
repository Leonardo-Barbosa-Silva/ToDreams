import React from 'react';

import CartCards from './CartCards.jsx';



export default function ListCartCards(props) {

    return (
        <div className="cart">
            <div className="cart__items">
                <div className="card cart__item">
                    {Object.values(props.items).map( (item) => (
                        <CartCards key={item.id} item={item} removeCart={props.removeCart} />
                    ))}
                </div>
            </div>
            <div className="cart__total">
                <h6>
                    Total:
                    <strong>
                        $
                        {Object.keys(props.items).reduce( (acc, currentValue) => {
                            return acc + (props.items[currentValue].price * props.items[currentValue].qtd)
                        }, 0)}
                    </strong>
                </h6>

            </div>
        </div>

        /*
        React.createElement('div', { className: "cart" },
            React.createElement('div', { className: "cart__items" },
                React.createElement('div', { className: 'card cart__item' },
                    Object.values(props.items).map( (item) => (
                        React.createElement(CartCards, { key: item.id, item, removeCart: props.removeCart })
                    ))
                )
            ),
            React.createElement('div', { className: 'cart__total mt-2 pd-3' },
                React.createElement('h6', null, 'Total: ', React.createElement('strong', null, '$ ',
                        Object.keys(props.items).reduce( (acc, currentValue) => {
                            return acc + (props.items[currentValue].price * props.items[currentValue].qtd)
                        }, 0)
                    )
                )
            )
        )
        */
    )
}