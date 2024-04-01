const shopProducts = [
    {
        id: 10001,
        title: "Comunication",
        price: 500.00,
        description: "Speak fluently in English in 2023.",
        image: "./src/images/tec.jpeg"
    },
    {
        id: 10002,
        title: "Programming",
        price: 700.00,
        description: "Became a better programmer in 2023.",
        image: "./src/images/tec.jpeg"
    },
    {
        id: 10003,
        title: "Persuasion",
        price: 1000.00,
        description: "Magnetic person in 2023.",
        image: "./src/images/tec.jpeg"
    },
    {
        id: 10004,
        title: "Emotional Intelligence",
        price: 1200.00,
        description: "Magnific emotional intelligence in 2023.",
        image: "./src/images/tec.jpeg"
    }
];


function ShopCards({ item, addCart }) {

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

        /*
        React.createElement('div', { className: 'col-sm-4 mb-3' },
            React.createElement('div', { className: 'card shop__item' },
                React.createElement('img', { className: 'card-img-top', src: `${item.image}` }),
                React.createElement('div', { className: 'card-body' },
                    React.createElement('h5', { className: 'card-title' }, `${item.title}`),
                    React.createElement('small', null, `$ ${item.price}`),
                    React.createElement('p', { className: 'card-text' }, `${item.description}`),
                    React.createElement('button', { className: 'btn btn-primary', onClick: addCart.bind(null, item) }, 'Add')
                )
            )
        )
        */
    )
}


function CartCards({ item, removeCart }) {

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


function ListShopCards(props) {

    return (
        <div className="row shop">
            {props.children}
        </div>

        /*
        React.createElement('div', { className: 'row shop' }, props.children)
        */
    )
}


function ListCartCards(props) {

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


function AppComponent() {

    const [ cartProducts, setCartProduct ] = React.useState({})

    function addProductCart(item) {
        if (!cartProducts[item.id]) {
            setCartProduct({
                ...cartProducts,
                [item.id]: {
                    ...item,
                    qtd: 1
                }, 
            })

        } else {
            setCartProduct({
                ...cartProducts,
                [item.id]: {
                    ...item,
                    qtd: cartProducts[item.id].qtd + 1
                }, 
            })
        }
    }

    function removeProductCart(itemID) {
        if (cartProducts[itemID].qtd < 2 ) {
            delete cartProducts[itemID]
            setCartProduct({...cartProducts})
        } else {
            setCartProduct({
                ...cartProducts,
                [itemID]: {
                    ...cartProducts[itemID],
                    qtd: --cartProducts[itemID].qtd
                }
            })
        }
    }

    return (
        <>
            <div className="col-sm-8">
                <ListShopCards>
                    {shopProducts.map( item => (
                        <ShopCards key={item.id} item={item} addCart={addProductCart} />
                    ))}
                </ListShopCards>
            </div>
            <div className="col-sm-4">
                <ListCartCards items={cartProducts} removeCart={removeProductCart} />
            </div>
        </>


        /*
        React.createElement(React.Fragment, null,
            React.createElement('div', { className: "col-sm-8" },
                React.createElement(ListShopCards, null,
                    shopProducts.map( (item) => (
                        React.createElement(ShopCards, { key: item.id, item, addCart: addProductCart })
                    ))
                )
            ),
            React.createElement('div', { className: "col-sm-4" },
                React.createElement(ListCartCards, { items: cartProducts, removeCart: removeProductCart }) 
            )
        )
        */
    )
}


ReactDOM.render(
    <AppComponent />,
    document.getElementById('root')
)