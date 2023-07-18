
import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from 'react'

import { useContract, useContractRead } from "@thirdweb-dev/react";
import {StateContext} from "../App";

const Details = () => {

  const {contract} = useContext(StateContext)
  const params = useParams()
  const id = params.id;
  const { data: certificates, isLoading: cert_loading } = useContractRead(contract, "getCertificateOfArtwork", [id])
  const { data:bids, isLoading: bidsLoading } = useContractRead(contract, "getArtworkBids", [id])

  const {data: description, isLoading: descriptionLoading} = useContractRead(contract, "getDescription", [id]);

  useEffect(()=>{
      if(!cert_loading){
        console.log("cert: ", certificates);
      }
      if(!bidsLoading){
      console.log("cert: ", bids);
    }
  }, [cert_loading, bidsLoading])

  return (

    <div>
    <h1>Details</h1>
    <h3 >Description : {description}</h3>
    <h3 > Certificates : </h3>
       <ol>
            {!cert_loading &&
                certificates.map((certificate, index) =>(
                    <li key={index}>
                        <i >
                            {certificate}
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
                            {parseInt(bid._hex.toString(), 16)}
                        </i>
                    </li>
                ))
            }

        </ol>

    </div>

  );
  
}
export default Details;