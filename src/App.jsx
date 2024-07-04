import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer title={"Laboratorio"} />} />
                    <Route path="/categoria/:category" element={<ItemListContainer />} />
                    <Route path="/producto/:productId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
