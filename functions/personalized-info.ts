import * as conditions from "../conditions.service";

export async function handler(event, context) {
  const { condition, biologicalSex, gender } = event.queryStringParameters;
  const personalized = conditions.getPersonalizedCondition(
    condition,
    biologicalSex,
    gender
  );
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
