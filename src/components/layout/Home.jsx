import {
  Center,
  Flex,
  Heading,
  Image,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Elephant } from "../../assets";
import { Background } from "../../assets";
import { NavbarAlt } from "./NavbarAlt";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { DASHBOARD } from "../../lib/routes";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (user) navigate(DASHBOARD);
  return (
    <Center
      w="100%"
      h="100vh"
      bgImage={Background}
      bgAttachment="fixed"
      bgSize="cover"
      flexDir="column"
    >
      <Box maxW="900px" m="9">
        <NavbarAlt />
        <Flex
          alignItems="center"
          gap="10px"
          flexDir={{ base: "column", md: "row" }}
          p="5"
        >
          <Image src={Elephant} width={{ base: "250px", md: "500px" }} />
          <Flex flexDir="column" gap="20px">
            <Heading
              fontSize={{ base: "20px", md: "40px" }}
              textAlign={{ base: "center", md: "left" }}
            >
              Connect with the friends and the world around you on Elephanet
            </Heading>
            <Text textAlign={{ base: "center", md: "left" }}>
              Connect with like-minded people and express yourself in short,
              powerful bursts of creativity. Join us today!
            </Text>
            <Button
              colorScheme="blue"
              alignSelf={{ base: "center", md: "start" }}
              as={Link}
              to="/login"
            >
              Get Started!
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
};
