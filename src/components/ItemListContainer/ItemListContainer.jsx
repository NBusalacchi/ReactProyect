import React from "react";
import {Flex} from "@chakra-ui/react";

const ItemListContainer = ({title}) => {
    return (
        <Flex justify={"center"} bgColor={"blue"}>
            <div>
                <h1>{title}</h1>
            </div>
        </Flex>
    );
};

export default ItemListContainer;
