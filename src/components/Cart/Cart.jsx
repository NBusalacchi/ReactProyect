import React, {useContext} from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
    Text,
    Link as ChakraLink,
    Center,
} from "@chakra-ui/react";
import Context from "../../context/CartContext";
import {Link} from "react-router-dom";
import {RiDeleteBin4Line, RiDeleteBin7Line} from "react-icons/ri";

const Cart = () => {
    const {cart, removeItem, clearCart, getTotalPrice} = useContext(Context);

    if (cart.length === 0) {
        return (
            <Flex direction={"column"} justify={"center"} align={"center"} mt={10}>
                <Text fontSize={"xl"}>Todavía no agregaste productos al carrito</Text>
                <ChakraLink as={Link} to="/" color={"#114F5A"} fontSize={"l"}>
                    Ver productos
                </ChakraLink>
            </Flex>
        );
    } else {
        return (
            <TableContainer w={"80%"} m={"0 auto"} mt={10}>
                <Table variant="striped">
                    <Thead>
                        <Tr>
                            <Th fontSize={"1rem"} color={"#23872B"}>
                                Producto
                            </Th>
                            <Th fontSize={"1rem"} color={"#23872B"}>
                                Cantidad
                            </Th>
                            <Th fontSize={"1rem"} color={"#23872B"}>
                                Precio
                            </Th>
                            <Th fontSize={"1rem"} color={"#23872B"}>
                                Subtotal
                            </Th>
                            <Th fontSize={"1rem"} color={"#23872B"}></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.map((prod, index) => (
                            <Tr
                                key={prod.id || index}
                                bg={index % 2 === 0 ? "#23872B" : "#fc9c3c"}
                                color={index % 2 === 0 ? "#fc9c3c" : "#23872B"}
                            >
                                <Td border={"none"}>{prod.nombre}</Td>
                                <Td border={"none"}>{prod.quantity}</Td>
                                <Td border={"none"}>{prod.precio}</Td>
                                <Td border={"none"}>{prod.precio * prod.quantity}</Td>
                                <Td border={"none"}>
                                    <Button
                                        bg={"transparent"}
                                        fontSize={"1.5rem"}
                                        color={index % 2 === 0 ? "#fc9c3c" : "#23872B"}
                                        _hover={{
                                            backgroundColor: "transparent",
                                            color: index % 2 === 0 ? "#fc9c3c" : "#23872B",
                                        }}
                                        onClick={() => removeItem(prod.id)}
                                    >
                                        <RiDeleteBin4Line />
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                <Center mt={10}>
                    <Flex bg={"#8cd444"} w={"90%"} h={"5vh"} justify={"space-around"} align={"center"}>
                        <Text fontSize={"3xl"} w={"15rem"} height={"2.5rem"} textAlign={"center"}>
                            Total: ${getTotalPrice()}
                        </Text>
                        <Button
                            onClick={() => clearCart()}
                            w={"15rem"}
                            height={"2.5rem"}
                            backgroundColor={"transparent"}
                            fontSize={"xl"}
                            _hover={{
                                backgroundColor: "#fc9c3c",
                                color: "white",
                            }}
                        >
                            <span className="iconClearCart">
                                <RiDeleteBin7Line />
                            </span>
                            Vaciar carrito
                        </Button>
                        <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
                            <ChakraLink
                                as={Link}
                                width={"15rem"}
                                height={"2.5rem"}
                                to="/checkout"
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                textAlign={"center"}
                                backgroundColor={"#8cd444"}
                                _hover={{
                                    backgroundColor: "#fc9c3c",
                                    color: "#fff",
                                    borderRadius: "10px",
                                }}
                            >
                                Finalizar compra
                            </ChakraLink>
                        </Flex>
                    </Flex>
                </Center>
            </TableContainer>
        );
    }
};

export default Cart;
