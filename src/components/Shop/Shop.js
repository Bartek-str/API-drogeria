import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";

const Shop = () => {
    // const [category, setCategory] = useState('');
    // const [subcategory, setSubcategory] = useState('');
    // // const [products, setProducts] = useState([]);

    return (
        <div className='Shop'>
            {/*<div className='Categories'>*/}
            {/*    <div onClick={() => {setCategory('pielegnacja'); setSubcategory('')}}>Pielęgnacja</div>*/}
            {/*    <div onClick={() => {setCategory('dla-mezczyzn'); setSubcategory('')}}>Dla mężczyzn</div>*/}
            {/*    /!*<div onClick={() => {setCategory('makijaz'); setSubcategory('')}}>Makijaż</div>*!/*/}
            {/*    <div onClick={() => {setCategory('marki'); setSubcategory('')}}>Marki</div>*/}
            {/*</div>*/}
            <div className='MainPhoto'>
                {/*{category === '' || subcategory === '' ?*/}
                {/*    <>*/}
                {/*        {category === 'pielegnacja' ?*/}
                {/*            <>*/}
                {/*                <div className='subcategories'>*/}
                {/*                    <Link to='/sklep/pielegnacja/twarz' onClick={() => setSubcategory('pielegnacja/twarz')}>Twarz</Link>*/}
                {/*                    <Link to='/sklep/pielegnacja/cialo' onClick={() => setSubcategory('pielegnacja/cialo')}>Ciało</Link>*/}
                {/*                    <Link to='/sklep/pielegnacja/dlonie&stopy' onClick={() => setSubcategory('pielegnacja/dlonie&stopy')}>Dłonie i stopy</Link>*/}
                {/*                    <Link to='/sklep/pielegnacja/wlosy' onClick={() => setSubcategory('pielegnacja/wlosy')}>Włosy</Link>*/}
                {/*                    <Link to='/sklep/pielegnacja/ochrona-przeciwloneczna' onClick={() => setSubcategory('pielegnacja/ochrona-przeciwsloneczna')}>Ochrona przeciwsłoneczna</Link>*/}
                {/*                </div>*/}
                {/*            </> : ''}*/}
                {/*        {category === 'dla-mezczyzn' ?*/}
                {/*            <>*/}
                {/*                <div className='subcategories'>*/}
                {/*                    <Link to='/sklep/dla-mezczyzny/twarz' onClick={() => setSubcategory('dla-mezczyzny/twarz')}>Twarz</Link>*/}
                {/*                    <Link to='/sklep/dla-mezczyzny/cialo' onClick={() => setSubcategory('dla-mezczyzny/cialo')}>Ciało</Link>*/}
                {/*                    <Link to='/sklep/dla-mezczyzny/wlosy' onClick={() => setSubcategory('dla-mezczyzny/wlosy')}>Włosy</Link>*/}
                {/*                </div>*/}
                {/*            </> : ''}*/}
                        {/*{category === 'makijaz' ?*/}
                        {/*    <>*/}
                        {/*        <div className='subcategories'>*/}
                        {/*            <Link to='/sklep/makijaz/twarz' onClick={() => setSubcategory('twarz')}>Twarz</Link>*/}
                        {/*            <Link to='/sklep/makijaz/oczy' onClick={() => setSubcategory('oczy')}>Oczy</Link>*/}
                        {/*            <Link to='/sklep/makijaz/usta' onClick={() => setSubcategory('usta')}>Usta</Link>*/}
                        {/*        </div>*/}
                        {/*    </> : ''}*/}
                {/*        {category === 'marki' ?*/}
                {/*            <>*/}
                {/*                <div className='subcategories'>*/}
                {/*                    <Link to='/sklep/marki/holika-holika' onClick={() => setSubcategory('marki/holika-holika')}>Holika Holika</Link>*/}
                {/*                    <Link to='/sklep/marki/krayna' onClick={() => setSubcategory('marki/krayna')}>Krayna</Link>*/}
                {/*                    <Link to='/sklep/marki/mokosh-cosmetics' onClick={() => setSubcategory('marki/mokosh-cosmetics')}>Mokosh Cosmetics</Link>*/}
                {/*                </div>*/}
                {/*            </> : ''}*/}
                {/*        <div className='empty' onClick={() => setCategory('')} />*/}
                {/*    </> : ''}*/}
                {/*{category === 'pielegnacja' ?*/}
                {/*    <>*/}
                {/*        {subcategory === 'pielegnacja/twarz' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Pielęgnacja</h1>*/}
                {/*                <h3>Twarz</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'pielegnacja/cialo' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Pielęgnacja</h1>*/}
                {/*                <h3>Ciało</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'pielegnacja/dlonie&stopy' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Pielęgnacja</h1>*/}
                {/*                <h3>Dłonie i stopy</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'pielegnacja/wlosy' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Pielęgnacja</h1>*/}
                {/*                <h3>Włosy</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'pielegnacja/ochrona-przeciwsloneczna' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Pielęgnacja</h1>*/}
                {/*                <h3>Ochrona przeciwsłoneczna</h3>*/}
                {/*            </div> : ''}*/}
                {/*    </> : ''}*/}
                {/*{category === 'dla-mezczyzn' ?*/}
                {/*    <>*/}
                {/*        {subcategory === 'dla-mezczyzn/twarz' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Dla mężczyzn</h1>*/}
                {/*                <h3>Twarz</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'dla-mezczyzn/cialo' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Dla mężczyzn</h1>*/}
                {/*                <h3>Ciało</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'dla-mezczyzn/wlosy' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Dla mężczyzn</h1>*/}
                {/*                <h3>Włosy</h3>*/}
                {/*            </div> : ''}*/}
                {/*    </> : ''}*/}
                {/*{category === 'makijaz' ?*/}
                {/*    <>*/}
                {/*        {subcategory === 'twarz' ?*/}
                {/*            <div>*/}
                {/*                <h1>Makijaż</h1>*/}
                {/*                <h3>Twarz</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'oczy' ?*/}
                {/*            <div>*/}
                {/*                <h1>Makijaż</h1>*/}
                {/*                <h3>Oczy</h3>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'usta' ?*/}
                {/*            <div>*/}
                {/*                <h1>Makijaż</h1>*/}
                {/*                <h3>Usta</h3>*/}
                {/*            </div> : ''}*/}
                {/*    </> : ''}*/}
                {/*{category === 'marki' ?*/}
                {/*    <>*/}
                {/*        {subcategory === 'marki/holika-holika' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Holika Holika</h1>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'marki/krayna' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Krayna</h1>*/}
                {/*            </div> : ''}*/}
                {/*        {subcategory === 'marki/mokosh-cosmetics' ?*/}
                {/*            <div className='one'>*/}
                {/*                <h1>Mokosh Cosmetics</h1>*/}
                {/*            </div> : ''}*/}
                {/*    </> : ''}*/}
                <div className='main-container'>
                    <div>Tworzymy sklep</div>
                    <div className='text'>z myślą o Tobie</div>
                </div>
            </div>
            <div className='products-container'>
                <div className='products'>
                {data.products.map(product => {
                    return (
                        <div className='product' key={product.ean}>
                            <Link to={`/sklep/${product.ean}`} props={product.ean}>
                                <img src={product.image} alt='product' />
                                <div className='brand'>{product.brand}</div>
                                <div className='name'>{product.name} {product.volume}</div>
                            </Link>
                            <div className='price'>{product.price}zł</div>
                            <button>Dodaj</button>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    );
};

export default Shop;