import React from "react";
import Link from "next/link";
import { listConditions } from "../conditions.service";

const conditionCodes = listConditions();

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
