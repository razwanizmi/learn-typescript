namespace MyMath {
  export namespace Area {
    const PI = 3.142

    export function calculateArea (diameter: number): number {
      return PI * (diameter / 2) ** 2
    }
  }
}
