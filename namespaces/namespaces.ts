/// <reference path='circleCircumference.ts' />
/// <reference path='circleArea.ts' />

// With namespace imports
// tsc app.ts --outfile app.js --watch

// Without namespace imports
// tsc --outfile app.js circleCircumference.ts circleArea.ts app.ts --watch

const PI = 1

// Import nested namespace from another namespace.
import MyMathArea = MyMath.Area

const circumference = MyMath.Circumference.calculateCircumference(5)
const area = MyMathArea.calculateArea(5)

console.log({ circumference, area })
