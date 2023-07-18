import {AiOutlineUpload} from "react-icons/ai";
import {useState, ChangeEvent} from "react";
import {useStorageUpload, MediaRenderer} from "@thirdweb-dev/react";
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
  Spinner
} from "@chakra-ui/react";

import {useStateContext} from "../../Context/StateContext";
import {useContractWrite} from "@thirdweb-dev/react";

export default function UploadArt() {
  const {contract} = useStateContext()
  const [selectedFile, setSelectedFile] = useState(null);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [source, setSource] = useState("");
  const [localFileUploadURL, setLocalFileUploadURL] = useState(null);
  const [uploadChangeText, setUploadChangeText] = useState("Choose File");

  const {mutateAsync: upload} = useStorageUpload();
  const {mutateAsync: addArtwork, isLoading: addingArtworkLoading} = useContractWrite(contract, "addArtwork")


  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const localFile = URL.createObjectURL(file);
      setLocalFileUploadURL(localFile);
      setUploadChangeText("Change File");
    }

  };


  const uploadImageToIPFS = async (selectedFile) => {
    setUploading(true);
    const uploadUrl = await upload({
      data: [selectedFile],
      options: {uploadWithGatewayUrl: true, uploadWithoutDirectory: true},
    });
    setSource(uploadUrl[0]);
    console.log("source: ", source);


  };

  // TO DO:
  // submit -> upload to ipfs.then(submit to the contract).catch(an error occured)
  // after submitting : redirect to another page;

  const handleUploadClick = () => {

    if (selectedFile) {
      uploadImageToIPFS(selectedFile)
        .then(res => {
            console.log("source before uploading", source);
            try {
              const data = addArtwork({
                args:
                  [
                    source,
                    price,
                    1, //quantity : default 1
                    true, //_isLimitedEdition,
                    false, //_isAuctioned,
                    100000,//_auctionEndTime,
                    name, //title,
                    "genre", //_genre,
                    description
                  ]
              });
              data
                .then(res => {
                  console.info("contract call success", data);
                  // setUploading(false);
                  alert("file uploaded successfully");
                })
                .catch(err => {
                  // if user rejects from wallet;
                  alert("File uploaded to Storage but failed to add to the shop. Please try Again");

                })
                .finally((() => {
                  setUploading(false);
                }))
            } catch (err) {
              console.error("contract call failure", err);
            }
          }
        )
        .catch(error => {
            alert("an error occurred");
          }
        )
    } else {
      alert("upload file first");
    }
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value); // Update the price state when the input value changes
  };
  const handleNameChange = (event) => {
    setName(event.target.value); // Update the price state when the input value changes
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Update the price state when the input value changes
  };
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{base: 1, md: 2}}
        spacing={{base: 10, lg: 32}}
        py={{base: 10, sm: 20, lg: 32}}
      >
        <Stack spacing={{base: 10, md: 20}} mt="100px" ml="100px">
          <Heading
            lineHeight={1.1}
            fontSize={{base: "3xl", sm: "4xl", md: "5xl", lg: "6xl"}}
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
          p={{base: 4, sm: 6, md: 8}}
          spacing={{base: 8}}
          maxW={{lg: "lg"}}
        >
          <Stack spacing={4}>
            <Heading
              color={"gray.800"}
              lineHeight={1.1}
              fontSize={{base: "2xl", sm: "3xl", md: "4xl"}}
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
                  onChange={handleFileChange}
                  accept="image/*"
                  display="none"
                  id="image-upload"
                />
                <label htmlFor="image-upload">
                  <Button
                    as="span"
                    leftIcon={<AiOutlineUpload/>}
                    colorScheme="teal"
                    variant="outline"
                  >
                    {uploadChangeText}
                  </Button>
                </label>
                {localFileUploadURL && (
                  <Image src={localFileUploadURL} alt="Selected" mt={4}/>
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
                  value={price} // Bind the value to the price state
                  onChange={handlePriceChange} // Call handlePriceChange when the input value changes
                />
              </FormControl>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter Name"
                  bg={"gray.100"}
                  border={0}
                  color={"gray.500"}
                  _placeholder={{
                    color: "gray.500",
                  }}
                  value={name} // Bind the value to the price state
                  onChange={handleNameChange} // Call handlePriceChange when the input value changes
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
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </FormControl>
            </Stack>
            <Button
              onClick={handleUploadClick}
              disabled={!selectedFile}
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

              isLoading={addingArtworkLoading || uploading}
              spinner={<Spinner/>}
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


