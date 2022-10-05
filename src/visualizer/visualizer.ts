import { getMousePosition, resizeSVG } from "../window"
import { SVGNode } from "./node"
import { createElement } from "./utils"

class Visualizer {
    svg: SVGElement 
    cards: SVGElement
    data: any
    rootNode: SVGNode|null = null
    viewbox = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    }

    constructor(svg: SVGElement, data: any) {
        this.svg = svg
        this.cards = svg.querySelector('#cards')!
        this.data = data 

        this.watchSize()
        this.init()
        this.draw()
        this.events()
    }

    /**
     * Create the position object
     */
    init() {
        // Create the root node
        if(Array.isArray(this.data)) {
            this.rootNode = new SVGNode("empty", { x: 200, y:500 }, "")
            return
        }

        this.rootNode = new SVGNode("object", { x: 200, y: 500 }, this.data)
    }

   
    draw(node: SVGNode|null = null) {
        if(node == null) {
            node = this.rootNode!
        } 
        this.cards.append(node.getCard())
    }

    watchSize() {
        window.addEventListener('resize', resizeSVG)
        
        // set viewbox
        resizeSVG()
        this.updateViewbox()
    }
    
    updateViewbox() {
        this.svg.setAttribute('viewBox', `${this.viewbox.x} ${this.viewbox.y} ${this.svg.getAttribute('width')} ${this.svg.getAttribute('height')}`)
    }

    events() {
        this.draggingEvent()
    }
    
    private draggingEvent() {
        let isDragging = false 
        let dragFromOffset = {
            x: this.viewbox.x,
            y: this.viewbox.y,
        }
        let mouseDownFrom = {
            x: 0,
            y: 0
        }
        
        this.svg.addEventListener('mousedown', (e) => {
            let mousePos = getMousePosition(this.svg, e)
            mouseDownFrom = mousePos
            isDragging = true
            dragFromOffset = {
                x: this.viewbox.x,
                y: this.viewbox.y,
            }
        })
        
        this.svg.addEventListener('mouseup', (e) => {
            isDragging = false
        })
        
        this.svg.addEventListener('mousemove', (e) => {
            if(!isDragging) return
            let mousePos = getMousePosition(this.svg, e)
            this.viewbox.x = dragFromOffset.x - (mousePos.x - mouseDownFrom.x)
            this.viewbox.y = dragFromOffset.y - (mousePos.y - mouseDownFrom.y)
            
            this.updateViewbox()
        })

    }

    drag() {

    }
}

export const createVisualizer = (svg: SVGElement, data: any) => {
    return new Visualizer(svg, data)
}