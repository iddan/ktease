import React from "react";
import Head from "next/head";
import Condition from "../../components/condition";
import ConditionNotFound from "../../components/condition-not-found";
import { ConditionInfo } from "../../types";

const conditionToData: { [name: string]: ConditionInfo } = {
  migrane: {
    name: "migrane",
    title: "Migrane",
    summary: "Migrane is when your head aches and your eyes are flashing.",
    description:
      "Migrane is when your head aches and your eyes are flashing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    plm: 3000000,
    potentialSymptoms: [],
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
  }
};

type Props = {
  name: string;
  condition: ConditionInfo;
};

function ConditionPage({ name, condition }: Props) {
  return (
    <>
      <Head>
        <title>K Health - {condition.title || name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {condition.title === undefined ? (
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
