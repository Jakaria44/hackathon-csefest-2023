import { Wrap, WrapItem } from "@chakra-ui/react";
import { Card } from "./Card";
import {useContext, useEffect, useState} from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";

import {useStateContext} from "../../Context/StateContext";

const ContentGrid = () => {
  const { contract, address} = useStateContext();

  const [allArtworks, setAllArtworks] = useState([]);
  const {data: artworks , isLoading : artworksLoading} = useContractRead(contract, "getAllArtworks");

  useEffect(()=>{
    if(!artworksLoading) {
      let array = [];
      for (const artwork of artworks) {
        array.push({
           CID : artwork[0], //cid from ipfs
           price:parseInt(artwork[1]._hex.toString(), 16), //price of the artwork
           isLimitedEdition : artwork[2],
           isAuctioned : artwork[3], //is auctioned
           auctionEndTime : parseInt(artwork[4]._hex.toString(), 16), //
           genre : artwork[5], //
           title : artwork[6], //
           id : parseInt(artwork[7]._hex.toString(), 16),
        })
      }
      console.log(array);
      setAllArtworks(array);
      // alert(array.length)
    }
  }, [artworks, artworksLoading])




  return (
    <>

      <hr/>
      <Wrap justify="center" minH={"75vh"}>
        {allArtworks.length &&
          allArtworks.map((artwork, index) => (
                <WrapItem key={index}>
                  <Card {...artwork} />
                </WrapItem>
            ))}
        {artworksLoading && <p>loading...</p>}
      </Wrap>
    </>

  );
};

export default ContentGrid;
