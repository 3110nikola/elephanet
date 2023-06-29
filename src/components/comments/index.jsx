import { Box } from "@chakra-ui/react";
import { Post } from "../post";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/posts";
import { NewComment } from "./NewComment";
import CommentsList from "./CommentsList";

export const Comments = () => {
  const { id } = useParams();
  const { post, isLoading } = usePost(id);

  if (isLoading) return "Loading...";
  return (
    <Box pt="50">
      <Post post={post} />
      <NewComment post={post} />
      <CommentsList post={post} />
    </Box>
  );
};
