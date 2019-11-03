type Titled = {
  /** Human readable title of the condition */
  title: string;
};

export type ConcerningSymptom = Titled & {};

export type PotentialSymptom = Titled & {};

export type Test = Titled & {};

export type Treatment = Titled & {};

type Recovery = {};

export type ConditionInfo = Titled & {
  /** URL friendly name of the condition in kebab case */
  name: string;
  /** Short description of the condition */
  summary: string;
  /** 30seconds description of the condition */

  description: string;
  /** Number of people with cases including this condition in K */
  plm?: number;
  potentialSymptoms?: PotentialSymptom[];
  concerningSymptoms?: ConcerningSymptom[];
  tests?: Test[];
  treatments?: Treatment[];
};

export type PersonalizedConditionInfo = {
  plm: number;
  potentialSymptoms: PotentialSymptom[];
  concerningSymptoms: ConcerningSymptom[];
  tests: Test[];
  treatments: Treatment[];
  recovery: Recovery | null;
};
