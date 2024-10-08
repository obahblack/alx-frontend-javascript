export default function getListStudentIds(objArrray) {
  if (Array.isArray(objArrray)) {
    const newArray = objArrray.map((person) => person.id);
    return newArray;
  }
  return [];
}
