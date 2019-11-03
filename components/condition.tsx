import React, { useState, useCallback } from "react";
import humanFormat from "human-format";
import chevron from "./chevron.svg";
import "./condition.css";

type Props = {
  name: string;
  title: string;
  summary: string;
  description: string;
  plm: number;
};

const formatPlurals = (items: string[]) => {
  return `${items.slice(0, items.length - 1).join(", ")} and ${
    items[items.length - 1]
  }`;
};

const Chevron = () => {
  return <img className="chevron" src={chevron} />;
};

const Condition = ({ name, title, summary, description, plm }: Props) => {
  const [showSummary, setShowSummary] = useState(true);
  const showLess = useCallback(() => {
    setShowSummary(true);
  }, [showSummary]);
  const showMore = useCallback(() => {
    setShowSummary(false);
  }, [showSummary]);
  const symptoms = ["Urinary Frequency", "Urinary Urgency"];
  const tests = ["Urine Analysis", "Urine Culture"];
  const treatments = ["antibiotics"];
  return (
    <div className="condition">
      <h1 className="title">{title}</h1>
      <p className="description">{showSummary ? summary : description}</p>
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
      <p className="followup-section">
        <span>
          Watch for <b>symptoms</b> like {formatPlurals(symptoms)}.
        </span>
        <Chevron />
      </p>
      <p className="followup-section">
        <span>
          Get <b>tested</b>. Doctors often ordered a {formatPlurals(tests)}.
        </span>
        <Chevron />
      </p>
      <p className="followup-section">
        <span>
          Explore <b>treatment</b> options, including which {treatments[0]}{" "}
          people like you took.
        </span>
        <Chevron />
      </p>
      <p className="followup-section">
        <span>
          <b>Recovery</b> time for most cases of {title} is a few days.
        </span>
        <Chevron />
      </p>
    </div>
  );
};

export default Condition;
