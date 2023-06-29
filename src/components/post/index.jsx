import { Box, Text } from "@chakra-ui/react";
import { Header } from "./Header";
import { Actions } from "./Actions";

export const Post = ({ post }) => {
  const { text } = post;
  return (
    <Box
      textAlign="left"
      borderRadius="xl"
      bgColor="rgba(255,255,255,0.6)"
      w="100%"
    >
      <Header post={post} />
      <Box
        minH="100px"
        p="2"
        borderColor="gray.100"
        borderRadius="md"
        borderWidth="2px"
        bgColor="white"
      >
        <Text
          wordBreak="break-word"
          whiteSpace="pre-wrap"
          fontSize="md"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </Box>
      <Actions post={post} />
    </Box>
  );
};
