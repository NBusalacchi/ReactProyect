import {Box, Flex, Heading} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {getProducts, getProductsByCategory} from "../../data/asynMock.jsx";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {MoonLoader} from "react-spinners";

const ItemListContainer = ({title}) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dataCategory = category ? getProductsByCategory(category) : getProducts();
        setLoading(true);
        dataCategory
        .then((prod) => setProductos(prod))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [category]);

    return (
        <Box>
            {loading ? (
                <Flex justify={"center"} align={"center"} h={"50vh"}>
                    <MoonLoader color="#fc9c3c" />
                </Flex>
            ) : (
                <Flex direction={"column"} justify={"center"} align={"center"}>
                    <Heading mt={5}>{title}</Heading>
                    <ItemList productos={productos} />
                </Flex>
            )}
        </Box>
    );
};

export default ItemListContainer;
