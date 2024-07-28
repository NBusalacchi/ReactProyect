import {Box, Flex, Heading} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {MoonLoader} from "react-spinners";
import {db} from "../../config/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = ({title}) => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const coleccion = collection(db, "productos");

            const queryRef = !category ? coleccion : query(coleccion, where("categoria", "==", category));

            const response = await getDocs(queryRef);
            const products = response.docs.map((doc) => {
                const newItem = {
                    ...doc.data(),
                    id: doc.id,
                };
                return newItem;
            });
            setProductos(products);
            setLoading(false);
        };
        getData();
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
