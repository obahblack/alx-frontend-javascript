export default function getStudentsByLocation(studentLists, city) {
  const newArray = studentLists.filter((students) => students.location === city);
  return newArray;
}
