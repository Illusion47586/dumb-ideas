import {
  Button,
  Container,
  Heading,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Container padding="10" centerContent>
      <Head>
        <title>Dumb Ideas</title>
      </Head>
      <VStack spacing="5" textAlign="center">
        <Heading>Welcome to Dumb Ideas!</Heading>
        <Text>
          These are just some of my dumb ideas. Nice and simple to prank around!
          Use responsibly.
        </Text>
        <Table variant="simple" colorScheme="teal">
          <TableCaption>All I have is this right now.</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>What it does</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Busy me</Td>
              <Td>
                Just a random blank screen with loading cursor, has many uses👀.
              </Td>
              <Td>
                <NextLink href="/busy" passHref>
                  <Button colorScheme="teal" size="sm">
                    Link
                  </Button>
                </NextLink>
              </Td>
            </Tr>
            <Tr>
              <Td>Screen Check</Td>
              <Td>A tool to check whether your screen is working.</Td>
              <Td>
                <NextLink href="/screen_check" passHref>
                  <Button colorScheme="teal" size="sm">
                    Link
                  </Button>
                </NextLink>
              </Td>
            </Tr>
            <Tr>
              <Td>Nothing</Td>
              <Td>This page does nothing</Td>
              <Td>
                <NextLink href="/nothing" passHref>
                  <Button colorScheme="teal" size="sm">
                    Link
                  </Button>
                </NextLink>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Home;
