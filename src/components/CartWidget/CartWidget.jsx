import {Badge, Flex} from "@chakra-ui/react";
import React, {useContext} from "react";
import {IoCartOutline} from "react-icons/io5";
import Context from "../../context/CartContext";
import {Link} from "react-router-dom";

const CartWidget = () => {
    const {getQuantity} = useContext(Context);

    return (
        <Flex mr={4} color={"#F7F8FB"} fontSize={"4xl"} w={"5%"} justify={"space-between"} align={"center"}>
            <Link to="/cart">
                <IoCartOutline size={"32px"} className="cartIcon" />
            </Link>
            <Flex justify={"center"} align={"center"} h={"50%"} w={"50%"}>
                <Badge borderRadius={"50%"} color={"#fc9c3c"} fontSize={"md"}>
                    {getQuantity()}
                </Badge>
            </Flex>
        </Flex>
    );
};

export default CartWidget;
