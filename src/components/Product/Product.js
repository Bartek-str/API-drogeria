import React, { useState } from "react";
import data from "../../data/data";

const Product = (props) => {
    const product = data.products.find(x => x.ean === props.match.params.id)
    const [active, setActive] = useState(false);

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
                <button>Dodaj</button>
            </div>
        </div>
    )
}

export default Product;