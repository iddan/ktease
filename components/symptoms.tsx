import React from "react";
import { ConcerningSymptom, PotentialSymptom } from "../types";

type Props = {
  concerningSymptoms: ConcerningSymptom;
  potentialSymptoms: PotentialSymptom;
};

const Symptoms = ({ concerningSymptoms, potentialSymptoms }: Props) => {
  return (
    <div>
      <h2>Concerning Symptoms</h2>
      <p>People like you often seek further care if:</p>
      <h2>Potential Symptoms</h2>
      <p>
        If any of these symptoms emerge, it’s more likely that you have a
        bladder infection.
      </p>
    </div>
  );
};

export default Symptoms;
