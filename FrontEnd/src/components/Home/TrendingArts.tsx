import { useState } from "react";
import { TrendingArtsCard } from "./TrendingArtsCard";
import { ArtistType } from "../../assets/types";
import { Heading } from "@chakra-ui/react";
import { TrendingArtists } from "../../assets/trendingArtist";
const TrendingArtss = () => {
  const [TrendingArtss, setTrendingArtss] =
    useState<ArtistType[]>(TrendingArtists);
  return (
    <span className="background">
      <Heading color="white" mb={0}>
        Trending Arts
      </Heading>
      <section className="gallery">
        {TrendingArtss &&
          TrendingArtss.map((TrendingArts) => {
            return <TrendingArtsCard {...TrendingArts} key={TrendingArts.id} />;
          })}
      </section>
    </span>
  );
};

export default TrendingArtss;
