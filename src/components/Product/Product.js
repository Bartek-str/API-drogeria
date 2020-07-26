import React, { useState } from "react";

const Product = (props) => {
    const product = props.location.state.product;
    const cart = props.cart;
    const setCart = props.setCart;
    const [active, setActive] = useState(false);
    const value = props.value;
    const setValue = props.setValue;

    const addToCart = (product) => {
        if (cart.find(x => x.ean === product.ean)) {
            cart.find(x => x.ean === product.ean).qty = cart.find(x => x.ean === product.ean).qty + 1
            setValue(value + Number(product.price.replace(',','.')))
        }
        else {
            product.qty = 1;
            setCart([...cart, product])
            if (value) {
                setValue(value + Number(product.price.replace(',','.')))
            }
            else {
                setValue(Number(product.price.replace(',','.')))
            }
        }
    }

    return (
        <div className='productDet'>
            <img src={product.image} alt='produkt' />
            <div className='details'>
                <div className='brand'>{product.brand}</div>
                <div className='name'>{product.name} {product.volume}</div>
                <div className='description'>{product.description}</div>
                <div className='ingredients' onClick={() => setActive(!active)}>Skład</div>
                {active ? <div className='inci'>{product.ingredients}</div> : ''}
                <div className='price'>{product.price}zł </div>
                <button onClick={() => addToCart(product)}>Dodaj</button>
            </div>
        </div>
    )
}

export default Product;