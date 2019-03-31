module MyMath {
  export namespace Circumference {
    const PI = 3.142

    export function calculateCircumference (diameter: number): number {
      return PI * diameter
    }
  }
}
