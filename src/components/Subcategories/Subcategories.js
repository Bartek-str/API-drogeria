import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";

const Subcategories = (props) => {
    const url = props.match.path;
    const addToCart = props.addToCart;
    const category = props.category;
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
                <div className='main-container'>
                    {url === '/sklep/pielegnacja/twarz' ?
                        <>
                            <div>Pielęgnacja</div>
                            <div>Twarz</div>
                        </> : ''}
                    {url === '/sklep/pielegnacja/cialo' ?
                        <>
                            <div>Pielęgnacja</div>
                            <div>Ciało</div>
                        </> : ''}
                    {url === '/sklep/pielegnacja/dlonie-i-stopy' ?
                        <>
                            <div>Pielęgnacja</div>
                            <div>Dłonie i stopy</div>
                        </> : ''}
                    {url === '/sklep/pielegnacja/ochrona-przeciwsloneczna' ?
                        <>
                            <div>Pielęgnacja</div>
                            <div>Ochrona przeciwsłoneczna</div>
                        </> : ''}
                    {url === '/sklep/makijaz/twarz' ?
                        <>
                            <div>Makijaż</div>
                            <div>Twarz</div>
                        </> : ''}
                    {url === '/sklep/makijaz/oczy' ?
                        <>
                            <div>Makijaż</div>
                            <div>Oczy</div>
                        </> : ''}
                    {url === '/sklep/makijaz/usta' ?
                        <>
                            <div>Makijaż</div>
                            <div>Usta</div>
                        </> : ''}
                    {url === '/sklep/wlosy/pielegnacja' ?
                        <>
                            <div>Włosy</div>
                            <div>Pielęgnacja</div>
                        </> : ''}
                    {url === '/sklep/wlosy/stylizacja' ?
                        <>
                            <div>Włosy</div>
                            <div>Stylizacja</div>
                        </> : ''}
                    {url === '/sklep/dla-mezczyzn/twarz' ?
                        <>
                            <div>Dla mężczyzn</div>
                            <div>Twarz</div>
                        </> : ''}
                    {url === '/sklep/dla-mezczyzn/cialo' ?
                        <>
                            <div>Dla mężczyzn</div>
                            <div>Ciało</div>
                        </> : ''}
                    {url === '/sklep/dla-mezczyzn/wlosy' ?
                        <>
                            <div>Dla mężczyzn</div>
                            <div>Włosy</div>
                        </> : ''}
                    {url === '/sklep/marki/holika-holika' ?
                        <>
                            <div>Holika Holika</div>
                        </> : ''}
                    {url === '/sklep/marki/krayna' ?
                        <>
                            <div>Krayna</div>
                        </> : ''}
                    {url === '/sklep/marki/ministerstwo-dobrego-mydla' ?
                        <>
                            <div>Ministerstwo Dobrego Mydła</div>
                        </> : ''}
                    {url === '/sklep/marki/mokosh-cosmetics' ?
                        <>
                            <div>Mokosh Cosmetics</div>
                        </> : ''}
                </div>
            </div>
            <div className='products-container'>
                <div className='products'>
                    {data.products.map(product => {
                        return (
                            <div className={(product.category.includes(category) || product.brand.includes(category)) ? 'product' : 'hidden'} key={product.ean}>
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

export default Subcategories;