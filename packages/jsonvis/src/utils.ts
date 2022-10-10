export const createElementNS = (name: string, attrs?: Record<string, string|number>, styles?: Record<string, string>, cb?: (el: SVGElement) => void) => {
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
export const resizeSVG = () => {
    let svg = document.querySelector('#visualizer')
    svg?.setAttribute('width', svg.clientWidth.toString());
    svg?.setAttribute('height', svg.clientHeight.toString());
    console.log('resizing', svg?.clientWidth)
}

export const getMousePosition = (el: HTMLElement | SVGElement, event: MouseEvent) => {
    let rect = el.getBoundingClientRect()
    return {
        x: event.clientX - rect.x,
        y: event.clientY - rect.y  
    }
}

export const isObject = (obj: any) => {
    if(!Array.isArray(obj) && typeof obj == 'object') {
        return true
    }
    return false
}

export const isPrimitive = (test: any) => {
    return test !== Object(test);
}
    