import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  title: string;
};

const ConditionHeader = ({ name, title }: Props) => {
  return (
    <Link
      href={`/conditions/[name]/symptoms`}
      as={`/conditions/${name}/symptoms`}
    >
      <h1 className="title">{title}</h1>
    </Link>
  );
};

export default ConditionHeader;
