// import ReactDOM from "react-dom/client";
// import { ChakraProvider } from "@chakra-ui/react";
// import { BrowserRouter } from "react-router-dom";
// import {
//   ThirdwebProvider,
//   metamaskWallet,
//   coinbaseWallet,
//   walletConnect,
// } from "@thirdweb-dev/react";
// import { Sepolia } from "@thirdweb-dev/chains";
// import App from "./App";
// import "./index.css";
// import Navbar from "./components/Navbar/Navbar";
// import { StateContextProvider } from "./StateProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <ChakraProvider>
//       <StateContextProvider>
//         <ThirdwebProvider
//           activeChain={Sepolia}
//           supportedWallets={[
//             metamaskWallet(),
//             coinbaseWallet(),
//             walletConnect(),
//           ]}
//         >
//           <App />
//         </ThirdwebProvider>
//       </StateContextProvider>
//     </ChakraProvider>
//   </BrowserRouter>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={Sepolia}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);