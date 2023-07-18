import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import {useEffect, useState} from "react";
import { ContentData } from "../../assets/Contents";

import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";

const ContentGrid = () => {
  const {contract} = useContract(contractAddress);
  const [cardData, setCardData] = useState([]);
  const { data: data, isLoading : isLoading } = useContractRead(contract, "getAllArtworks" );
  const {data : count, isLoading: countLoading} = useContractRead(contract, "getArtworkCount");
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if(!isLoading) {
      setCardData(data);

    }
  }, [isLoading, data]);

  useEffect(() => {
    if(!countLoading) {
      console.log("counter : ", count);
    }
  }, [countLoading, count]);

  return (
    <>
      {!countLoading && <div>count : {parseInt(count._hex.toString(), 16)}</div>}
      {countLoading && <div>LOADING ...</div>}
      <hr/>
      <Wrap justify="center" minH={"75vh"}>
        {!isLoading &&
            cardData.map((card, index) => (
                <WrapItem key={index}>
                  <Card {...card} />
                </WrapItem>
            ))}
        {isLoading && <p>loading...</p>}
      </Wrap>
    </>

  );
};

export default ContentGrid;
