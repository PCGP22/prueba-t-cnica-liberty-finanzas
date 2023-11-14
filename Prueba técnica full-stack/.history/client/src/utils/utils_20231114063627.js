//This function calculates how many days have passed since a date
export function calculateAntiquityInDays(date) {
  let parsedDate = parseDate(date);
  const CONSTANT_Ms_TO_DAYS = 86400000;
  let today = new Date();
  let comparisonDate = new Date(parsedDate);
  return Math.trunc((today - comparisonDate) / CONSTANT_Ms_TO_DAYS) - 1;
}

//transforms the date DD/MM/YYYY to an acceptable MM/DD/YYYY
function parseDate(date) {
  let stringToArray = date.split("/");
  let temp = stringToArray[0];
  stringToArray[0] = stringToArray[1];
  stringToArray[1] = temp;
  return stringToArray.join("/");
}
