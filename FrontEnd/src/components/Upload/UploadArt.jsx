import { AiOutlineUpload } from "react-icons/ai";
import { useState, ChangeEvent } from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  FormControl,
  Textarea,
} from "@chakra-ui/react";

export default function UploadArt() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    file && setSelectedImage(URL.createObjectURL(file));
  };
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }} mt="100px" ml="100px">
          <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Share your work{" "}
            <Text
              as={"span"}
              backgroundColor="#045de9"
              backgroundImage="linear-gradient(315deg, #045de9 0%, #09c6f9 74%)"
              bgClip="text"
            >
              &
            </Text>{" "}
            join our community of 1000+ artists
          </Heading>
        </Stack>
        <Stack
          bg={"gray.50"}
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              UPLOAD YOUR WORK
              <Text as={"span"} color="#045de9">
                !
              </Text>
            </Heading>
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4}>
              <FormControl justifyContent="center">
                <Input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  display="none"
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <Button
                    as="span"
                    leftIcon={<AiOutlineUpload />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Choose Image
                  </Button>
                </label>
                {selectedImage && (
                  <Image src={selectedImage} alt="Selected" mt={4} />
                )}
              </FormControl>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter price"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </FormControl>

              <FormControl>
                <Textarea
                  placeholder="Enter description"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                />
              </FormControl>
            </Stack>
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              backgroundColor="#045de9"
              backgroundImage="linear-gradient(315deg, #045de9 0%, #09c6f9 74%)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, red.400,pink.400)",
                boxShadow: "xl",
              }}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
    </Box>
  );
}
