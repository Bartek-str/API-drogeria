import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";

const Shop = (props) => {
    const text = props.text;
    const addToCart = props.addToCart;

    return (
        <div className='Shop'>
            <div className='MainPhoto'>
                <div className='main-container'>
                    <div>Tworzymy sklep</div>
                    <div className='text'>z myślą o Tobie</div>
                </div>
            </div>
            <div className='products-container'>
                <div className='products'>
                    {data.products.map(product => {
                        return (
                            <div className={product.name.toUpperCase().includes(text.toUpperCase()) || product.brand.toUpperCase().includes(text.toUpperCase()) ? 'product' : 'hidden'} key={product.ean}>
                                <Link to={
                                    {pathname: `/sklep/${product.ean}`, state: {product}}}>
                                    <img src={product.image} alt='product' />
                                    <div className='brand'>{product.brand}</div>
                                    <div className='name'>{product.name} {product.volume}</div>
                                </Link>
                                <div className='price'>{product.price}zł</div>
                                <button onClick={() => addToCart(product)}>Dodaj</button>
                            </div>
                        )})}
                </div>
            </div>
        </div>
    )
}

export default Shop;