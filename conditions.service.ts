import { ConditionInfo } from "./types";
import data from "./data.json";

const mockCondition = {
  plm: 3000000,
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