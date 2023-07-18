import {useContract, useContractRead} from "@thirdweb-dev/react";
import {createContext, useContext, useEffect, useState} from "react";
const address = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";
export const StateContext = createContext(null);

export const StateContextProvider = ({children}) => {

  const {contract} = useContract(address);
  
  
  const [artworkCount, setArtworkCount] = useState(0);
  const {data: count , isLoading : countLoading} = useContractRead(contract, "getArtworkCount");
  useEffect(()=>{
    if(!countLoading) {
      setArtworkCount(parseInt(count._hex.toString(), 16));
    }
  }, [count, countLoading])
  
  
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
    }
  }, [artworks, artworksLoading])

  
  return (
    <>
      <StateContext.Provider value={{
        contract,
        address,
        artworkCount,
        allArtworks
      }}>
        {children}
      </StateContext.Provider>

    </>
  );
}

export const useStateContext = ()=>useContext(StateContext);