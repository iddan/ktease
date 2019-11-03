import React from "react";
import Head from "next/head";
import Condition from "../../components/condition";
import ConditionNotFound from "../../components/condition-not-found";

type ConditionData = {
  title: string;
  summary: string;
  description: string;
  plm: number;
};

const conditionToData: { [name: string]: ConditionData } = {
  migrane: {
    title: "Migrane",
    summary: "Migrane is when your head aches and your eyes are flashing.",
    description:
      "Migrane is when your head aches and your eyes are flashing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    plm: 3000000
  }
};

function ConditionPage({ name, title, summary, description, plm }) {
  return (
    <>
      <Head>
        <title>K Health - {title || name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {title === undefined ? (
        <ConditionNotFound name={name} />
      ) : (
        <Condition
          name={name}
          title={title}
          summary={summary}
          description={description}
          plm={plm}
        />
      )}
    </>
  );
}

ConditionPage.getInitialProps = context => {
  const { name } = context.query;
  return { name, ...conditionToData[name] };
};

export default ConditionPage;
