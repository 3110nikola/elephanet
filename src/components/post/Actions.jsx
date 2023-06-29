import { Flex, IconButton } from "@chakra-ui/react";
import { RiHeartLine, RiHeartFill, RiDeleteBin4Line } from "react-icons/ri";
import { MdOutlineModeComment, MdModeComment } from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../lib/routes";
import { useToggleLike, useDeletePost } from "../../hooks/posts";
import { useComments } from "../../hooks/comments";

export const Actions = ({ post }) => {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();
  const isLiked = likes.includes(user?.id);
  const { toggleLike, isLoading: likeLoading } = useToggleLike({
    id,
    isLiked,
    uid: user?.id,
  });
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    <Flex p="2" gap="5" alignItems="center">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="pink"
          variant="ghost"
          icon={isLiked ? <RiHeartFill /> : <RiHeartLine />}
          isRound
        />
        {likes.length}
      </Flex>
      <Flex alignItems="center">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          size="md"
          colorScheme="blue"
          variant="ghost"
          icon={
            comments?.length === 0 ? (
              <MdOutlineModeComment />
            ) : (
              <MdModeComment />
            )
          }
          isRound
        />
        {comments?.length}
      </Flex>
      {!userLoading && user.id === uid && (
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={<RiDeleteBin4Line />}
          isRound
        />
      )}
    </Flex>
  );
};
