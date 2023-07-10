import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Stack,
  Icon,
  useToast,
  Spinner,
  ScaleFade,
} from "@chakra-ui/react";
import { MdPerson, MdDateRange, MdAccessibility } from "react-icons/md";
import { fetchUsers } from "../api/users";

const UserCard = ({ user }) => {
  return (
    <ScaleFade initialScale={0.9} in>
      <Box
        p={4}
        w={"300px"}
        bg="gray.600"
        boxShadow="md"
        rounded="md"
        borderWidth={1}
        borderColor="gray.200"
        textAlign="center"
      >
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          boxSize="150px"
          objectFit="cover"
          rounded="full"
          mx="auto"
          mb={4}
        />

        <Stack spacing={2}>
          <Flex align="center">
            <Icon as={MdPerson} boxSize={4} mr={1} />
            <Text>{`${user.firstName} ${user.lastName}`}</Text>
          </Flex>

          <Flex align="center">
            <Icon as={MdDateRange} boxSize={4} mr={1} />
            <Text>{user.birthDate}</Text>
          </Flex>

          <Flex align="center">
            <Icon as={MdAccessibility} boxSize={4} mr={1} />
            <Text>{`${user.age} years old, ${user.gender}`}</Text>
          </Flex>
        </Stack>
      </Box>
    </ScaleFade>
  );
};

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
      setLoading(false);
    });
    console.log(users);
  }, []);

  return (
    <Flex
      maxW="90%"
      mx="auto"
      my={4}
      wrap="wrap"
      justify="center"
      rowGap={2}
      columnGap={2}
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        ""
      )}
      {users.map((user) => (
        <Box key={user.id} m={2}>
          <UserCard user={user} />
        </Box>
      ))}
    </Flex>
  );
};
