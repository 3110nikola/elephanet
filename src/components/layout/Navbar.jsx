import { Button, Flex, Link, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { DASHBOARD } from "../../lib/routes";
import { useLogout } from "../../hooks/auth";
import { LogoWhite } from "../../assets";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { USERS } from "../../lib/routes";
import { PROTECTED } from "../../lib/routes";
import { useAuth } from "../../hooks/auth";

export default function Navbar() {
  const { user, isLoading: authLoading } = useAuth();
  const { logout, isLoading } = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      height="16"
      zIndex="3"
      justify="center"
      bg="blue.800"
      py="10"
    >
      <Flex
        px="4"
        w="full"
        align="center"
        justifyContent="space-between"
        maxW="1200px"
      >
        <Link color="teal" as={RouterLink} fontWeight="bold" to={DASHBOARD}>
          <Image src={LogoWhite} width={{ base: "150px", md: "200px" }} />
        </Link>
        <Flex gap="5px">
          <Button
            ml="auto"
            colorScheme="blue"
            size="sm"
            isLoading={authLoading}
            as={RouterLink}
            to={`${PROTECTED}/profile/${user?.id}`}
            display={{ base: "flex", lg: "none" }}
          >
            <CgProfile size={16} />
          </Button>
          <Button
            ml="auto"
            colorScheme="blue"
            size="sm"
            to={USERS}
            as={RouterLink}
            display={{ base: "flex", lg: "none" }}
          >
            <HiUserGroup size={16} />
          </Button>
          <Button
            ml="auto"
            colorScheme="blue"
            size="sm"
            onClick={logout}
            isLoading={isLoading}
          >
            <MdLogout size={16} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
