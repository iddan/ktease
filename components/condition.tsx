import React, { useState, useCallback } from "react";
import Link from "next/link";
import humanFormat from "human-format";
import ReactMarkdown from "react-markdown";
import Chevron from "./chevron";
import ConditionHeader from "./condition-header";
import { ConditionInfo } from "../types";
import "./condition.css";

type Props = {
  name: string;
  condition: ConditionInfo;
};

const formatPlurals = (items: string[]): string => {
  if (items.length === 0) {
    return "";
  }
  if (items.length === 1) {
    return items[0];
  }
  return `${items.slice(0, items.length - 1).join(", ")} and ${
    items[items.length - 1]
  }`;
};

const Condition = ({ name, condition }: Props) => {
  const {
    title,
    summary,
    description,
    plm,
    potentialSymptoms,
    tests,
    treatments
  } = condition;
  const [showSummary, setShowSummary] = useState(true);
  const showLess = useCallback(() => {
    setShowSummary(true);
  }, [showSummary]);
  const showMore = useCallback(() => {
    setShowSummary(false);
  }, [showSummary]);
  const symptomTitles = potentialSymptoms.map(symptom => symptom.title);
  const testTitles = tests.map(test => test.title);
  return (
    <div className="condition">
      <ConditionHeader title={title} />
      <ReactMarkdown
        className="description"
        source={showSummary ? summary : description}
      />
      {showSummary && (
        <button className="description-button" onClick={showMore}>
          Show more
        </button>
      )}
      {!showSummary && (
        <button className="description-button" onClick={showLess}>
          Show less
        </button>
      )}
      <p className="followup-intro">
        Based on {humanFormat(plm).replace(" ", "")} cases with bladder
        infection. In this page you can learn more about how they got better:
      </p>
      <h2>Common Symptoms</h2>
      <Link
        href={`/conditions/[name]/symptoms`}
        as={`/conditions/${name}/symptoms`}
      >
        <p className="followup-section">
          <span>
            Watch for <b>symptoms</b> like {formatPlurals(symptomTitles)}.
          </span>
          <Chevron />
        </p>
      </Link>
      <Link href={`/conditions/[name]/tests`} as={`/conditions/${name}/tests`}>
        <p className="followup-section">
          <span>
            Get <b>tested</b>. Doctors often ordered a{" "}
            {formatPlurals(testTitles)}.
          </span>
          <Chevron />
        </p>
      </Link>
      <Link
        href={`/conditions/[name]/treatments`}
        as={`/conditions/${name}/treatments`}
      >
        <p className="followup-section">
          <span>
            Explore <b>treatment</b> options, including which{" "}
            {treatments[0].title} people like you took.
          </span>
          <Chevron />
        </p>
      </Link>
      <Link
        href={`/conditions/[name]/recovery`}
        as={`/conditions/${name}/recovery`}
      >
        <p className="followup-section">
          <span>
            <b>Recovery</b> time for most cases of {title} is a few days.
          </span>
          <Chevron />
        </p>
      </Link>
    </div>
  );
};

export default Condition;
