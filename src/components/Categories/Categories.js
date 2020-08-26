import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Categories = (props) => {
    const url = props.match.path;
    const setCategory = props.setCategory;
    const [active, setActive] = useState();

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
                <div className='subcategories'>
                    {url === '/sklep/pielegnacja' ? 
                        <>
                            <Link to='/sklep/pielegnacja/twarz'><div onClick={ () => setCategory('skincare/face') }>Twarz</div></Link>
                            <Link to='/sklep/pielegnacja/cialo'><div onClick={ () => setCategory('skincare/body') }>Ciało</div></Link>
                            <Link to='/sklep/pielegnacja/dlonie-i-stopy'><div onClick={ () => setCategory('skincare/hands&feets') }>Dłonie i stopy</div></Link>
                            <Link to='/sklep/pielegnacja/ochrona-przeciwsloneczna'><div onClick={ () => setCategory('skincare/suncare') }>Ochrona przeciwsłoneczna</div></Link>
                        </>
                        : ''}
                    {url === '/sklep/makijaz' ?
                        <>
                            <Link to='/sklep/makijaz/twarz'><div onClick={ () => setCategory('makeup/face') }>Twarz</div></Link>
                            <Link to='/sklep/makijaz/oczy'><div onClick={ () => setCategory('makeup/eyes') }>Oczy</div></Link>
                            <Link to='/sklep/makijaz/usta'><div onClick={ () => setCategory('makeup/lips') }>Usta</div></Link>
                        </>
                        : ''}
                    {url === '/sklep/wlosy' ?
                        <>
                            <Link to='/sklep/wlosy/pielegnacja'><div onClick={ () => setCategory('hair/care') }>Pielęgnacja</div></Link>
                            <Link to='/sklep/wlosy/stylizacja'><div onClick={ () => setCategory('hair/styling') }>Stylizacja</div></Link>
                        </>
                        : ''}
                    {url === '/sklep/dla-mezczyzn' ?
                        <>
                            <Link to='/sklep/dla-mezczyzn/twarz'><div onClick={ () => setCategory('man/face') }>Twarz</div></Link>
                            <Link to='/sklep/dla-mezczyzn/cialo'><div onClick={ () => setCategory('man/body') }>Ciało</div></Link>
                            <Link to='/sklep/dla-mezczyzn/wlosy'><div onClick={ () => setCategory('man/hair') }>Włosy</div></Link>
                        </>
                        : ''}
                    {url === '/sklep/marki' ?
                        <>
                            <Link to='/sklep/marki/holika-holika'><div onClick={ () => setCategory('Holika Holika') }>Holika Holika</div></Link>
                            <Link to='/sklep/marki/krayna'><div onClick={ () => setCategory('Krayna') }>Krayna</div></Link>
                            <Link to='/sklep/marki/ministerstwo-dobrego-mydla'><div onClick={ () => setCategory('Ministerstwo Dobrego Mydła') }>Ministerstwo Dobrego Mydła</div></Link>
                            <Link to='/sklep/marki/mokosh-cosmetics'><div onClick={ () => setCategory('Mokosh Cosmetics') }>Mokosh Cosmetics</div></Link>
                        </>
                        : ''}
                </div>
            </div>
            {/*<div className='products-container'>*/}
            {/*    <div className='products'>*/}
            {/*        {data.products.map(product => {*/}
            {/*            return (*/}
            {/*                <div className={product.name.toUpperCase().includes(text.toUpperCase()) || product.brand.toUpperCase().includes(text.toUpperCase()) ? 'product' : 'hidden'} key={product.ean}>*/}
            {/*                    <Link to={*/}
            {/*                        {pathname: `/sklep/${product.ean}`, state: {product}}}>*/}
            {/*                        <img src={product.image} alt='product' />*/}
            {/*                        <div className='brand'>{product.brand}</div>*/}
            {/*                        <div className='name'>{product.name} {product.volume}</div>*/}
            {/*                    </Link>*/}
            {/*                    <div className='price'>{product.price}zł</div>*/}
            {/*                    <button onClick={() => addToCart(product)}>Dodaj</button>*/}
            {/*                </div>*/}
            {/*            )})}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default Categories;