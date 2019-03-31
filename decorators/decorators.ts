function logged(constructor: Function) {
  console.log(constructor)
}

@logged
class Person {
  constructor() {
    // This function will be passed to the decorator as argument
    console.log('Hello')
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : () => {}
}

@logging(true)
class Car {}

// Advanced
function printable(constructor: Function) {
  constructor.prototype.print = function() {
    console.log(this)
  }
}

// Multiple decorators
@logging(true)
@printable
class Plant {
  name = 'Green plant'
}

const plant = new Plant()
;(<any>plant).print()

// Method decorator
function editable(value: boolean) {
  return function(
    // target is either a constructor (if used on a static method) or a
    // prototype (if used on an instance method).
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value
  }
}

// Property decorator
function overwritable(value: boolean) {
  return function(target: any, propName: string): PropertyDescriptor {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    }
    // This will throw an error because it prevents even constructor write to
    // projectName.
    return newDescriptor
  }
}

class Project {
  @overwritable(false)
  projectName: string

  constructor(name: string) {
    this.projectName = name
  }

  @editable(false)
  calcBudget() {
    console.log(1000)
  }
}

const project = new Project('Super project')
project.calcBudget()
// This will fail at runtime (why?)
project.calcBudget = function() {
  console.log(2000)
}
project.calcBudget()

// Parameter decorator (target is constructor/prototype)
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target: ', target)
  console.log('MethodName: ', methodName)
  console.log('ParamIndex: ', methodName)
}

class Course {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000)
    } else {
      console.log(2000)
    }
  }
}

const course = new Course('Typescript')
course.printStudentNumbers('anything', true)
course.printStudentNumbers('anything', false)
