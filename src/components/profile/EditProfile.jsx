import {
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "./Avatar";
import { useUpdateAvatar } from "../../hooks/users";

export default function EditProfile({ isOpen, onClose }) {
  const { user, isLoading: authLoading } = useAuth();
  const {
    setFile,
    updateAvatar,
    isLoading: fileLoading,
    fileURL,
  } = useUpdateAvatar(user?.id);
  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  if (authLoading) return "Loading...";
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="fit-content" maxW="90%">
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton onClick={() => setFile(null)} />
        <ModalBody>
          <Flex flexDir="column" alignItems="center">
            <Avatar user={user} overrideAvatar={fileURL} />
            <FormControl py="4">
              <FormLabel htmlFor="picture">Change avatar</FormLabel>
              <input type="file" accept="image/*" onChange={handleChange} />
            </FormControl>
          </Flex>
          <Button
            loadingText="Uploading..."
            w="full"
            my="6"
            colorScheme="blue"
            onClick={updateAvatar}
            isLoading={fileLoading}
          >
            Save
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
