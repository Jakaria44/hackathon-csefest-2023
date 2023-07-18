import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import {useContext, useEffect, useState} from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

// import {StateContext} from "../../App";

import {useStateContext} from "../../Context/StateContext";

const ContentGrid = () => {
  const { contract, address, artworkCount, allArtworks} = useStateContext();
  const { data: allArtworkData, isLoading : allArtworkLoading } = useContractRead(contract, "getAllArtworks" );
  // const { data: count, isLoading : countLoading } = useContractRead(contract, "getArtworkCount" );

  return (
    <>
      <div>Total artworks : {artworkCount}</div>
      <hr/>
      <Wrap justify="center" minH={"75vh"}>
        {allArtworks.length &&
          allArtworks.map((artwork, index) => (
                <WrapItem key={index}>
                  <Card {...artwork} />
                </WrapItem>
            ))}
        {allArtworkLoading && <p>loading...</p>}
      </Wrap>
    </>

  );
};

export default ContentGrid;
