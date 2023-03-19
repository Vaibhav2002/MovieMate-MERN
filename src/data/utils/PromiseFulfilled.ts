export function isFulfilled<T>(val:PromiseSettledResult<T>): val is PromiseFulfilledResult<T>{
    return val.status === 'fulfilled'
}