class Person {
  // No need to use the this keyword.
  // Private is only available within this class.
  private type: string
  // Protected is only available within this class, and its inheritence.
  protected age: number

  // Properties can be set with a shorthand, like name below or through the
  // traditional way.
  constructor (public name: string, type: string, age: number) {
    this.type = type
    this.age = age
  }

  publicMethod () {
    return 'This is a public method'
  }

  private privateMethod () {
    return 'This is a private method'
  }

  protected protectedMethod () {
    return 'This is a protected method'
  }
}

let person = new Person('Raz', 'admin', 36)
console.log({ person })

// Inheritence
class Raz extends Person {
  constructor (type: string, age: number) {
    // Super calls the parent's constructor.
    super('Raz', type, age)
  }
}

let anotherPerson = new Raz('admin', 31)
console.log({ anotherPerson })

// Getters and setters
class Plant {
  private _species: string = 'Default'

  get species () {
    return this._species
  }

  set species (value: string) {
    if (value.length > 3) {
      this._species = value
    }
  }
}

let plant = new Plant()
console.log('First: ', plant.species)
plant.species = 'Pine tree'
console.log('Second: ', plant.species)

// Static properties or methods
class Helpers {
  static PI: number = 3.142
  static calculateCircumference (diameter: number): number {
    return this.PI * diameter
  }
}
console.log(Helpers.PI)
console.log(Helpers.calculateCircumference(5))

// Abstract classes (can only be inherited from, never instantiated)
abstract class Project {
  projectName: string = 'Default'
  budget: number = 1000

  // Only declare function signature, not the function itself.
  // Once we inherited this class, we have to implement this method in the child
  // class.
  abstract changeName(name: string): void

  calcBudget () {
    return this.budget * 2
  }
}

class ITProject extends Project {
  changeName (name: string): void {
    this.projectName = 'name'
  }
}

// Private constructors
class OnlyOne {
  private static instance: OnlyOne

  private constructor (public readonly name: string) {}

  static getInstance () {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One')
    }

    return OnlyOne.instance
  }
}
// new OnlyOne('The only one') will throw an error.
OnlyOne.getInstance()
