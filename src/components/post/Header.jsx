import { Flex, Box, Text } from "@chakra-ui/react";
import { Avatar } from "../profile/Avatar";
import { useUser } from "../../hooks/users";
import { formatDistanceToNow } from "date-fns";
import { UsernameButton } from "../profile/UsernameButton";

export const Header = ({ post }) => {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);
  if (isLoading) return "Loading...";
  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="blue.100"
      p="3"
      borderTopRadius="xl"
    >
      <Avatar user={user} size="md" />
      <Box ml="4">
        <UsernameButton user={user} />
        <Text fontSize="sm">{formatDistanceToNow(date)} ago</Text>
      </Box>
    </Flex>
  );
};
