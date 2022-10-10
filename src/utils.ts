export const isObject = (obj: any) => {
    if(!Array.isArray(obj) && typeof obj == 'object') {
        return true
    }
    return false
}

export const isPrimitive = (test: any) => {
    return test !== Object(test);
}
    