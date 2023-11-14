export function calculateAntiquityInDays(date) {
  CONSTANT_Ms_TO_DAYS = 864000000;
  return Math.trunc(new Date() - new Date(date) / CONSTANT_Ms_TO_DAYS) - 1;
}

calculateAntiquityInDays("10/11/2023");
