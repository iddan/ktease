import React from "react";
import ConditionHeader from "../../../components/condition-header";
import Tests from "../../../components/tests";
import { getCondition } from "../../../conditions.service";
import ConditionNotFound from "../../../components/condition-not-found";

const TestsPage = ({ name, condition }) => {
  if (!condition) {
    return <ConditionNotFound name={name} />;
  }
  return (
    <div className="condition">
      <section>
        <ConditionHeader name={name} title={condition.title} />
        <Tests />
      </section>
    </div>
  );
};

TestsPage.getInitialProps = context => {
  const { name } = context.query;
  return { name, condition: getCondition(name) };
};

export default TestsPage;
