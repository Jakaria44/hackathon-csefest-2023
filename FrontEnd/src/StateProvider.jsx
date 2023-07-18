import {useContext, createContext} from "react";
import {useContract, useContractRead} from "@thirdweb-dev/react";
const address = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";

export const StateContext = createContext(null);

const StateContextProvider = ({children}) => {
  const {contract} = useContract(address);

  const getValue = async () => {
    const {data , isLoading} =await useContractRead(contract, "getArtworkCount")
    if(!isLoading) console.log("inside context, " , data);

    // return data;
  };

  return (
    <StateContext.Provider value={{ contract}}>
      {children}
    </StateContext.Provider>
  );
};

// export const useStateContext = () => useContext(StateContext);
export default StateContext;