import { Box, Heading, Link, Flex, Tag, Image } from "@chakra-ui/react";
import { ContentCardType } from "../../assets/Contents";

export const Card = ({ title, genres, image }: ContentCardType) => {
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
      <Image src={image} alt={title} />
      <Box mt={4}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Flex mt={4}>
          {genres.map((genre) => (
            <Tag key={genre} size="sm" mr={2}>
              {genre}
            </Tag>
          ))}
        </Flex>
        I
      </Box>
    </Box>
  );
};
