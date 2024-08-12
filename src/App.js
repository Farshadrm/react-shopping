import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Home from "./Pages/Home";
import Products from "./Pages/products";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={Store}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
