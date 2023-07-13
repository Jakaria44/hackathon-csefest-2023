// import  { useContext, createContext } from "react";

// import {
//   useAddress,
//   useContract,
//   useMetamask,
//   useContractWrite,
// } from "@thirdweb-dev/react";
// import { ethers } from "ethers";
// import { EditionMetadataWithOwnerOutputSchema } from "@thirdweb-dev/sdk";

// const StateContext = createContext();

// export const StateContextProvider = ({ children }) => {
//   const { contract } = useContract(
//     "0x60a778B2eF99C8105004d896333ef4215b95d98B"
//   );
//   const { mutateAsync: addArtwork, isLoading: addLoading } = useContractWrite(
//     contract,
//     "addArtwork"
//   );
//   const { mutateAsync: issueCertificate, isLoading:certificateLoading   } = useContractWrite(
//     contract,
//     "issueCertificate"
//   );

//   const addArtworkFunc = async () => {
//     try {
//       const data = await addArtwork({
//         args: [
//           _CID,
//           _price,
//           _quantity,
//           _isLimitedEdition,
//           _isAuctioned,
//           _auctionEndTime,
//           _title,
//           _genre,
//         ],
//       });
//       console.info("contract call successs", data);
//     } catch (err) {
//       console.error("contract call failure", err);
//     }
//   };
//   const issueCertificateFunc = async () => {
//     try {
//       const data = await issueCertificate({ args: [_artworkId] });
//       console.info("contract call successs", data);
//     } catch (err) {
//       console.error("contract call failure", err);
//     }
//   };
//   return (
//     <StateContext.Provider
//       value={{
//         addArtworkFunc,
//         issueCertificateFunc,
//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);
