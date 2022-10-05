import { resizeSVG } from "../window"
import { SVGNode } from "./node"

class Visualizer {
    svg: SVGElement
    data: any
    rootNode: SVGNode|null = null

    constructor(svg: SVGElement, data: any) {
        this.svg = svg
        this.data = data 

        this.watchSize()
        this.init()
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

        this.rootNode = new SVGNode("object", { x: 200, y: 500 }, this.objectToString(this.data as Record<string, string>))
    }

    objectToString(obj: Record<string, any>): string {

        for(const key in obj) {
            let val = obj[key]
            if(typeof val == 'object') return 
        }
    }

    draw() {
        
    }

    watchSize() {
        window.addEventListener('resize', resizeSVG)
    }
}

export const createVisualizer = (svg: SVGElement, data: any) => {
    return new Visualizer(svg, data)
}