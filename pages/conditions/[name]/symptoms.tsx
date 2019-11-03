import React from "react";
import Symptoms from "../../../components/symptoms";
import ConditionHeader from "../../../components/condition-header";
import { ConditionInfo } from "../../../types";
import { getCondition } from "../../../conditions.service";
import ConditionNotFound from "../../../components/condition-not-found";

type Props = {
  name: string;
  condition: ConditionInfo;
};

const SymptomPage = ({ name, condition }: Props) => {
  console.log(name);
  if (!condition) {
    return <ConditionNotFound name={name} />;
  }
  return (
    <>
      <ConditionHeader title={condition.title} />
      <Symptoms
        concerningSymptoms={condition.concerningSymptoms}
        potentialSymptoms={condition.potentialSymptoms}
      />
    </>
  );
};

SymptomPage.getInitialProps = context => {
  const { name } = context.query;
  return { name, condition: getCondition(name) };
};

export default SymptomPage;
