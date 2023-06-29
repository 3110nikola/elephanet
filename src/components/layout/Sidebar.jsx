import { Box, Button, Stack, Code } from "@chakra-ui/react";
import { USERS, PROTECTED } from "../../lib/routes";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../profile/Avatar";

function ActiveUser() {
  const { user, isLoading } = useAuth();
  if (isLoading) return "Loading...";
  return (
    <Stack align="center" spacing="5" my="8">
      <Avatar user={user} />
      <Code>@{user.username}</Code>
      <Button
        as={Link}
        w="full"
        colorScheme="blue"
        to={`${PROTECTED}/profile/${user.id}`}
      >
        Edit Profile
      </Button>
    </Stack>
  );
}

export default function Sidebar() {
  return (
    <Box
      p="6"
      height="100vh"
      w="100%"
      maxW="300px"
      position="sticky"
      top="16"
      display={{ base: "none", lg: "block" }}
      bgColor="rgba(255,255,255,0.6)"
      my="12"
      boxSizing="border-box"
      borderRadius="xl"
      h="100%"
    >
      <ActiveUser />
      <Box align="center">
        <Box as="ul" borderBottom="2px solid" borderColor="blue.800" />
        <Button
          variant="outline"
          colorScheme="blue"
          as={Link}
          to={USERS}
          mt="4"
          size="sm"
        >
          ALL USERS
        </Button>
      </Box>
    </Box>
  );
}
