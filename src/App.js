import React, { useState } from 'react';
import Building from "./components/Building";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivatePolicy from "./components/PrivatePolicy";
import Product from "./components/Product";
import Regulations from "./components/Regulations";
import Shop from "./components/Shop";
import Subcategories from "./components/Subcategories";
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
    const [category, setCategory] = useState();

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
                <Header active={active} setActive={setActive} search={search} setSearch={setSearch} setText={setText} openCart={openCart} setOpenCart={setOpenCart} cart={cart} add={add} subtract={subtract} remove={remove} discountActive={discountActive} value={value} check={check} checkD={checkD} checkAll={checkAll} checkDiscount={checkDiscount} setDiscount={setDiscount} />
                <Switch>
                    <Route path="/" exact component={ Main } />
                    <Route path="/sklep" exact component={ props => <Shop {...props} text={text} addToCart={addToCart} /> } />
                    <Route path="/sklep/pielegnacja" exact component={ props => <Categories {...props} text={text} addToCart={addToCart} setCategory={setCategory} /> }/>
                    <Route path="/sklep/pielegnacja/twarz" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/pielegnacja/cialo" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/pielegnacja/dlonie-i-stopy" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/pielegnacja/ochrona-przeciwsloneczna" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/makijaz" exact component={ props => <Categories {...props} text={text} addToCart={addToCart} setCategory={setCategory} /> }/>
                    <Route path="/sklep/makijaz/twarz" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/makijaz/oczy" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/makijaz/usta" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/wlosy" exact component={ props => <Categories {...props} text={text} addToCart={addToCart} setCategory={setCategory} /> }/>
                    <Route path="/sklep/wlosy/pielegnacja" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/wlosy/stylizacja" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/dla-mezczyzn" exact component={ props => <Categories {...props} text={text} addToCart={addToCart} setCategory={setCategory} /> }/>
                    <Route path="/sklep/dla-mezczyzn/twarz" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/dla-mezczyzn/cialo" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/dla-mezczyzn/wlosy" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/marki" exact component={ props => <Categories {...props} text={text} addToCart={addToCart} setCategory={setCategory} /> }/>
                    <Route path="/sklep/marki/holika-holika" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/marki/krayna" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/marki/ministerstwo-dobrego-mydla" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/marki/mokosh-cosmetics" exact component={ props => <Subcategories {...props} addToCart={addToCart} category={category} /> } />
                    <Route path="/sklep/:id" render={ props => <Product {...props} cart={cart} setCart={setCart} value={value} setValue={setValue} /> }/>
                    <Route path="/regulamin" component={ Regulations } />
                    <Route path="/polityka-prywatnosci" component={ PrivatePolicy } />
                    <Route path="/o-nas" component={ Building } />
                    <Route path="/kontakt" component={ Building } />
                    <Route path="/konto" component={ Building } />
                    <Route path="/zakupy" render={ props => <CheckOut {...props} value={ value } discountActive={ discountActive } cart={ cart } /> }/>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;