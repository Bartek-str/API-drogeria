import { faMinus, faPlus, faSearch, faShoppingBag, faTrash, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/lisc_kolor.svg";

const Header = (props) => {
    const active = props.active;
    const setActive = props.setActive;
    const search = props.search;
    const setSearch = props.setSearch;
    const setText = props.setText;
    const openCart = props.openCart;
    const setOpenCart = props.setOpenCart;
    const cart = props.cart;
    const add = props.add;
    const subtract = props.subtract;
    const remove = props.remove;
    const discountActive = props.discountActive;
    const value = props.value;
    const check = props.check;
    const checkD = props.checkD;
    const checkAll = props.checkAll;
    const setDiscount = props.setDiscount;
    const checkDiscount = props.checkDiscount;

    return (
        <div className='Header'>
            {active ? <div className='shadow' onClick={() => setActive(false)} /> : ''}
            <div className={active ? 'nav-links x' : 'nav-links'}>
                <div><Link to='/sklep'>Sklep</Link></div>
                <div><Link to='/o-nas'>O nas</Link></div>
                <div><Link to='/kontakt'>Kontakt</Link></div>
            </div>
            <Link to='/' className='logo'>
                <div className='api'>API</div>
                <div className='container'>
                    <img src={Logo} alt='lisc'/>
                    <div className='drogeria'>drogeria</div>
                </div>
            </Link>
            {search ? <input className='search' placeholder='wyszukaj' onChange={(e) => setText(e.target.value)}/> : ''}
            <div className={active ? 'nav-shop x' : 'nav-shop'}>
                <Link to='/sklep'><FontAwesomeIcon icon={ faSearch } className='icon' onClick={() => setSearch(!search)} /></Link>
                <Link to='/konto'><FontAwesomeIcon icon={ faUserCircle } className='icon'/></Link>
                <FontAwesomeIcon icon={ faShoppingBag } className='icon' onClick={() => {setOpenCart(!openCart); setActive(false)}} />{cart.length > 0 ? <p className='qty'>{cart.length}</p> : ''}
            </div>
            <div className={active ? 'burger x' : 'burger'} onClick={() => setActive(!active)}>
                <div className='line1'/>
                <div className='line2'/>
                <div className='line3'/>
            </div>
            {openCart ?
                <div className='cart'>
                    {cart.length === 0 ? <p className='emptyCart'>Koszyk pusty</p> : ''}
                    <>
                        <div className='cartPro'>
                            {cart.map(product => {
                                return (
                                    <div className={cart.length > 0 ? 'cartContainer' : 'hidden'} key={product.ean}>
                                        <Link to={
                                            {pathname: `/sklep/${product.ean}`, state: {product, cart}}}>
                                            <img src={product.image} alt='product' />
                                            <div className='nameContainer'>
                                                <div className='brand'>{product.brand}</div>
                                                <div className='name'>{product.name} {product.volume}</div>
                                            </div>
                                        </Link>
                                        <div className='price'>{product.price}zł</div>
                                        <div className='qtyContainer'>
                                            <FontAwesomeIcon icon={ faPlus } className='plus' onClick={() => add(product)} />
                                            <div className='productQty'>{product.qty}</div>
                                            <FontAwesomeIcon icon={ faMinus } className='minus' onClick={() => subtract(product)} />
                                        </div>
                                        <FontAwesomeIcon icon={ faTrash } className='trash' onClick={() => remove(product)} />
                                    </div>
                                )})}
                        </div>
                        <div className='valueContainer'>
                            <div className={discountActive ? 'value' : 'valueClassic'}>Wartość zamówienia : {check(value)}zł</div>
                            {discountActive ?
                                <>
                                    <div className='discount'>Rabat : -{checkD(value)}zł</div>
                                    <div className='allValue'>Suma : {checkAll(value)}</div>
                                </> : ''}
                        </div>
                        <div className='mainCartContainer'>
                            <div className='discountContainer'>
                                <input placeholder='Kod Rabatowy' className='discountCode' onChange={(e) => setDiscount(e.target.value)} />
                                <button type='submit' onClick={() => checkDiscount()}>Aktywuj</button>
                            </div>
                            <Link to='/zakupy'><div className='next' onClick={() => setOpenCart(false)}>Dalej</div></Link>
                        </div>
                    </>
                </div> : ''}
        </div>
    )
}

export default Header;