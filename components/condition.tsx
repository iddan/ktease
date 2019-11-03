import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import humanFormat from "human-format";
import ReactMarkdown from "react-markdown";
import Chevron from "./chevron";
import ConditionHeader from "./condition-header";
import { ConditionInfo, PersonalizedConditionInfo } from "../types";
import "./condition.css";
import { getPersonalizedCondition } from "../conditions.service";
import logo from "../logo.webp";

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

const biologicalSexes = [
  {
    title: "Male",
    value: "male"
  },
  {
    title: "Female",
    value: "female"
  }
];

const BiologicalSexButton = ({ value, title, selected, onSelect }) => {
  const handleClick = useCallback(() => {
    onSelect(value);
  }, [value]);
  return (
    <button onClick={handleClick} className={selected ? "selected" : ""}>
      {title}
    </button>
  );
};

const ageOptions = [];

// const currentYear = new Date().getFullYear();

for (let i = 18; i < 120; i++) {
  ageOptions.push(i);
}

const defaultAge = 30;

const PersonalizedConditionsInfo = ({
  title,
  personalizedData
}: {
  title: string;
  personalizedData: PersonalizedConditionInfo;
}) => {
  const {
    concerningSymptoms,
    tests,
    plm,
    treatments,
    recovery
  } = personalizedData;
  const symptomTitles = concerningSymptoms.map(symptom => symptom.title);
  const testTitles = tests.map(test => test.title);
  return (
    <>
      <p className="followup-intro">
        Based on {humanFormat(plm).replace(" ", "")} cases with bladder
        infection. In this page you can learn more about how they got better:
      </p>
      <h2>Learn More</h2>
      {symptomTitles.length !== 0 && (
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
      )}
      {tests.length !== 0 && (
        <Link
          href={`/conditions/[name]/tests`}
          as={`/conditions/${name}/tests`}
        >
          <p className="followup-section">
            <span>
              Get <b>tested</b>. Doctors often ordered a{" "}
              {formatPlurals(testTitles)}.
            </span>
            <Chevron />
          </p>
        </Link>
      )}
      {treatments.length !== 0 && (
        <Link
          href={`/conditions/[name]/treatment`}
          as={`/conditions/${name}/treatment`}
        >
          <p className="followup-section">
            <span>
              Explore <b>treatment</b> options, including which{" "}
              {treatments[0].title} people like you took.
            </span>
            <Chevron />
          </p>
        </Link>
      )}
      {recovery && (
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
      )}
    </>
  );
};

const Condition = ({ name, condition }: Props) => {
  const { title, summary, description } = condition;
  const [showSummary, setShowSummary] = useState(true);
  const showLess = useCallback(() => {
    setShowSummary(true);
  }, [showSummary]);
  const showMore = useCallback(() => {
    setShowSummary(false);
  }, [showSummary]);
  const [biologicalSex, setBiologicalSex] = useState();
  const [age, setAge] = useState(defaultAge);
  const [
    personalizedData,
    setPersonalizedData
  ] = useState<PersonalizedConditionInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const handleBiologicalSexChange = useCallback(
    value => {
      setBiologicalSex(value);
    },
    [setBiologicalSex]
  );
  const handleAgeChange = useCallback(
    event => {
      setAge(event.target.value);
    },
    [setAge]
  );

  useEffect(() => {
    setLoading(true);
    getPersonalizedCondition(name)
      .then(data => {
        setPersonalizedData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [setPersonalizedData]);

  return (
    <div className="condition">
      <section>
        <ConditionHeader name={name} title={title} />
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
      </section>
      <section className="personalize">
        <h3>Personalize your information</h3>
        <p>
          Choose your age and sex to see how other people like you were
          diagnosed and treated.
        </p>
        <div className="controls">
          <div>
            <BiologicalSexButton
              value="male"
              title="Male"
              selected={biologicalSex === "male"}
              onSelect={handleBiologicalSexChange}
            />
            <BiologicalSexButton
              value="female"
              title="Female"
              selected={biologicalSex === "female"}
              onSelect={handleBiologicalSexChange}
            />
          </div>
          <div>
            <span>Age:</span>
            <select onChange={handleAgeChange} value={age}>
              {ageOptions.map(option => (
                <option key={`${option}`}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <section>
        {loading && "Loading ..."}
        {personalizedData && (
          <PersonalizedConditionsInfo
            title={title}
            personalizedData={personalizedData}
          />
        )}
      </section>
      <section className="brand">
        <a href="http://khealth.ai">
          <img width={50} src={logo} />
          <p>This information is provided by K Health</p>
        </a>
      </section>
    </div>
  );
};

export default Condition;
