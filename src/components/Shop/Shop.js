import React, { useState } from "react";

const Shop = () => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');

    return (
        <div className='Shop'>
            <div className='Categories'>
                <div onClick={() => {setCategory('skin-care'); setSubcategory('')}}>Pielęgnacja</div>
                <div onClick={() => {setCategory('man-care'); setSubcategory('')}}>Dla mężczyzn</div>
                <div onClick={() => {setCategory('makeup'); setSubcategory('')}}>Makijaż</div>
                <div onClick={() => {setCategory('brands'); setSubcategory('')}}>Marki</div>
            </div>
            <div className='MainPhoto'>
                {category === '' || subcategory === '' ?
                    <>
                        {category === 'skin-care' ?
                            <>
                                <div className='subcategories'>
                                    <div onClick={() => setSubcategory('face')}>Twarz</div>
                                    <div onClick={() => setSubcategory('body')}>Ciało</div>
                                    <div onClick={() => setSubcategory('hands&feet')}>Dłonie i stopy</div>
                                    <div onClick={() => setSubcategory('hair')}>Włosy</div>
                                    <div onClick={() => setSubcategory('sun-care')}>Ochrona przeciwsłoneczna</div>
                                </div>
                            </> : ''}
                        {category === 'man-care' ?
                            <>
                                <div className='subcategories'>
                                    <div onClick={() => setSubcategory('face')}>Twarz</div>
                                    <div onClick={() => setSubcategory('body')}>Ciało</div>
                                    <div onClick={() => setSubcategory('hair')}>Włosy</div>
                                </div>
                            </> : ''}
                        {category === 'makeup' ?
                            <>
                                <div className='subcategories'>
                                    <div onClick={() => setSubcategory('face')}>Twarz</div>
                                    <div onClick={() => setSubcategory('eyes')}>Oczy</div>
                                    <div onClick={() => setSubcategory('lips')}>Usta</div>
                                </div>
                            </> : ''}
                        {category === 'brands' ?
                            <>
                                <div className='subcategories'>
                                    <div onClick={() => setSubcategory('mokosh-cosmetics')}>Mokosh Cosmetics</div>
                                    <div onClick={() => setSubcategory('krayna')}>Krayna</div>
                                    <div onClick={() => setSubcategory('holika-holika')}>Holika Holika</div>
                                </div>
                            </> : ''}
                        <div className='empty' onClick={() => setCategory('')} />
                    </> : ''}
                {console.log(category, subcategory)}
            </div>
        </div>
    );
};

export default Shop;