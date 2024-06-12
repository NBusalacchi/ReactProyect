import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Flex, Menu, MenuButton, MenuList, MenuItem, Heading, Button, Image, Box} from "@chakra-ui/react";
import {FaArrowDown} from "react-icons/fa";

const NavBar = () => {
    const ImageProp = {
        imageUrl:
            "https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI",
    };
    return (
        <Flex justify={"space-around"} align={"center"} backgroundColor={"blue"}>
            <Heading>
                <Box width="64px" height="64px">
                    <Image src={ImageProp.imageUrl} boxSize="64px" />
                </Box>
            </Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaArrowDown />}>
                    Market
                </MenuButton>
                <MenuList>
                    <MenuItem>New</MenuItem>
                    <MenuItem>Body</MenuItem>
                    <MenuItem>Shoes</MenuItem>
                    <MenuItem>Accesories</MenuItem>
                    <MenuItem>Premium</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </Flex>
    );
};

export default NavBar;
