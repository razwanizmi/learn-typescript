// Implied types
// string
let myName = 'Max'

// number
let age = 27
let height = 180.5

// boolean
let hasHobbies = true

// Assigned types
let num: number
num = 11

// array
let hobbies: string[] = ['Cooking', 'Sports']
let favNumbers: number[] = [1, 2, 3]

// tuples
let address: [number, string] = [5, 'Jalan Mountbatten']

// enum
enum Color {
  Grey, // 0
  Green = 100, // 100
  Blue // 101
}
let myColor: Color = Color.Green

// any
let car: any = 'BMW'
car = { make: 'BMW', model: '3 series' }

// function
function returnMyName (): string {
  return myName
}
function sayHello (): void {
  console.log('Hello')
}

// argument types
function multiply (value1: number, value2: number): number {
  return value1 * value2
}

// function types
let myMultiply: (a: number, b: number) => number
myMultiply = multiply
myMultiply(5, 2)

// objects
let userData: { name: string; age: number } = { name: 'Max', age: 27 }

// complex objects
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [1, 2, 3.142],
  output: function (all: boolean): number[] {
    return this.data
  }
}

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] }

let complex2: Complex = {
  data: [1, 2, 3.142],
  output: function (all: boolean): number[] {
    return this.data
  }
}

// union types
let myAge: number | string = 27
myAge = '27'

// check types
let finalValue = 'a string'
if (typeof finalValue === 'number') {
  console.log('Final value is a number')
}

// never
function neverReturns (): never {
  throw new Error('An error')
}

// nullable
let canBeNull: number | null = 12
canBeNull = null
