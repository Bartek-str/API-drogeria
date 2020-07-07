import React, { useState } from "react";

const Shop = () => {
    const [category, setCategory] = useState();
    const [subcategory, setSubcategory] = useState();

    return (
        <div className='Shop'>
            <div className='Categories'>
                <div>Pielęgnacja</div>
                <div>Dla mężczyzn</div>
                <div>Makijaż</div>
                <div>Marki</div>
            </div>
            <div className='MainPhoto'>

            </div>
        </div>
    );
};

export default Shop;