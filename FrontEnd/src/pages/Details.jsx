
import {useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react'

import {MediaRenderer, useContract, useContractRead} from "@thirdweb-dev/react";
import {useStateContext} from "../Context/StateContext";

const Details = () => {

  const {contract} = useStateContext();
  const params = useParams()
  const id = params.id;
  const { data: certificates, isLoading: cert_loading } = useContractRead(contract, "getCertificateOfArtwork", [id])
  const { data:bids, isLoading: bidsLoading } = useContractRead(contract, "getArtworkBids", [id])

  const {data: description, isLoading: descriptionLoading} = useContractRead(contract, "getDescription", [id]);
  const [CID, setCID] = useState("");

  const {data: artworks , isLoading : artworksLoading} = useContractRead(contract, "getAllArtworks");
  // TO DO : create function to retrieve only data of an artwork in the contract;

  useEffect(()=>{
    if(!artworksLoading) {
      let array = [];
      for (const artwork of artworks) {
        array.push({
          CID : artwork[0], //cid from ipfs
          price:parseInt(artwork[1]._hex.toString(), 16), //price of the artwork
          isLimitedEdition : artwork[2],
          isAuctioned : artwork[3], //is auctioned
          auctionEndTime : parseInt(artwork[4]._hex.toString(), 16), //
          genre : artwork[5], //
          title : artwork[6], //
          id : parseInt(artwork[7]._hex.toString(), 16),
        })
      }
      console.log(array);
      const art = array.filter(artwork => artwork.id == id)[0];
      setCID(art.CID);
      // alert(array.length)
    }
  }, [artworks, artworksLoading])


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
      <MediaRenderer src={CID} alt="image"/>
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