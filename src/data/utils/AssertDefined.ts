export function assertIsDefined<T>(value:T): asserts value is NonNullable<T> {
    if (!value) throw Error("Expected 'val' to be defined but received " + value)
}