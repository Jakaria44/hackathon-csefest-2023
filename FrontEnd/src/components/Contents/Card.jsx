import { Box, Heading, Link, Flex, Tag, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export const Card = (props) => {
  const navigate = useNavigate();

  const {CID, price,isLimitedEdition, isAuctioned,auctionEndTime,genre,title ,id} = props;

  useEffect(()=>{
    console.log("price");
  }, []);
  return (
    <Box
      maxW="414px"
      minH="750px"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      shadow="md"
      m={2}
      p={4}
    >
      <Image src={CID} alt={title} />
      <Box mt={4}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Flex mt={4}>
          price: ${price}
        </Flex>
        <Flex mt={4}>
          {genre}
        </Flex><Flex mt={4}>
          {isLimitedEdition && <p>LimitedEdition</p>}
        </Flex>
        I<Button onClick={()=>{
           navigate(`/details/${id}`);
        }} > See Details</Button>
      </Box>
    </Box>
  );
};
