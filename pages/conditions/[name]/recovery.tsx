import React from "react";
import ConditionHeader from "../../../components/condition-header";
import Recovery from "../../../components/recovery";
import { getCondition } from "../../../conditions.service";
import ConditionNotFound from "../../../components/condition-not-found";

const RecoveryPage = ({ name, condition }) => {
  if (!condition) {
    return <ConditionNotFound name={name} />;
  }
  return (
    <div className="condition">
      <section>
        <ConditionHeader name={name} title={condition.title} />
        <Recovery />
      </section>
    </div>
  );
};

RecoveryPage.getInitialProps = context => {
  const { name } = context.query;
  return { name, condition: getCondition(name) };
};

export default RecoveryPage;
