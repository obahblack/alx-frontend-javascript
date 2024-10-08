export default function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object for the current student
      const gradeObj = newGrade.find((grade) => grade.studentId === student.id);

      // Set the grade to the found grade, or 'N/A' if not found
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
