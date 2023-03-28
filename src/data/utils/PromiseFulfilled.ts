export function isFulfilled<T>(val:PromiseSettledResult<T>): val is PromiseFulfilledResult<T>{
    return val.status === 'fulfilled'
}

export function areFulfilled(val: PromiseSettledResult<any>): val is PromiseFulfilledResult<any> {
    return val.status === 'fulfilled'
}