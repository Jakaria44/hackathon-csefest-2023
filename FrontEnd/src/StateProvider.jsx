import { useContext, createContext } from "react";
import { useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = "0x60a778B2eF99C8105004d896333ef4215b95d98B";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const contract = sdk.getContract(contractAddress);

  const getData = async () => {
    console.log("getData");
    const { data, isLoading } = useContractRead(contract, "artworks", [0]);
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
