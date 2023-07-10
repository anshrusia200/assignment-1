import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
export const LandingSec1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };
  return (
    <Flex
      bg="transparent"
      align={"center"}
      direction={{ base: "column", md: "row" }}
      w={"75%"}
      m={"0 auto"}
      justify={"space-between"}
      mt={{ base: "0px", md: "70px" }}
    >
      <Box flex="1" p={8} order={{ base: 2, md: 1 }}>
        <VStack spacing={4} align={"left"}>
          <Text
            fontSize={"5xl"}
            bgGradient="linear(to-l, #00F0FF, #5200FF, #FF2DF7)"
            bgClip="text"
            fontWeight="medium"
            textAlign={{ base: "center", md: "left" }}
            // h={{ base: "50px", md: "55px" }}
          >
            AI Marketing
          </Text>
          <Heading
            fontWeight="normal"
            size={"2xl"}
            textAlign={{ base: "center", md: "left" }}
          >
            Optimized Reach.
          </Heading>
          <Text textAlign={{ base: "center", md: "left" }}>
            Our vision is to revolutionize the way brands and advertisers
            target, reach.
          </Text>
          <Box
            w="full"
            h="1px"
            bg="gray.200"
            my={{ base: 2, md: 7 }}
            bgGradient="linear(to-l, #00F0FF, #5200FF, #FF2DF7)"
          />
          <Link to="/users">
            <Button
              position="relative"
              px={8}
              border={1}
              borderStyle="solid"
              borderColor="transparent"
              backgroundClip={"padding-box"}
              bg="#000"
              rounded={"full"}
              rightIcon={<ArrowForwardIcon />}
              w={{ base: "full", md: "fit-content" }}
              _before={{
                content: "''",
                position: "absolute",
                inset: 0,
                zIndex: -1,
                background:
                  "linear-gradient(to right, var(--chakra-colors-pink-500), var(--chakra-colors-purple-500), var(--chakra-colors-cyan-500))",
                rounded: "full",
                margin: "-3px",
              }}
            >
              Get Started
            </Button>
          </Link>
        </VStack>
      </Box>
      <Box flex="1" order={{ base: 1, md: 2 }}>
        <Center h="full">
          <Image
            src="https://res.cloudinary.com/appcloudansh/image/upload/v1688996542/globe_umjsrb.png"
            alt="Image"
            w={{ base: "400px", md: "400px" }}
          />
        </Center>
      </Box>
    </Flex>
  );
};
