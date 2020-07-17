import React from 'react';
import Building from "./components/Building";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Shop from "./components/Shop";
import Product from "./components/Product";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ Main } />
                    <Route path="/sklep" exact component={ Shop } />
                    <Route path="/sklep/:id" component={ Product } />
                    <Route path="/regulamin" component={ Building } />
                    <Route path="/polityka-prywatnosci" component={ Building } />
                    <Route path="/o-nas" component={ Building } />
                    <Route path="/kontakt" component={ Building } />
                    <Route path="/konto" component={ Building } />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;