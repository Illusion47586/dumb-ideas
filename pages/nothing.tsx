import { Container, Text } from "@chakra-ui/react";
import Head from "next/head";

type Props = {};

const NothingPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Nothing</title>
      </Head>
      <Container padding={10} centerContent>
        <Text>This page does nothing.</Text>
      </Container>
    </>
  );
};

export default NothingPage;
