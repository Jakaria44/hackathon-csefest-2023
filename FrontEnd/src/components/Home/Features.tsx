import { Box, SimpleGrid, Text, Stack, Flex, Image } from "@chakra-ui/react";
import { FeatureData, FeatureProps } from "../../../public/database/Features";
import { ReactElement } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: ReactElement;
};

const Feature = ({ title, description, icon }: FeatureCardProps) => {
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
    <Box p={4} backgroundImage="linear-gradient(45deg, #afddfc, #6fdcff)">
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
