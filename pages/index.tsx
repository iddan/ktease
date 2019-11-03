import React from "react";
import Link from "next/link";

const conditionCodes: string[] = ["10"];

const Home = () => (
  <div>
    Conditions:{" "}
    {conditionCodes.map(code => (
      <Link href={`/conditions/[id]`} as={`/conditions/${code}`}>
        {code}
      </Link>
    ))}
  </div>
);

export default Home;
