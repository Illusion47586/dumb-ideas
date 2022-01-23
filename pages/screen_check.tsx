import {
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

type Props = {};

const BusyPage = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Screen Check</title>
      </Head>
      <Container padding={10} centerContent>
        <VStack spacing={5}>
          <Heading>Screen Check</Heading>
          <Text color="orange">
            This test is not 100% effective, but well... it works.
          </Text>
          <Heading as="h2" size="lg">
            Please click the following screen if you can see this text.
          </Heading>
          <Button colorScheme="teal" onClick={onOpen}>
            Click me!
          </Button>
        </VStack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Partyyyyy🎉🎉🎊🎊</ModalHeader>
          <ModalCloseButton autoFocus={false} />
          <ModalBody>
            <Text>Your screen is perfectly working!!!!!!</Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BusyPage;
