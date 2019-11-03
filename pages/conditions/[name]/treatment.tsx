import React from "react";
import { getCondition } from "../../../conditions.service";
import ConditionHeader from "../../../components/condition-header";
import ConditionNotFound from "../../../components/condition-not-found";
import Treatment from "../../../components/treatment";

const TreatmentPage = ({ condition }) => {
  if (!condition) {
    return <ConditionNotFound name={name} />;
  }
  <div className="treatment">
    <ConditionHeader title={condition.title} />
    <Treatment />
  </div>;
};

TreatmentPage.getInitialProps = context => {
  const { name } = context.query;
  return { name, condition: getCondition(name) };
};

export default TreatmentPage;
