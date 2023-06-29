import {
  Flex,
  Stack,
  HStack,
  Text,
  Divider,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../hooks/posts";
import { PostsList } from "../post/PostsList";
import { Avatar } from "./Avatar";
import { useUser } from "../../hooks/users";
import format from "date-fns/format";
import EditProfile from "./EditProfile";
import { useAuth } from "../../hooks/auth";
import { Loader } from "../layout/Loader";

export const Profile = () => {
  const { id } = useParams();
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user, isLoading: userLoading } = useUser(id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user: authUser, isLoading: authLoading } = useAuth();

  if (userLoading) return <Loader />;
  return (
    <Stack minH="100vh" maxW="100%">
      <Flex
        p={["4", "6"]}
        pos="relative"
        align="center"
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ base: "5px", lg: "50px" }}
      >
        <Avatar size="2xl" user={user} />
        <Stack>
          <Text textAlign={{ base: "center", lg: "left" }} fontSize="2xl">
            {user.username}
          </Text>
          <HStack spacing="5">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>
        {!authLoading && authUser.id === user.id && (
          <Button
            pos={{ base: "static", lg: "absolute" }}
            mb="2"
            top="6"
            right="6"
            colorScheme="blue"
            onClick={onOpen}
          >
            Change avatar
          </Button>
        )}
        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider borderColor="white" />

      {postsLoading ? (
        <Text>Posts are loading...</Text>
      ) : (
        <PostsList posts={posts} />
      )}
    </Stack>
  );
};
