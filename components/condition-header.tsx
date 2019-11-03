import React from "react";

type Props = {
  title: string;
};

const ConditionHeader = ({ title }: Props) => {
  return <h1 className="title">{title}</h1>;
};

export default ConditionHeader;
