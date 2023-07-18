import { Box, Heading, Link, Flex, Tag, Image, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export const Card = (props) => {
  const navigate = useNavigate();
  
  const CID = props[0]; //cid from ipfs
  const price=parseInt(props[1]._hex.toString(), 16); //price of the artwork
  const isLimitedEdition = props[2];
  const isAuctioned = props[3]; //is auctioned
  const auctionEndTime = parseInt(props[4]._hex.toString(), 16); //
  const genre = props[5]; //
  const title = props[6]; //
  const id = parseInt(props[7]._hex.toString(), 16);

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
        </Flex>
        I<Button onClick={()=>{
           navigate(`/details/${id}`);
        }} > See Details</Button>
      </Box>
    </Box>
  );
};
