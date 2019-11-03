import React from "react";
import Head from "next/head";
import Condition from "../../components/condition";
import ConditionNotFound from "../../components/condition-not-found";
import { ConditionInfo } from "../../types";
import data from "../../data.json";

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

type Props = {
  name: string;
  condition: ConditionInfo | undefined;
};

function ConditionPage({ name, condition }: Props) {
  return (
    <>
      <Head>
        <title>K Health - {condition ? condition.title : name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {condition === undefined ? (
        <ConditionNotFound name={name} />
      ) : (
        <Condition name={name} condition={condition} />
      )}
    </>
  );
}

ConditionPage.getInitialProps = context => {
  const { name } = context.query;
  const condition = conditionToData[name];
  return { name, condition };
};

export default ConditionPage;
