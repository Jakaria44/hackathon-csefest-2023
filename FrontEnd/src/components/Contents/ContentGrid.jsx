import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import {useContext, useEffect, useState} from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

import {StateContext} from "../../App";

const ContentGrid = () => {
  const { contract, address} = useContext(StateContext)
  const { data: allArtworkData, isLoading : allArtworkLoading } = useContractRead(contract, "getAllArtworks" );
  const { data: count, isLoading : countLoading } = useContractRead(contract, "getArtworkCount" );

  return (
    <>
      {!countLoading && <div>Total artworks : {parseInt(count._hex.toString(), 16)}</div>}
      {countLoading && <div>LOADING ...</div>}
      <hr/>
      <Wrap justify="center" minH={"75vh"}>
        {!allArtworkLoading &&
          allArtworkData.map((data, index) => (
                <WrapItem key={index}>
                  <Card {...data} />
                </WrapItem>
            ))}
        {allArtworkLoading && <p>loading...</p>}
      </Wrap>
    </>

  );
};

export default ContentGrid;
