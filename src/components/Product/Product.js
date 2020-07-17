import React from "react";
import data from "../../data/data";

const Product = (props) => {
    const product = data.products.find(x => x.ean === props.match.params.id)

    return (
        <div className='productDet'>
            <img src={product.image} alt='produkt' />
            <div className='details'>
                <div className='brand'>{product.brand}</div>
                <div className='name'>{product.name}</div>
                <div className='description'>{product.description}</div>
                <div className='price'>{product.price},00zł</div>
                <button>Dodaj</button>
            </div>
        </div>
    )
}

export default Product;