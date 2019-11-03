import React from "react";
import Head from "next/head";
import Condition from "../../components/condition";
import ConditionNotFound from "../../components/condition-not-found";
import { ConditionInfo } from "../../types";
import { getCondition } from "../../conditions.service";

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
  return { name, condition: getCondition(name) };
};

export default ConditionPage;
