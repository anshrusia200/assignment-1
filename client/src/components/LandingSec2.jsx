import { Wrap, WrapItem, Image, Text } from "@chakra-ui/react";
import { useRef } from "react";

export const LandingSec2 = ({ sponsors }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <>
      <Wrap
        spacing={4}
        justify="center"
        w={{ base: "100%", md: "75%" }}
        m={"0 auto"}
        my={{ base: 5, md: 20 }}
        minWidth={"300px"}
        overflowX={"auto"}
      >
        {sponsors.map((sponsor, index) => (
          <WrapItem key={index}>
            <Image
              src={sponsor.link}
              alt="Sponsor Logo"
              boxSize={"40px"}
              m={6}
              w={"100px"}
              objectFit="contain"
            />
          </WrapItem>
        ))}
      </Wrap>
      <Text fontSize="20px" align={"center"} mb={5}>
        Trusted by the world’s most ambitious teams.
      </Text>
    </>
  );
};
