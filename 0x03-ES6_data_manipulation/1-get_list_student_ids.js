function getListStudentIds(objArrray) {
  if (Array.isArray(objArrray)) {
    const newArray = objArrray.map((person) => person.id);
    return newArray;
  }
  return [];
}

import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));