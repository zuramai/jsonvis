export const createElementNS = (name: string, attrs: Record<string, string|number>, styles: Record<string, string>) => {
    let el = document.createElementNS("http://www.w3.org/2000/svg", name)
    
    // Set the attributes
    for(const attr in attrs) {
        el.setAttribute(attr, attrs[attr].toString())
    }
    
    
    // Set the styles
    for(const style in styles) {
        el.setAttribute(style, styles[style].toString())
    }


    return el
}

export const createElement = (name: string, attrs: Record<string, string|number>, styles: Record<string, string>) => {
    let el = document.createElement(name)
    
    // Set the attributes
    for(const attr in attrs) {
        el.setAttribute(attr, attrs[attr].toString())
    }
    
    
    // Set the styles
    for(const style in styles) {
        el.setAttribute(style, styles[style].toString())
    }


    return el
}