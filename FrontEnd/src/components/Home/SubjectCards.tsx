import { Grid, GridItem } from "@chakra-ui/react";
import { SubjectType } from "../../assets/types";
import Subject from "./Subject";
import url from "../../assets/config";
import { useEffect, useState } from "react";

const SubjectCards = () => {
  const [subjects, setSubjects] = useState<SubjectType[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + "/subjects");
        const subjects = await response.json();
        setSubjects(subjects);
        console.log(subjects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={6}
    >
      {subjects &&
        subjects.map((subject) => {
          return (
            <GridItem w="100%" key={subject.id}>
              <Subject {...subject} />
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default SubjectCards;
