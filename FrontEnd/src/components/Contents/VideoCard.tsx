import { Box, Heading, Flex, Tag } from "@chakra-ui/react";
import { CardProps } from "../../assets/types";

export const VideoCard = ({ title, image, tags }: CardProps) => {
  return (
    <Box
      maxW="sm"
      minH="350px"
      borderWidth="1px"
      borderRadius="md"
      shadow="md"
      m={2}
      p={4}
      style={{ position: "relative", paddingTop: "56.25%" }}
    >
      <iframe
        src={image}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
        }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
      <Box mt={4}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Flex mt={4}>
          {tags.map((tag) => (
            <Tag key={tag} size="sm" mr={2}>
              {tag}
            </Tag>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
