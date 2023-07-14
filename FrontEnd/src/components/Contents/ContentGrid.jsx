import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import { useState } from "react";
import { ContentData } from "../../assets/Contents";

import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = `0x${process.env.Public_key}`;

const CardGrid = () => {
  const [cardData, setCardData] = useState(ContentData);
  const { data, isLoading } = useContractRead(contract, "getAllArtworks" );

  useEffect(() => {
    if(!isLoading) {
      setCardData(data);
      console.log(data[0]);
    }

    }, [isLoading, data]);
  return (
    <Wrap justify="center" minH={"75vh"}>
      {cardData &&
        cardData.map((card, index) => (
          <WrapItem key={index}>
            <Card {...card} />
          </WrapItem>
        ))}
    </Wrap>
  );
};

export default CardGrid;
