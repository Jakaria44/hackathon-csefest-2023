import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Textarea,
} from "@chakra-ui/react";

const QuestionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(name, opinion);
  };

  return (
    <ChakraProvider>
      <Box maxW="100%" m="auto" p={10} borderWidth={1}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="opinion">
              <FormLabel>Ask us any question</FormLabel>
              <Textarea
                placeholder="Write your question here"
                value={opinion}
                onChange={(e) => setOpinion(e.target.value)}
              />
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </ChakraProvider>
  );
};

export default QuestionForm;
