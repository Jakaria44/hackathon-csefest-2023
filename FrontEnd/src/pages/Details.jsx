import { useParams } from 'ipfs-http-client/dist/src'
import React from 'react'


import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/evm";
import { Sepolia } from "@thirdweb-dev/chains";

const sdk = new ThirdwebSDK(Sepolia);
const contractAddress = "0xe611ad45aA3F35270f52D66c6230bcC558A35EdD";

export const Details = () => {


    const params = useParams()
    const id = params.id;
    const { data: certificates, isLoading: cert_loading } = useContractRead(contract, "getCertificateOfArtwork", [tokenId])
    const { data:bids, isLoading: bidsLoading } = useContractRead(contract, "getArtworkBids", [tokenId])



  return (
    <div>
    <h1>Details</h1>
    <h3 > Certificates</h3>
       <ol>
            {!cert_loading && 
                certificates.map(certificate =>(
                    <li key={certificate.id}>
                        <i >
                            {certificate.name}
                        </i>
                    </li>
                ))
            }

        </ol> 
<hr/>
    <h3> All bids:</h3>
    <ol>
            {!bidsLoading && 
                bids.map((bid, index) =>(
                    <li key={index}>
                        <i >
                            {bid}
                        </i>
                    </li>
                ))
            }

        </ol> 

    </div>

  );
  
}
