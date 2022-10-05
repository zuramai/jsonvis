export const createElementNS = (name: string, attrs?: Record<string, string|number>, styles?: Record<string, string>, cb?: (el: SVGGElement) => void) => {
    let el = document.createElementNS("http://www.w3.org/2000/svg", name)
    
    // Set the attributes
    for(const attr in attrs) {
        el.setAttribute(attr, attrs[attr].toString())
    }
    
    
    // Set the styles
    for(const style in styles) {
        el.setAttribute(style, styles[style].toString())
    }

    if(cb) cb(el)

    return el
}

export const createElement = (name: string, attrs?: Record<string, string|number>, styles?: Record<string, string>, cb?: (el: HTMLElement) => void) => {
    let el = document.createElement(name)
    
    // Set the attributes
    for(const attr in attrs) {
        el.setAttribute(attr, attrs[attr].toString())
    }
    
    
    // Set the styles
    for(const style in styles) {
        el.setAttribute(style, styles[style].toString())
    }


    if(cb) cb(el)


    return el
}