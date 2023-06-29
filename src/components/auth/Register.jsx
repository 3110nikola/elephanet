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
import { DASHBOARD, LOGIN, ROOT } from "../../lib/routes";
import { useRegister } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../../utils/formValidate";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Footer } from "../layout/Footer";
import { Logo } from "../../assets";

export const Register = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  if (user) navigate(DASHBOARD);

  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
  }

  return (
    <>
      <Center w="100%" h="100vh">
        <Box mx="1" p="9" maxW="md" borderWidth="1px" borderRadius="lg">
          <RouterLink to={ROOT}>
            <Image src={Logo} mx="auto" width="250px" />
          </RouterLink>
          <Heading mb="4" size="lg" textAlign="center">
            Sign Up!
          </Heading>
          <form onSubmit={handleSubmit(handleRegister)}>
            <FormControl py="2" isInvalid={errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="username"
                {...register("username", usernameValidate)}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
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
              loadingText="Signing Up"
            >
              Register
            </Button>
          </form>
          <Text fontSize="xlg" align="center" mt="6">
            Already have an account?{" "}
            <Link
              as={RouterLink}
              to={LOGIN}
              color="blue.600"
              fontWeight="medium"
              _hover={{ textDecoration: "underline" }}
            >
              Log In
            </Link>{" "}
            instead!
          </Text>
        </Box>
      </Center>
      <Footer />
    </>
  );
};
