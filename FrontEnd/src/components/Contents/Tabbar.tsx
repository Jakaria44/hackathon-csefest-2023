import { Box, Flex, Link, Button } from "@chakra-ui/react";

const TabBar = () => {
  let link: string;
  let teacherOrSubject: null = null;
  if (teacherOrSubject) {
    link = "/gallery/" + teacherOrSubject;
  } else {
    link = "/gallery";
  }
  const AllGenre: string[] = ["Action", "Photgraphy", "Music"];
  const GenreArray = AllGenre.map((genre) => {
    return (
      <Button
        as={Link}
        px="3"
        py="2"
        borderRadius={"md"}
        bgColor={"white"}
        _hover={{
          textDecoration: "none",
          bgColor: "blue.100",
        }}
        href={link + "/" + genre}
      >
        {genre}
      </Button>
    );
  });
  return (
    <Box mx="200px">
      <Flex
        alignItems="center"
        justify="center"
        borderBottom="0.5px solid black"
        pb={2}
      ></Flex>
      {GenreArray}
    </Box>
  );
};

export default TabBar;
