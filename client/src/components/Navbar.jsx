import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Input,
  Collapse,
  Icon,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Link as MyLink } from "react-router-dom";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"#000"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          position={"absolute"}
          right={5}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
          ml={{ base: "30%", md: "0" }}
        >
          <MyLink to="/" style={{ width: "70px" }}>
            <Image
              src="https://res.cloudinary.com/appcloudansh/image/upload/v1688991898/logo_fanrrq.png"
              w={"70px"}
              h={"20px"}
            />
          </MyLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <InputGroup
            w={"fit-content"}
            display={{ base: "none", md: "flex" }}
            flexWrap={"wrap"}
          >
            <InputRightElement pointerEvents="none">
              <Box
                px={2}
                border={1}
                borderStyle={"solid"}
                borderColor={"gray.400"}
                rounded={"md"}
              >
                /
              </Box>
            </InputRightElement>
            <Input
              type="text"
              variant="filled"
              placeholder="Search DOML"
              bg={"#515868"}
              color={"#B4B5B8"}
            />
          </InputGroup>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
            display={{ base: "none", md: "inline-flex" }}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"transparent"}
            variant="outline"
            colorScheme="white"
            href={"#"}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <InputGroup w={"100%"} my={5}>
        <InputRightElement pointerEvents="none">
          <Box
            px={2}
            border={1}
            borderStyle={"solid"}
            borderColor={"gray.400"}
            rounded={"md"}
          >
            /
          </Box>
        </InputRightElement>
        <Input type="text" variant="filled" placeholder="Search DOML" />
      </InputGroup>
      <Flex w={"70%"} justify={"start"} mt={5}>
        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={400}
          variant={"link"}
          href={"#"}
          mr={5}
          // display={{ base: "none", md: "inline-flex" }}
        >
          Sign In
        </Button>
        <Button
          as={"a"}
          // display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          href={"#"}
          bg={"transparent"}
          variant="outline"
          colorScheme="white"
        >
          Sign Up
        </Button>
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Product ",
    children: [
      {
        label: "App",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "Media",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Team",
    href: "#",
  },
  {
    label: "Enterprise",
    href: "#",
  },
  {
    label: "Explore",
    children: [
      {
        label: "App",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "Media",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Marketplace",
    href: "#",
  },
  {
    label: "Pricing",
    children: [
      {
        label: "Plans",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "Contact",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
];
