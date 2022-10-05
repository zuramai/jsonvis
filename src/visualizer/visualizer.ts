import { resizeSVG } from "../window"
import { SVGNode } from "./node"
import { createElement } from "./utils"

class Visualizer {
    svg: SVGElement 
    cards: SVGElement
    data: any
    rootNode: SVGNode|null = null

    constructor(svg: SVGElement, data: any) {
        this.svg = svg
        this.cards = svg.querySelector('#cards')!
        this.data = data 

        this.watchSize()
        this.init()
        this.draw()
    }

    /**
     * Create the position object
     */
    init() {
        // Create the root node
        if(Array.isArray(this.data)) {
            this.rootNode = new SVGNode("empty", { x: 200, y:500 }, null)
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
    }
}

export const createVisualizer = (svg: SVGElement, data: any) => {
    return new Visualizer(svg, data)
}