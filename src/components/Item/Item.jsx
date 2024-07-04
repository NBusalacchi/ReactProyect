import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Divider,
    Image,
    Flex,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Item = ({nombre, img, id, precio}) => {
    return (
        <Card maxW="sm" m={3} bg={"#8cd444"}>
            <CardBody>
                <Image src={img} alt={nombre} w={"350px"} h={"350px"} objectFit={"cover"} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{nombre}</Heading>

                    <Text color="black" fontSize="2xl">
                        ${precio}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />

            <CardFooter w="100%" display="flex" justifyContent="space-between" alignItems="center">
                <ButtonGroup spacing="2">
                    <Button variant="ghost" colorScheme="black" _hover={{bg: "#fc9c3c", color: "white"}}>
                        <Link to={`/producto/${id}`}> Details</Link>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default Item;
