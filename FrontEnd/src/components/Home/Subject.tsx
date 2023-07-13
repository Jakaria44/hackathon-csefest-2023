import {
  Box,
  Heading,
  Text,
  Img,
  Flex,
  Center,
  useColorModeValue,
  HStack,
  Link,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { SubjectType } from "../../assets/types";

const Subject = ({ name, image, description }: SubjectType) => {
  return (
    <Center py={6}>
      <Box
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Img
            src={image}
            roundedTop={"sm"}
            objectFit="cover"
            justifyContent="center"
            m="auto"
            h="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {name}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {description}
          </Text>
        </Box>
        <HStack borderTop={"1px"} color="black">
          <Flex
            p={4}
            alignItems="center"
            justifyContent={"space-between"}
            roundedBottom={"sm"}
            cursor={"pointer"}
            w="full"
          >
            <Text fontSize={"md"} fontWeight={"semibold"}>
              <Link as={Link} href={"./contents/" + name + "/reels"}>
                View more
              </Link>
            </Text>
            <Link as={Link} href={"./contents/" + name + "/reels"}>
              <BsArrowUpRight />
            </Link>
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};
export default Subject;
