import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SocialButton } from "./SocialButton";

const Footer = () => {
  return (
    <Box
      backgroundImage="linear-gradient(45deg, #b2ecff,#d3edff)"
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Flex align="center" justify="space-between">
          <Image src="/images/logo.png" h="80px" />
          <Text fontWeight="bold"> Minute Prep</Text>
        </Flex>
        <Text>© 2023 Minute Prep. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/minuteprep/"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"YouTube"}
            href={"https://www.youtube.com/@MinutePrep"}
          >
            <FaYoutube />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/minute_prep/?hl=en"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
