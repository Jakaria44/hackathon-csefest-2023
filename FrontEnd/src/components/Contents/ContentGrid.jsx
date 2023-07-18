import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import {useEffect, useState} from "react";
import { ContentData } from "../../assets/Contents";

import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = `0x${process.env.PUBLIC_KEY}`;

const ContentGrid = () => {
  const {contract} = useContract(contractAddress);
  const [cardData, setCardData] = useState([]);
  const { data: data, isLoading : isLoading } = useContractRead(contract, "getAllArtworks" );
  const {data : count, isLoading: countLoading} = useContractRead(contract, "artworkCounter");
  const {counter, setCounter} = useState(0);
  useEffect(() => {
    if(!isLoading) {
      setCardData(data);
      console.log(data[0]);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if(!countLoading) {
      setCounter(count);
    }
  }, [countLoading, count]);
  useEffect(()=>{
    console.log("in contentGrid")
  }, []);
  return (
    <>
      <div>{counter}</div>
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
