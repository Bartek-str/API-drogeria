import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shop = (props) => {
    const text = props.text;
    const addToCart = props.addToCart;
    const [active, setActive] = useState(false);

    return (
        <div className='Shop'>
            <div className='MainPhoto'>
                <div className='categories'>
                    <div onClick={() => setActive(!active)} className='menu'>Kategorie<FontAwesomeIcon icon={active ? faCaretUp : faCaretDown} /></div>
                    <div className={active ? 'categoryMenuActive' : 'categoryMenu'}>
                        <Link to='/sklep/pielegnacja'><div>Pielęgnacja</div></Link>
                        <Link to='/sklep/makijaz'><div>Makijaż</div></Link>
                        <Link to='/sklep/wlosy'><div>Włosy</div></Link>
                        <Link to='/sklep/dla-mezczyzn'><div>Dla mężczyzn</div></Link>
                        <Link to='/sklep/marki'><div>Marki</div></Link>
                    </div>
                </div>
                <div className='main-container'>
                    <div>Tworzymy sklep</div>
                    <div className='text'>z myślą o Tobie</div>
                </div>
            </div>
            {text ?
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
                </div> : ''}
        </div>
    )
}

export default Shop;