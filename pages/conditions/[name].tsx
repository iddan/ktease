import React from "react";
import Head from "next/head";
import Condition from "../../components/condition";

type ConditionData = {
  name: string;
  summary: string;
  description: string;
};

const conditionToData: { [name: string]: ConditionData } = {
  migrane: {
    name: "Migrane",
    summary: "Migrane is when your head aches and your eyes are flashing.",
    description:
      "Migrane is when your head aches and your eyes are flashing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
};

function ConditionPage({ name, summary, description }) {
  return (
    <>
      <Head>
        <title>K Health - {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Condition name={name} summary={summary} description={description} />
    </>
  );
}

ConditionPage.getInitialProps = context => {
  const { name } = context.query;
  return conditionToData[name] || { name };
};

export default ConditionPage;
