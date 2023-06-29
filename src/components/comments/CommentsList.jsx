import { useComments } from "../../hooks/comments";
import Comment from "./Comment";
import { Box } from "@chakra-ui/react";

export default function CommentsList({ post }) {
  const { id } = post;
  const { comments, isLoading } = useComments(id);

  if (isLoading) return "Loading...";

  return (
    <Box minH="100vh">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}
