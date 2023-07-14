import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Subject from "./Subject";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";



const SubjectCards = () => {
  const {contract} = useContract(contractAddress);
  const { data, isLoading } = useContractRead(contract, "getAllArtworks" );

  const [subjects, setSubjects] = useState(null);
  
  useEffect(() => {
    if(!isLoading) {
      setSubjects(data);
      console.log(data[0]);
    }

    }, [isLoading, data]);
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
    >
      {subjects &&
        subjects.map((subject) => {
          return (
            <GridItem w="100%" key={subject.id}>
              <Subject {...subject} />
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default SubjectCards;
