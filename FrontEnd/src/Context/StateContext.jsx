import {useContract, useContractRead} from "@thirdweb-dev/react";
import {createContext, useContext, useEffect, useState} from "react";
// const address = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";
export const StateContext = createContext(null);
const address = "0x076d1f37a88DfF88cD8E8D8bEE1577BB59c0dc88";

export const StateContextProvider = ({children}) => {

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