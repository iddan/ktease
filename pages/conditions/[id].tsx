import React from "react";
import Head from "next/head";
import Condition from "../../components/condition";

type ConditionData = {
  name: string;
  shortDescription: string;
  longDescription: string;
};

const conditionToData: { [code: string]: ConditionData } = {
  "10": {
    name: "Migrane",
    shortDescription:
      "Migrane is when your head aches and your eyes are flashing.",
    longDescription:
      "Migrane is when your head aches and your eyes are flashing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  }
};

function ConditionPage({ name, shortDescription, longDescription }) {
  return (
    <>
      <Head>
        <title>K Health - {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Condition
        name={name}
        shortDescription={shortDescription}
        longDescription={longDescription}
      />
    </>
  );
}

ConditionPage.getInitialProps = context => {
  const { id } = context.query;
  return conditionToData[id];
};

export default ConditionPage;
