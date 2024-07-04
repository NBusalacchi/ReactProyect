import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getProductsById} from "../../data/asynMock";
import {Box, Flex} from "@chakra-ui/react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {MoonLoader} from "react-spinners";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProductsById(productId)
        .then((data) => setProduct(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <Box>
            {loading ? (
                <Flex justify={"center"} align={"center"} h={"50vh"}>
                    <MoonLoader color="#fc9c3c" />
                </Flex>
            ) : (
                <Flex justify={"center"} align={"center"} h={"70vh"}>
                    <ItemDetail {...product} />
                </Flex>
            )}
        </Box>
    );
};

export default ItemDetailContainer;
