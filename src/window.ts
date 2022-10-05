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