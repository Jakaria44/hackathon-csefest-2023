// import User from "./User";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./Navlink";
import {ConnectWallet} from "@thirdweb-dev/react";

const Links = ["Home", "Gallery", "Upload"];

// @ts-ignore
const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={"black"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  width="50px"
                  height="50px"
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} page={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {/*<User />*/}
          <ConnectWallet
              dropdownPosition={{
                side: "right", // "top" | "bottom" | "left" | "right";
                align: "center", // "start" | "center" | "end";
              }}
              theme="dark"
              btnTitle="Connect Wallet"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} page={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
