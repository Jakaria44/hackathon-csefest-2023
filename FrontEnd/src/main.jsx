import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from "./App";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { StateContextProvider } from "./StateProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <ThirdwebProvider
        activeChain={Sepolia}
        supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
      >
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </ThirdwebProvider>
    </ChakraProvider>
  </BrowserRouter>
);