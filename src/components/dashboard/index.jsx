import { Box, HStack, Heading, Button, Textarea } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { useAddPost } from "../../hooks/posts";
import { useAuth } from "../../hooks/auth";
import { PostsList } from "../post/PostsList";
import { usePosts } from "../../hooks/posts";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }
  return (
    <Box my="4" p="4" bgColor="rgba(255,255,255,0.6)" borderRadius="xl">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Button
            colorScheme="blue"
            size="md"
            type="submit"
            isLoading={addingPost}
            loadingText="Loading"
          >
            Post
          </Button>
        </HStack>
        <Textarea
          as={TextareaAutosize}
          resize="none"
          mt="5"
          placeholder="Create a new post..."
          bgColor="white"
          {...register("text", { required: true })}
        />
      </form>
    </Box>
  );
}

export const Dashboard = () => {
  const { posts, isLoading } = usePosts();
  if (isLoading) return "Loading posts...";
  return (
    <Box minH="100vh">
      <NewPost />
      <PostsList posts={posts} />
    </Box>
  );
};
