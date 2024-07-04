import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Divider,
    Image,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import {ToastContainer, toast} from "react-toastify";

const ItemDetail = ({nombre, descripcion, id, img, precio, stock}) => {
    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} Medicamentos`);
    };

    return (
        <Card maxW="sm" m={3} key={id} bg={"#8cd444"}>
            <CardBody>
                <Image src={img} alt={nombre} w={"350px"} h={"350px"} objectFit={"cover"} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{nombre}</Heading>

                    <Text fontSize="2xl">${precio}</Text>
                    <Text> Description: {descripcion}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter w="100%" display="flex" justifyContent="space-between" alignItems="center">
                <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
            </CardFooter>
            <ToastContainer />
        </Card>
    );
};

export default ItemDetail;
