import {useContract} from "@thirdweb-dev/react";
import {createContext, useContext} from "react";
const address = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";
export const StateContext = createContext(null);

const StateContextProvider = ({children}) => {

  const {contract} = useContract(address);
  return (
    <>
      <StateContext.Provider value={{
        contract,
        address
      }}>
        {children}
      </StateContext.Provider>

    </>
  );
}

export const useStateContext = ()=>useContext(StateContext);