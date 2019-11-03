import React from "react";
import Symptoms from "../../components/symptoms";
import { ConcerningSymptom, PotentialSymptom } from "../../types";

const concerningSymptoms: ConcerningSymptom[] = [];
const potentialSymptoms: PotentialSymptom[] = [];

const SymptomPage = () => {
  return (
    <Symptoms
      concerningSymptoms={concerningSymptoms}
      potentialSymptoms={potentialSymptoms}
    />
  );
};

export default SymptomPage;
