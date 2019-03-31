interface NamedPerson {
  firstName: string
  age?: number
  greet: (lastName: string) => void
  // This means any key name and value won't throw a compiler error.
  [propName: string]: any
}

function greet (person: NamedPerson) {
  console.log('Hello, ' + person.firstName)
}

function changeName (person: NamedPerson) {
  person.firstName = 'Razwan'
}

let person: NamedPerson = {
  firstName: 'Raz',
  age: 36,
  hobbies: ['Reading', 'Meditation'],
  greet (lastName: string): void {
    console.log('Hi, my name is ' + this.firstName + ' ' + lastName + '!')
  }
}

greet(person)
changeName(person)
greet(person)
person.greet('Smith')

// This gets checked stricter than above, where it is assigned to a variable
// first. Same with type aliases.
// greet({ firstName: 'Raz', age: 36 })

class Person implements NamedPerson {
  firstName = ''
  greet (lastName: string) {
    console.log('Hi, my name is ' + this.firstName + ' ' + lastName + '!')
  }
}

person = new Person()
person.firstName = 'Georgina'
greet(person)
person.greet('Something')

// Function types

interface DoubleValueFunc {
  (number1: number, number2: number): number
}

let doubleFunc: DoubleValueFunc
doubleFunc = function (number1: number, number2: number): number {
  return (number1 + number2) * 2
}

// Interface inheritence

interface AgedPerson extends NamedPerson {
  age: number
  //  greet: (lastName: string) => string
}

let oldPerson: AgedPerson = {
  age: 80,
  firstName: 'Something',
  greet () {
    console.log('This is not supposed to work')
  }
}

oldPerson.greet('myname')
