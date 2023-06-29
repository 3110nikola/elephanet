import { Box, Flex, Heading, Image, Text, Grid } from "@chakra-ui/react";
import { NavbarAlt } from "./NavbarAlt";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Box px="10" py="4" maxW="1200px" w="100%" pos="fixed" bg="white">
        <NavbarAlt />
      </Box>
      <Flex flexDir="column" gap="30px" maxW="1200px" w="100%" mt="150px">
        <Heading textAlign="center">Bringing people closer every day</Heading>
        <Image w="80%" mx="auto" src="about-banner.jpg" />
      </Flex>
      <Flex
        flexDir="column"
        alignItems="center"
        gap="10px"
        maxW="1200px"
        my="10"
        mx="5"
      >
        <Flex alignItems="center">
          <Image src="icon.png" width="100px" />
          <Heading>Elephanet</Heading>
        </Flex>
        <Text
          fontSize={{ base: "20px", md: "28px" }}
          textAlign="center"
          fontWeight="bold"
        >
          Elephanet builds technologies that help people connect, find
          communities and grow businesses.
        </Text>
      </Flex>
      <Flex flexDir="column" alignItems="center" maxW="1200px" my="10" mx="5">
        <Heading textAlign="center" my="10">
          Keeping people safe and making a positive impact
        </Heading>
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gridAutoRows="1fr"
        >
          <Box bgColor="blue.800" color="white" p="5">
            <Flex
              px="10"
              flexDir="column"
              justifyContent="center"
              boxSizing="border-box"
              h="100%"
            >
              <Text fontSize="28px" fontWeight="bold">
                Prioritizing privacy and security
              </Text>
              <Text>
                We’re building social experiences that keep your account secure
                and enable you to make choices around how your data is used.
              </Text>
            </Flex>
          </Box>
          <Image src="privacy.jpg" />
        </Grid>
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gridAutoRows="1fr"
        >
          <Box bgColor="blue.800" color="white" p="5">
            <Flex
              px="10"
              flexDir="column"
              justifyContent="center"
              boxSizing="border-box"
              h="100%"
            >
              <Text fontSize="28px" fontWeight="bold">
                Safety and Expression
              </Text>
              <Text>
                We remove violating content and reduce misinformation to help
                you connect and share safely.
              </Text>
            </Flex>
          </Box>
          <Image order={{ base: "0", md: "-1" }} src="safety.jpg" />
        </Grid>
      </Flex>
      <Footer />
    </Flex>
  );
};
