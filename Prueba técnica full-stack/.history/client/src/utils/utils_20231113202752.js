export function calculateAntiquityInDays(date) {
  return new Date() - new Date(date) / 86400;
}
