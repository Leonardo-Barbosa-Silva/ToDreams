import React from 'react';

import { shopProducts } from "./src/data/products";

import ListShopCards from "./src/components/ListShopCards.jsx";
import ShopCards from './src/components/ShopCards.jsx';
import ListCartCards from './src/components/ListCartCards.jsx';



export default function AppComponent() {

    const [ cartProducts, setCartProduct ] = React.useState(JSON.parse(localStorage.getItem('cart-products')) || {})

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

    localStorage.setItem('cart-products', JSON.stringify(cartProducts))

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
    )
}