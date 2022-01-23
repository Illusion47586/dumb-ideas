import {
  Box,
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { MouseEventHandler, useRef } from "react";
import { useEffectOnce, useLocalStorage, useSessionStorage } from "react-use";

type Props = {};

const BusyPage = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useLocalStorage("show_busy_dialog", "true");
  const [sessionValue, setSessionValue] = useSessionStorage(
    "show_busy_dialog",
    "true"
  );

  const enterFullScreen = () => {
    if (
      ref.current &&
      !document.fullscreenElement &&
      document.fullscreenEnabled
    )
      ref.current.requestFullscreen().catch((err) => {
        console.error(err);
      });
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
  };

  const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    exitFullScreen();
  };

  useEffectOnce(() => {
    if (value === "true" && sessionValue === "true") onOpen();
  });

  const neverShowAgain = () => {
    setValue("false");
  };

  const hide = () => {
    setSessionValue("false");
    onClose();
  };

  return (
    <>
      <Head>
        <title>Busy Me</title>
      </Head>
      <Box
        ref={ref}
        //   className={styles.page}
        onMouseDown={enterFullScreen}
        onContextMenu={clickHandler}
        cursor="progress"
        height="100vh"
        width="100vw"
        bgColor="black"
      ></Box>
      <Modal isOpen={isOpen} onClose={hide}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Guide</ModalHeader>
          <ModalCloseButton autoFocus={false} />
          <ModalBody>
            <UnorderedList>
              <ListItem>
                Left click anywhere on screen to enter full screen.
              </ListItem>
              <ListItem>
                Right click anywhere on screen to enter full screen.
              </ListItem>
            </UnorderedList>
            <br />
            <Text>
              Please use this wisely, do not fool others, and yourself.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={hide}>
              Close
            </Button>
            <Button variant="ghost" onClick={neverShowAgain}>
              Don&apos;t show this again.
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BusyPage;
