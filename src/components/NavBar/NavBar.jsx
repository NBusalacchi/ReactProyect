import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";
import {Menu, MenuButton, MenuList, MenuItem, Heading, Button, Flex, Image} from "@chakra-ui/react";
import {FaAngleDown} from "react-icons/fa";
import Logo from "../../assets/farmacia.png";

const NavBar = () => {
    return (
        <Flex className="navBar" justify={"space-between"} align={"center"} height={"10vh"} w={"100%"} bg={"#23872B"}>
            <Heading ml={4}>
                <Link to="/">
                    <Image className="logo" w={"128px"} h={"64px"} src={Logo} alt="Logo" />
                </Link>
            </Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaAngleDown />}>
                    Products
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to="categoria/Cardiometabolic">Cardiometabolic</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="categoria/Antibiotics">Antibiotics</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="categoria/Gastroenterology">Gastroenterology</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="categoria/Psychotropic">Psychotropic</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="categoria/Respiratory&Anti-staminic">Respiratory&Anti-staminic</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <CartWidget />
        </Flex>
    );
};

export default NavBar;
