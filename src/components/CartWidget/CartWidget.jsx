import {Box} from "@chakra-ui/react";
import React from "react";
import {IoCartOutline} from "react-icons/io5";

const CartWidget = () => {
    return (
        <Box mr={16} p={5}>
            <IoCartOutline size={"32px"} />
        </Box>
    );
};

export default CartWidget;
