import React from "react";
import { Link } from "react-router-dom";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { PROTECTED } from "../../lib/routes";

export const Avatar = ({ user, size = "xl", overrideAvatar = null }) => {
  if (user === null) return "Loading...";
  return (
    <ChakraAvatar
      to={`${PROTECTED}/profile/${user.id}`}
      as={Link}
      name={user.username}
      size={size}
      src={overrideAvatar || user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    ></ChakraAvatar>
  );
};
