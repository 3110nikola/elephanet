import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Post } from ".";

export const PostsList = ({ posts }) => {
  return (
    <Flex align="center" flexDir="column" gap="15px">
      {!posts || posts.length === 0 ? (
        <Text fontSize="xl" textAlign="center">
          No posts yet... Feeling a litte lonely here
        </Text>
      ) : (
        posts?.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </Flex>
  );
};
