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
// import { SubjectType } from "../../assets/types";

const Subject = (props) => {
  
  const CID = props[0]; //cid from ipfs
  const price=props[1]; //price of the artwork
  const isLimitedEdition = props[2];
  const isAuctioned = props[3]; //is auctioned
  const auctionEndTime = props[4]; //
  const genre = props[5]; //
  const title = props[6]; //
  const id = props[7]; 
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
            src={CID}
            roundedTop={"sm"}
            objectFit="cover"
            justifyContent="center"
            m="auto"
            h="full"
            alt={` ${title}  ${genre}`}
          />
        </Box>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {title}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {genre}
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
              <Link as={Link} href={"./contents/" + title + "/reels"}>
                View more
              </Link>
            </Text>
            <Link as={Link} href={"./contents/" + genre + "/reels"}>
              <BsArrowUpRight />
            </Link>
          </Flex>
        </HStack>
      </Box>
    </Center>
  );
};
export default Subject;
