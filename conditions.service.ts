import {
  ConditionInfo,
  PersonalizedConditionInfo,
  BiologicalSex
} from "./types";
import data from "./data";

const conditionToData: { [name: string]: ConditionInfo } = {};

for (const condition of data) {
  conditionToData[condition.name] = condition;
}

export function getCondition(name: string): ConditionInfo | undefined {
  return conditionToData[name];
}

export function getPersonalizedCondition(
  name: string,
  biologicalSex: BiologicalSex,
  age: number
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
