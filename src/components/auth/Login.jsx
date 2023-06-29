import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { DASHBOARD, REGISTER, ROOT } from "../../lib/routes";
import { useLogin } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utils/formValidate";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets";
import { Footer } from "../layout/Footer";

export const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (user) navigate(DASHBOARD);

  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function handleLogin(data) {
    const succeeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
    if (succeeded) reset();
  }
  return (
    <>
      <Center w="100%" h="100vh">
        <Box mx="2" p="9" maxW="md" borderWidth="1px" borderRadius="lg">
          <RouterLink to={ROOT}>
            <Image src={Logo} mx="auto" width="250px" />
          </RouterLink>
          <Heading mb="4" size="lg" textAlign="center">
            Sign In!
          </Heading>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormControl py="2" isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="user@email.com"
                {...register("email", emailValidate)}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl py="2" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Must have at least 6 characters"
                {...register("password", passwordValidate)}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isLoading}
              mt="4"
              type="submit"
              colorScheme="blue"
              size="md"
              w="full"
              loadingText="Logging In"
            >
              Log In
            </Button>
          </form>
          <Text fontSize="xlg" align="center" mt="6">
            Don't have an account?{" "}
            <Link
              as={RouterLink}
              to={REGISTER}
              color="blue.600"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Register
            </Link>{" "}
            instead!
          </Text>
        </Box>
      </Center>
      <Footer />
    </>
  );
};
