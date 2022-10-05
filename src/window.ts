export const resizeSVG = () => {
    let svg = document.querySelector('#visualizer')
    svg?.setAttribute('width', svg.clientWidth.toString());
    svg?.setAttribute('height', svg.clientHeight.toString());
    console.log('resizing', svg?.clientWidth)
}