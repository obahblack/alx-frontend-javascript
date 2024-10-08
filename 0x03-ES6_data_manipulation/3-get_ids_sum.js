export default function getStudentIdsSum (students) {
  const sum = students.reduce((acc, num) => acc + num.id, 0);
  return sum;
}
