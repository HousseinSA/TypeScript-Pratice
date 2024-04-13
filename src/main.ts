// // // type aliases
// // type stringOrNumber = string | number
// // type stringNumberArray = (string | number)[]
// // interface clubs {
// //   name: string
// //   active: boolean
// //   compition: stringNumberArray
// // }

// // // literal types
// // let myName: "Hussein"

// // // functions
// // const add = (a: number, b: number): number => {
// //   return a + b
// // }

// // const logMsg = (message: any): void => {
// //   console.log(message)
// // }

// // // type mathfunction = (a: number, b: number) => number

// // // let multi: mathfunction = (a: number, b: number) => {
// // //   return a * b
// // // }
// // // console.log(multi)

// // // rest parameters
// // const total = (...nums: number[]): number => {
// //   return nums.reduce((prev, curr) => prev + curr)
// // }

// // console.log(total(1, 2, 3, 4, 5))

// // function addAll(a: number, b: number, c?: number): number {
// //   if (c !== undefined) {
// //     return a + b + c
// //   }
// //   return a + b
// // }
// // console.log(addAll(1, 2, 3))

// // const createError = (errorMsg: string): never => {
// //   throw new Error(errorMsg)
// // }

// // const infinite = () => {
// //   let i: number = 1
// //   while (true) {}
// // }

// // const img = document.querySelector("img") as HTMLImageElement
// // img.src

// // clasTemplateStringsArray

// class coder {
//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "typescript"
//   ) {
//     ;(this.name = name),
//       (this.music = music),
//       (this.age = age),
//       (this.lang = lang)
//   }
//   public getAge() {
//     return `hello i'm ${this.age}`
//   }
// }

// const hussein = new coder("hussein", "pop", 27)

// console.log(hussein.getAge())
// // console.log(hussein.age)
// // console.log(hussein.lang)

// class webdev extends coder {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string
//     age: number,
//   ) {
//     super(name, age, music)
//     this.computer
//   }
//   public getLang() {
//     return `i write ${this.lang}`
//   }
// }

// const neji = new webdev("HP", "neji", "Lofi", 25)
// console.log(neji.getLang())

// interface player {
//   name:string,
//   team:string,
//   play(action:string):string
// }

// class amazingPlayer implements player {
//   name:string
//   team:string
//    constructor(name:string, team:string){
// this.name= name,  this.team= team
//    }
//    play(action:string){
//     return `${this.name} ${action} with ${this.team}`
//    }
// }
// const player = new amazingPlayer('hussein', 'liverpool')

// console.log(player.play('amazing playing'))

// //

// class Peeps {
//   static count :number =0
//   static getCount():number{
//     return Peeps.count
//   }
//   public id:number

//   constructor(public name:string){
//     this.name = name
//     this.id = ++Peeps.count
//   }
// }
// const peep = new Peeps('neji')
// console.log(peep.id, peep.name)

// //
// class bands {
//   private dataState:string[]

//   constructors(dataState:string[]){
//     this.dataState = this.dataState
//   }
//   public get data():string[]{
//     return this.dataState
//   }
//   public set data(value:string[]){
//     if(Array.isArray(value) && value.every(el=>typeof el === 'string')){
//       this.dataState = value
//       return
//     }else throw new Error("params is not array of strings")
//   }
// }
// const mybands = new bands()
// mybands.data = (['one direction ', 'colplay',
// 'one Republic']
// )
// console.log(mybands.data)
// mybands.data = ["thousands"]

// interface transaction {
//   pizza: number
//   books: number
//   jobs: number
// }

// interface transactionObject {
//   [index: string]: number
// }

// const transactionList: transactionObject = {
//   cars: 4,
//   Laptops: 5,
//   cats: 10,
// }
// const getTransactionTotal = (transactionValue: transactionObject): number => {
//   let value = 0
//   for (const transation in transactionValue) {
//     value += transactionValue[transation]
//   }
//   return value
// }
// console.log(getTransactionTotal(transactionList))

// interface onepiece {
//   [key: string]: string | number | number[] | undefined
//   name: string
//   style: string
//   ranking: number
//   weakness: number[]
// }

// const Zoro: onepiece = {
//   name: "rorona zoro ",
//   style: "sword",
//   ranking: 2,
//   weakness: [2],
// }
// for (const key in Zoro) {
//   console.log(`${key}: ${Zoro[key]}`)
// }

// interface Income {
//   [key:string]:number
//   salary:number
//   bonus:number
//   sidehustle:number
// }

// type streams = "salary" | "bonus" | "sidehustle"

// type income = Record<streams, number | string>

// const monthlyIncome: income = {
//   salary: 500,
//   bonus: 200,
//   sidehustle: 300,
// }

// for (const value in monthlyIncome) {
//   console.log(monthlyIncome[value as  keyof income])
// }

// const echo = <T>(arg: T): T => arg
// const isObje = <T>(arg: T): boolean => {
//   return typeof arg === "object" && !Array.isArray(arg) && arg !== null
// }
// console.log(isObje(true))
// console.log(isObje([1, 2]))
// console.log(isObje({ isObje: true }))
// console.log(isObje(false))

// const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
//   if (Array.isArray(arg) && !arg.length) {
//     return { arg, is: false }
//   }
//   if (isObje(arg) && !Object.keys(arg as keyof T)) {
//     return { arg, is: false }
//   }
//   return { arg, is: !!arg }
// }

// console.log(isTrue(false))
// console.log(isTrue(0))
// console.log(isTrue(true))
// console.log(isTrue(1))
// console.log(isTrue("hussein"))
// console.log(isTrue({ name: "hussein" }))

// interface hasId {
//   id: number
// }

// const checkingUser = <T extends hasId>(user: T): T => {
//   return user
// }
// console.log(checkingUser({ id: 45 }))

// const getUserProporty = <T extends hasId, k extends keyof T>(
//   users: T[],
//   key: k
// ): T[k][] => {
//   return users.map((user) => user[key])
// }
// const users = [
//   { id: 1, name: "hussein", job: "software enginer" },
//   { id: 1, name: "neji", job: "neji " },
// ]
// console.log(getUserProporty(users, "name"))

// interface hasId {
//   id: number
// }

// const getUserId = <T extends hasId>(userId: T): T => {
//   return userId
// }

// console.log(getUserId({ name: "hussein" }))
// genetics
// class stateObject<T> {
//   private data: T
//   constructor(value: T) {
//     this.data = value
//   }

//   get state(): T {
//     return this.data
//   }
//   set state(value: T) {
//     this.data = value
//   }
// }
// const setValue = new stateObject("hussein")
// console.log(setValue.state)
// setValue.state = "love"

// const anotherValue = new stateObject<(string | number | boolean)[]>([
//   1,
//   "hussein",
//   true,
// ])
// console.log(anotherValue.state)

//
// utily types

// partial

// interface Assignment {
//   studentId: string
//   title: string
//   grade: number
//   varified?: boolean
// }

// const updateAssignment = (
//   assign: Assignment,
//   propsToUpate: Partial<Assignment>
// ): Assignment => {
//   return { ...assign, ...propsToUpate }
// }

// const studentInfo: Assignment = {
//   studentId: "afklj342",
//   title: "hussein",
//   grade: 4233,
//   varified: true,
// }

// console.log(updateAssignment(studentInfo, { title: "first project" }))

// // required and readonly
// const requirdAssignment = (assing: Required<Assignment>): Assignment => {
//   return assing
// }

// console.log(
//   requirdAssignment({
//     studentId: "fasd",
//     title: "houssein",
//     grade: 1,
//     varified: false,
//   })
// )

// record

// type students = "houssein" | "neji"
// type grades = "A" | "B" | "C" | "D" | "F"

// const studentsGrade: Record<students, grades> = {
//   houssein: "A",
//   neji: "B",
// }

// // pickk or omit
// type assignUserValue = Pick<Assignment, "studentId" | "grade">

// const score: assignUserValue = {
//   grade: 2342,
//   studentId: "afklj342",
// }
// type omitedAssignment = Omit<Assignment, "title" | "varified">

// const omitedValues: omitedAssignment = {
//   grade: 2342,
//   studentId: "afklj342",
// }

// // explode and extract

// type removeGrade = Exclude<grades, "U">
// type getTheHightGrade = Extract<grades, 'A'>

// return type

// const createNewAssign = (name: string, value: number) => {
//   return { name, value }
// }

// type NewAssing = ReturnType<typeof createNewAssign>

// const gettingValueObject: NewAssing = createNewAssign("houssein", 23)
// console.log(gettingValueObject)

// type AssignParams = Parameters<typeof createNewAssign>

// const getParams: AssignParams = ["lauv", 864]

// const paramsValue: NewAssing = createNewAssign(...getParams)
// console.log(paramsValue)

// // awaited

// interface User {
//   id: number
//   name: string
//   email: string
//   username: string
// }

// const users = "https://jsonplaceholder.typicode.com/users"

// const fetchUsers = async (): Promise<User[]> => {
//   const data = await fetch(users)
//     .then((res) => {
//       return res.json()
//     })
//     .catch((error) => {
//       if (error instanceof Error) {
//         console.log(error.message)
//       }
//     })

//   return data
// }
// type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

// fetchUsers().then((res) => console.log(res))

//
// Funcion type expression
// function greeter(fn: (s: string) => void) {
//   fn("hello there")
// }

// function printGreeter(s: string) {
//   console.log(s)
// }

// greeter(printGreeter)
// func with descreption property

// type FuncDescription = {
//   description: string
//   (arg: number): boolean
// }

// function getFuncInfo(fn: FuncDescription) {
//   return console.log(`${fn.description} -  ${fn(10)}`)
// }

// function addingProps(num: number) {
//   return num > 5
// }

// addingProps.description = "is 10 greater than this number?"

// getFuncInfo(addingProps)

// generic

// function something<Type>(arr: Type[]): Type | undefined {
//   return arr[0]
// }

// console.log(something([false, "killer", 3, "hello"]))

// function interface

// function map<Input, Output>(
//   array: Input[],
//   fn: (arg: Input) => Output
// ): Output[] {
//   return array.map(fn)
// }

// console.log(map([1, 2, 3, 4, 5], (n) => n + 10))

// function constraints

// function getTheLongest<Type extends { length: number }>(a: Type, b: Type) {
//   if (a.length > b.length) {
//     return a
//   } else {
//     return b
//   }
// }

// console.log(getTheLongest([1, 2, 4, 5], [12, 4, 5, 2, 32, 1]))

// Specifying Type Arguments

// function mergeArray<Type>(arr1: Type[], arr2: Type[]): Type[] {
//   return arr1.concat(arr2)
// }

// optinal parameters & optional callback parameters

// function loop(arr: any[], callback: (arg: any, index?: number) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i)
//   }
// }

// loop([1, 2, 3, 4, 5], (arg) => console.log(arg))

// filter function

