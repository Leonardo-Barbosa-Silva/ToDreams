import React from 'react';

export default function ListShopCards(props) {

    return (
        <div className="row shop">
            {props.children}
        </div>
    )
}