import { useContext, createContext } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  //   const contract = sdk.getContract(contractAddress);
  const {contract} = useContract(contractAddress);

  const getData = async () => {
    console.log("getData");
    const { data, isLoading } = useContractRead(contract, "artworks");
    if (data) {
      console.log("Data paisi");
      const processedData = data[0].map((item) => {
        return {
          CID: item[0],
          price: parseInt(item[1].hex),
          isLimitedEdition: item[2],
          isAuctioned: item[3],
          auctionEndTime: parseInt(item[4].hex),
          genre: item[5],
          title: item[6],
          id: parseInt(item[7].hex),
        };
      });

      return processedData;
    }
    console.log("Data painai");
    return undefined;
  };

  return (
    <StateContext.Provider value={{ getData }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);