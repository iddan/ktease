import React, { useState, useCallback } from "react";
import "./condition.css";

type Props = {
  name: string;
  shortDescription: string;
  longDescription: string;
};

const Condition = ({ name, shortDescription, longDescription }: Props) => {
  const [showLong, setShowLong] = useState(false);
  const showMore = useCallback(() => {
    setShowLong(true);
  }, [showLong]);
  const showLess = useCallback(() => {
    setShowLong(false);
  }, [showLong]);
  return (
    <div className="condition">
      <h1 className="title">{name}</h1>
      <p className="description">
        {showLong ? longDescription : shortDescription}
      </p>
      {!showLong && (
        <button className="show-more" onClick={showMore}>
          {showLong ? "Read less" : "Read more"}
        </button>
      )}
      {showLong && (
        <button className="show-less" onClick={showLess}>
          {showLong ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default Condition;
