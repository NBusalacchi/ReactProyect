import React, {useState} from "react";
import useCounter from "../../hooks/useCounter";
import {Button} from "@chakra-ui/react";

const ItemCount = ({initialValue, stock, onAdd}) => {
    const {count, incrementar, decrementar} = useCounter(initialValue, stock);

    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span>{count}</span>
            <button onClick={incrementar}>+</button>
            <Button
                variant="ghost"
                colorScheme="black"
                _hover={{bg: "#fc9c3c", color: "white"}}
                onClick={() => onAdd(count)}
            >
                Cart🛒
            </Button>
        </div>
    );
};
export default ItemCount;
