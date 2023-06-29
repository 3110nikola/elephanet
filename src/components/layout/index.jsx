import { React, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LOGIN } from "../../lib/routes";
import { useAuth } from "../../hooks/auth";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Flex, Box } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Loader } from "./Loader";

export const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return <Loader />;

  return (
    <Box bg="linear-gradient(90deg, rgba(208,237,255,1) 0%, rgba(44,97,142,1) 85%, rgba(42,100,130,1) 100%)">
      <Navbar />
      <Flex pt="20" pb="12" mx="auto" w="full" maxW="1200px" gap="40px" px="5">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
      <Footer />
    </Box>
  );
};
