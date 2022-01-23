import {
  Button,
  Container,
  Heading,
  Link,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <Container padding="10" centerContent>
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
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Home;
