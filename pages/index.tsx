import React from "react";
import Link from "next/link";
import { listConditions } from "../conditions.service";

const conditionCodes = listConditions();

const Home = () => (
  <div>
    Conditions:{" "}
    <ul>
      {conditionCodes.map(code => (
        <li>
          <Link href={`/conditions/[id]`} as={`/conditions/${code}`}>
            <a>{code}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
