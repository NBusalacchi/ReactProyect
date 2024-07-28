import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";
import {CartContextProvider} from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
    return (
        <ChakraProvider>
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer title={"Laboratorio"} />} />
                        <Route path="/categoria/:category" element={<ItemListContainer />} />
                        <Route path="/producto/:productId" element={<ItemDetailContainer />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </ChakraProvider>
    );
}

export default App;
