import React from "react";
import "./condition.css";

const ConditionNotFound = ({ name }) => {
  return (
    <div className="condition">
      <h1 className="title">Condition {name} was not found</h1>
    </div>
  );
};

export default ConditionNotFound;
