const students = [
  { 
    name: "João", 
    grade1: 9, 
    grade2: 8
  },
  { 
    name: "Letícia", 
    grade1: 5, 
    grade2: 7
  },
  { 
    name: "Diogo", 
    grade1: 5, 
    grade2: 10
  },
  { 
    name: "Júlia", 
    grade1: 2, 
    grade2: 8
  },
];

function calculateAverage(student) {
  const average = (student.grade1 + student.grade2) / 2;
  return average;
}

function checkApproval(student) {
  const average = calculateAverage(student);
  const passingGrade = 7;
  return average >= passingGrade;
}

function calculateAverageForAllStudents(students) {
  const averages = [];
  for (const student of students) {
    const average = calculateAverage(student);
    const approved = checkApproval(student);
    averages.push({name: student.name, average, approved});
  }
  return averages;
}

const studentAverages = calculateAverageForAllStudents(students);

for (const studentAverage of studentAverages) {
  const status = studentAverage.approved ? `Parabéns, ${studentAverage.name}! Você foi aprovado(a) no curso!` : `Não foi dessa vez, ${studentAverage.name}! Tente novamente!`;
  alert(`
  A média do(a) aluno(a) ${studentAverage.name} é: ${studentAverage.average}.
  ${status}
  `);
}