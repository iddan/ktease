import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  title: string;
};

const ConditionHeader = ({ name, title }: Props) => {
  return (
    <Link href={`/conditions/[name]`} as={`/conditions/${name}`}>
      <h1 className="title">{title}</h1>
    </Link>
  );
};

export default ConditionHeader;
