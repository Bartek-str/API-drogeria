import React from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Shop from "./components/Shop";

function App() {
    return (
        <div className="App">
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/sklep" component={Shop} />
                    </Switch>
                    <Footer />
                </>
            </Router>
        </div>
    );
}

export default App;