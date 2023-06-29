import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import { LOGIN, REGISTER, ABOUT, ROOT } from "../../lib/routes";

export const NavbarAlt = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDir={{ base: "column", md: "row" }}
      gap="2px"
    >
      <Link to={ROOT}>
        <Image src={Logo} w={{ base: "100px", md: "200px" }} />
      </Link>
      <Flex gap="15px">
        <ChakraLink
          as={Link}
          color="blue.800"
          textTransform="uppercase"
          fontWeight="bold"
          to={LOGIN}
        >
          Sign In
        </ChakraLink>
        <ChakraLink
          as={Link}
          color="blue.800"
          textTransform="uppercase"
          fontWeight="bold"
          to={REGISTER}
        >
          Sign Up
        </ChakraLink>
        <ChakraLink
          as={Link}
          color="blue.800"
          textTransform="uppercase"
          fontWeight="bold"
          to={ABOUT}
        >
          About
        </ChakraLink>
      </Flex>
    </Flex>
  );
};
