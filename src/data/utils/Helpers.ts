export function notNullOPrEmpty<T>(value: T[]): asserts value is NonNullable<Array<T>> {
    if (value === null || value.length === 0) {
        throw new Error("Value is null or empty")
    }
}

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
    if (!value) throw Error("Expected 'val' to be defined but received " + value)
}

export const roundTo2Decimals = (value: number) => Math.round(value * 100) / 100

