export default function hasValuesFromArray(set, inputArray) {
  return inputArray.every((value) => set.has(value));
}
