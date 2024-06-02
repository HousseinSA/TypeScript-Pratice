// // utilty types
// console.log("this is exercies file consoles")
// interface Movie {
//   title: string
//   director?: string
//   year: number
// }

// type MovieInfo = Omit<Movie, "year">

// const movie: MovieInfo = {
//   title: "lord of the rings",
//   director: "peter jackson",
// }
// console.log(movie)

// type Students = "hussein" | "neji" | "zoro"

// type Grades = number

// type StudentGrades = Record<Students, Grades>

// const studentGrades: StudentGrades = {
//   hussein: 23,
//   neji: 23,
//   zoro: 0,
// }

// console.log(studentGrades)

// // returntype excerces
// const havingThisWorking = (a: string, age: number): object => {
//   return { a, age }
// }

// type functionReturnType = ReturnType<typeof havingThisWorking>

// const whoAreYou: functionReturnType = havingThisWorking("houssein", 27)
// console.log(whoAreYou)

// const getUsers = async (): Promise<string> => {
//   return "data"
// }

// type awaitedUsers = Awaited<ReturnType<typeof getUsers>>



// dave gray video 

const reg = /\w+/g;