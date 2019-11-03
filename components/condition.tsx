import React, { useState, useCallback } from "react";
import "./condition.css";

type Props =
  | { name: string; summary: undefined; description: undefined }
  | {
      name: string;
      summary: string;
      description: string;
    };

const Condition = ({ name, summary, description }: Props) => {
  const [showSummary, setShowSummary] = useState(true);
  const showLess = useCallback(() => {
    setShowSummary(true);
  }, [showSummary]);
  const showMore = useCallback(() => {
    setShowSummary(false);
  }, [showSummary]);
  if (summary === undefined) {
    return (
      <div className="condition">
        <h1 className="title">Condition {name} was not found</h1>
      </div>
    );
  }
  return (
    <div className="condition">
      <h1 className="title">{name}</h1>
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
    </div>
  );
};

export default Condition;
