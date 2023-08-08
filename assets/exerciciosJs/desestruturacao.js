const student = {name: "Maison", age: 27, email:'trader@gmail.com'}

const personStudent = ({name,age,email}) => `O nome do aluno é: ${name}, com idade de ${age} anos e, com o email ${email}`

 console.log(personStudent(student))
