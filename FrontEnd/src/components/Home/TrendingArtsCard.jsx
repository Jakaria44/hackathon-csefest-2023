import {
  Heading,
  useColorModeValue,
  Text,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";

export const TrendingArtsCard = ({ name, image, nickName }) => {
  return (
    <article className="card">
      <figure>
        <Link as={Link} href={"./gallery/" + nickName + "/reels"}>
          <img src={image} alt={nickName} title={nickName} />
        </Link>
      </figure>
      <Box textAlign={"center"} fontSize={"2xl"} fontFamily={"body"}>
        <Link as={Link} href={"./gallery/" + nickName + "/reels"}></Link>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {name}
        </Heading>
      </Box>
    </article>
  );
};
