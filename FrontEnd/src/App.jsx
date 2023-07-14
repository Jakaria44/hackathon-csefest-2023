// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Contents from "./pages/Contents";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import UploadArt from "./components/Upload/UploadArt";
// import Login from "./pages/Login";
// import { useState, createContext } from "react";
// import PageNotFound from "./pages/PageNotFound";
// import { StateContextProvider } from "./StateProvider";

// export const LoggedInContext = createContext();

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const updateLoginValue = (type) => {
//     if (type == "form") {
//       setLoggedIn(true);
//     }
//     if (type == "logout") {
//       setLoggedIn(false);
//     }
//   };
//   return (
//     <>
//       <LoggedInContext.Provider value={{ loggedIn, updateLoginValue }}>
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/gallery" element={<Contents />} />
//           <Route path="/gallery/:contentType" element={<Contents />} />
//           <Route
//             path="gallery/:teacherOrSubject/:contentType"
//             element={<Contents />}
//           />
//           <Route path="/upload" element={<UploadArt />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>

//         <Footer />
//       </LoggedInContext.Provider>
//     </>
//   );
// }

// export default App;


import React, { useState , useEffect} from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
  ConnectWallet,
  Web3Button,
} from "@thirdweb-dev/react";
// import { Sepolia } from "@thirdweb-dev/chains";
// import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";

// const sdk = new ThirdwebSDK(Sepolia);
// const contractt = await sdk.getContract("0x26F06Cecd813C8515ED0f19dce0A3f333335fF02");
import { ethers } from "ethers";

const App = () => {
  const [count, setcount] = useState(0);

  // const [voting_error, setVotingError] =useState({
  //   error: false,
  //   message: "vote this",
  // });
  const { contract } = useContract("0xe611ad45aA3F35270f52D66c6230bcC558A35EdD");
  const { data, isLoading } = useContractRead(contract, "artworkCounter");
  
  // const [selectedValue, setSelectedValue] =useState("");
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  // const { data, isLoading, error1 } = useContractRead(
  //   contract,
  //   "getCandidateList"
  // );

  // const { mutateAsync: voteForCandidate, isLoadingVote } = useContractWrite(
  //   contract,
  //   "voteForCandidate"
  // );
  useEffect(() => {
    if (!isLoading) {
      setcount(data._hex);
      console.log(data);
    }
  }, [data, isLoading]);


  return (
    <div>
      <ConnectWallet
        dropdownPosition={{
          side: "right", // "top" | "bottom" | "left" | "right";
          align: "center", // "start" | "center" | "end";
        }}
        theme="dark"
        btnTitle="Connect Wallet"
      />
      {isLoading && <p>loading...</p>}
      {!isLoading && <p>{count}</p>} 
      {/* {voting_error.error && <p>{voting_error.message}</p>} */}
    </div>
  );
};

export default App;