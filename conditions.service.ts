import { ConditionInfo, PersonalizedConditionInfo } from "./types";
import data from "./data";

const mockCondition = {
  // plm: 3000000,
  potentialSymptoms: [
    {
      title: "Urinary frequency"
    },
    {
      title: "Urinary urgency"
    }
  ],
  concerningSymptoms: [
    { title: "Urinary Frequency" },
    { title: "Urinary Urgency" }
  ],
  tests: [
    {
      title: "Urine Analysis"
    },
    { title: "Urine Culture" }
  ],
  treatments: [
    {
      title: "antibiotics"
    }
  ]
};

const conditionToData: { [name: string]: ConditionInfo } = {};

for (const condition of data) {
  conditionToData[condition.name] = {
    ...condition,
    ...mockCondition
  };
}

export function getCondition(name: string): ConditionInfo | undefined {
  return conditionToData[name];
}

export function getPersonalizedCondition(
  name: string
): Promise<PersonalizedConditionInfo | undefined> {
  return Promise.resolve({
    plm: 42,
    potentialSymptoms: [],
    concerningSymptoms: [],
    tests: [],
    treatments: [],
    recovery: null
  });
}

export function listConditions(): string[] {
  return Object.keys(conditionToData);
}
