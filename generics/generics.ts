// Simple generic
function echo (data: any) {
  return data
}

console.log(echo('Max'))
console.log(echo(27))
console.log(echo({ name: 'Max', age: 27 }))

// Better generic
function betterEcho<T> (data: T) {
  return data
}

console.log(betterEcho('Max').length)
console.log(betterEcho(27)) // calling .length here will throw a compiler error
console.log(betterEcho<number>(27))
console.log(echo({ name: 'Max', age: 27 }))

// Build in generics
const testResults: Array<number> = [1, 2]
testResults.push(3)
// testResults.push('4') will throw a compiler error

// Arrays
function printAll<T> (args: Array<T>) {
  // T[] works here too
  args.forEach(element => {
    console.log(element)
  })
}

// Generic types
const echo2: <T>(data: T) => T = betterEcho
console.log(echo2<string>('Me'))

// Generic class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T
  multiplyValue: U
  calculate (): number {
    return +this.baseValue * +this.multiplyValue
  }
}

const simpleMath = new SimpleMath<number>()
simpleMath.baseValue = 10
simpleMath.multiplyValue = 20
console.log(simpleMath.calculate())

const anotherSimpleMath = new SimpleMath<string, number>()
anotherSimpleMath.baseValue = '10'
anotherSimpleMath.multiplyValue = 20
console.log(simpleMath.calculate())
