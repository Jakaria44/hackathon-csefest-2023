import { Box, SimpleGrid, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { FeatureData } from "../../../public/database/Features";

const Feature = ({ title, description, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{description}</Text>
    </Stack>
  );
};

const FeatureStack = () => {
  return (
    <Box
      p={4}
      backgroundImage="linear-gradient(45deg, #ffffff, hsla(0, 100%, 89%, 1))"
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {FeatureData.map(({ title, description, image }) => (
          <Feature
            icon={<Image src={image} w={10} h={10} />}
            title={title}
            description={description}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default FeatureStack;
