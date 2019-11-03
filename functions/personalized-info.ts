import personalizedData from "./personalizedData";

const getKey = (condition_id, age, gender) =>
  `${condition_id}-${age}-${gender}`;

const keyToData = {};

for (const condition of personalizedData) {
  /** @todo use name here */
  keyToData[
    getKey(condition.condition_id, condition.age, condition.gender)
  ] = condition;
}

export async function handler(event, context) {
  const { condition, biologicalSex, gender } = event.queryStringParameters;
  const personalized = keyToData[getKey(condition, biologicalSex, gender)];
  if (!personalized) {
    return {
      statusCode: 404,
      body: ""
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(await personalized)
  };
}
