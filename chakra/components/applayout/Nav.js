import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  PseudoBox,
  Link,
  Container,
} from "@chakra-ui/react";
import { Link as NextLink } from "next";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const menulinks = [
    { href: "/about", name: "about" },
    { href: "/features", name: "features" },
    { href: "/roster", name: "roster", isLast: true },
  ];
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      // color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      <Flex align="center">
        <Text
          w="100px"
          ml={24}

          // color={["white", "white", "primary.500", "primary.500"]}
        >
          Logo
        </Text>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <DarkModeSwitch />
          {menulinks.map((curr) => {
            return (
              <Text
                key={curr.name}
                mb={{ base: curr.isLast ? 0 : 8, sm: 0 }}
                mr={{ base: 0, sm: curr.isLast ? 24 : 8 }}
                display="block"
              >
                <Link as={NextLink} href={curr.href}>
                  {curr.name}
                </Link>
              </Text>
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
