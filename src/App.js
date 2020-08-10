import { faMinus, faPlus, faSearch, faShoppingBag, faTrash, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import Logo from "./assets/lisc_kolor.svg";
import Building from "./components/Building";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import Product from "./components/Product";
import data from "./data/data";
import discountCodes from "./data/discount";
import CheckOut from "./components/CheckOut";

function App() {
    const [active, setActive] = useState(false);
    const [search, setSearch] = useState(false);
    const [text, setText] = useState('');
    const [cart, setCart] = useState([]);
    const [openCart, setOpenCart] = useState(false);
    const [value, setValue] = useState();
    const [discount, setDiscount] = useState(false);
    const [discountActive, setDiscountActive] = useState();

    const checkDiscount = () => {
        if (discountCodes.hasOwnProperty(discount)) {
            setDiscountActive(discountCodes[discount])
        }
    }

    const check = (val) => {
        if (val) {
            if (val.toString().indexOf('.') !== -1) {
                return val.toFixed(2).toString().replace('.', ',')
            }
            return `${val},00`
        }
        return val
    }

    const checkD = (val) => {
        if (val && discountActive) {
            if ((val * discountActive).toString().indexOf('.') !== -1) {
                return (val * discountActive).toFixed(2).toString().replace('.', ',')
            }
            return `${val * discountActive},00`
        }
    }

    const checkAll = (val) => {
        if (val && discountActive) {
            if ((val - (val * discountActive)).toString().indexOf('.') !== -1) {
                return (val - (val * discountActive)).toFixed(2).toString().replace('.', ',')
            }
            return `${(val - (val * discountActive))},00`
        }
    }

    const addToCart = (product) => {
        if (cart.find(x => x.ean === product.ean)) {
            cart.find(x => x.ean === product.ean).qty = cart.find(x => x.ean === product.ean).qty + 1
            setValue(value + Number(product.price.replace(',','.')))
        }
        else {
            product.qty = 1;
            setCart([...cart, product])
            if (value) {
                setValue(value + Number(product.price.replace(',','.')))
            }
            else {
                setValue(Number(product.price.replace(',','.')))
            }
        }
    }

    const add = (product) => {
        cart.find(x => x.ean === product.ean).qty = cart.find(x => x.ean === product.ean).qty + 1
        setCart([...cart])
        setValue(value + Number(product.price.replace(',','.')))
    }

    const subtract = (product) => {
        let x = cart.find(x => x.ean === product.ean);
        x.qty = x.qty - 1
        if (x.qty <= 0) {
            cart.splice(cart.findIndex(x => x.ean === product.ean), cart.findIndex(x => x.ean === product.ean) +1);
        }
        setCart([...cart])
        setValue(value - Number(product.price.replace(',','.')))
    }

    const remove = (product) => {
        cart.splice(cart.findIndex(x => x.ean === product.ean), cart.findIndex(x => x.ean === product.ean) +1);
        setCart([...cart])
        setValue(value - (Number(product.price.replace(',','.')) * product.qty))
    }

    return (
        <div className="App">
            <Router>
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
                        <FontAwesomeIcon icon={ faShoppingBag } className='icon' onClick={() => setOpenCart(!openCart)} />{cart.length > 0 ? <p className='qty'>{cart.length}</p> : ''}
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
                <Switch>
                    <Route path="/" exact component={ Main } />
                    <Route path="/sklep" exact component={ () =>
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
                    } />
                    <Route path="/sklep/:id" render={props => (
                        <Product {...props} cart={cart} setCart={setCart} value={value} setValue={setValue} />
                    )} />
                    <Route path="/regulamin" component={ Building } />
                    <Route path="/polityka-prywatnosci" component={ Building } />
                    <Route path="/o-nas" component={ Building } />
                    <Route path="/kontakt" component={ Building } />
                    <Route path="/konto" component={ Building } />
                    <Route path="/zakupy" render={props => (
                        <CheckOut {...props} value={ value } discountActive={ discountActive } />
                    )} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;