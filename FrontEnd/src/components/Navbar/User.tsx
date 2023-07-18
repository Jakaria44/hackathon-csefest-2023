import {
  Flex,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SettingsIcon, BellIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import { LoggedInContext, LoggedInContextType } from "../../App";
import { FiShoppingCart } from "react-icons/fi";
import { RiWallet3Line } from "react-icons/ri";
import { ConnectWallet } from "@thirdweb-dev/react";

const User = () => {
  const navigate = useNavigate();
  const { loggedIn, updateLoginValue } =
    useContext(LoggedInContext);
  const handleLogin = () => {
    if (loggedIn) {
      updateLoginValue("logout");
    } else {
      navigate("/login");
    }
  };
  return (
    <Flex alignItems={"center"}>
      {loggedIn ? (
        <>
          <Button
            width="100%"
            backgroundColor="#045de9"
            backgroundImage="linear-gradient(315deg, #045de9 0%, #09c6f9 74%)"
            leftIcon={<FiShoppingCart />}
            size="md"
            mr={"10px"}
          >
            Add to Cart
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://media.licdn.com/dms/image/D5603AQFB9pLX5mytvQ/profile-displayphoto-shrink_800_800/0/1680773468211?e=1694044800&v=beta&t=7CvVCSPL_g4OSGYUjbXp8cRo2IfaWSAs2Zpa3IGXPnY"
                }
              />
            </MenuButton>
            <MenuList pb={0}>
              <MenuItem>
                <BellIcon padding="1px" />
                Notifications
              </MenuItem>
              <MenuItem>
                <SettingsIcon padding="1px" />
                Settings
              </MenuItem>
              <MenuDivider></MenuDivider>
            </MenuList>
          </Menu>
        </>
      ) : (
        <ConnectWallet
          dropdownPosition={{
            side: "right", // "top" | "bottom" | "left" | "right";
            align: "center", // "start" | "center" | "end";
          }}
          theme="dark"
          btnTitle="Connect Wallet"
        />
      )}
    </Flex>
  );
};
export default User;
