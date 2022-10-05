import { NodeType, Position } from "../types"
import { createElement, createElementNS } from "./utils"

export class SVGNode {
    type: NodeType
    location: Position
    value: Record<string, string>
    children: SVGNode[] = []

    constructor(type: NodeType, location: Position, value: Record<string, string>) {
        this.type = type
        this.location = location
        this.value = value
    }
    getSize() {
        return {
            width: 300,
            height: 150,
        }
    }
    getCard(): SVGElement {
        let g = createElementNS('g', {class: 'card'}, {}, (gEl) => {
            let rectSize = this.getSize()
            gEl.append(
                createElementNS("rect", { 
                    x: this.location.x, 
                    y: this.location.y, 
                    width: rectSize.width, 
                    height: rectSize.height, 
                    fill: "rgba(100,100,100,.9)", 
                }),
                createElementNS("foreignObject", {
                    x: this.location.x, 
                    y: this.location.y, 
                    width: rectSize.width, 
                    height: rectSize.height, 
                }, {}, 
                (foreignElement) => {
                    foreignElement.append(this.highlight(this.value))
                })
            )
        })

        return g
    }
    highlight(obj: Record<string, any>): HTMLElement {
        let wrapper = document.createElement('ul')
        for(const key in obj) {
            let val = obj[key]
            if(typeof val == 'object') continue 
            else {
                // Create key-value span
                let newEl = createElement('li', { class: "object-kv" }, {}, (el) => {
                    let keyEl = createElement('span', { class: "object-key" })
                    keyEl.innerText = key
                    let valueEl = createElement('span', { class: "object-value" })
                    valueEl.innerText = val
                    el.append(keyEl, valueEl)
                })
                wrapper.append(newEl)
            }
        }

        return wrapper
    }

    addChildren(child: SVGNode) {
        this.children.push(child)
    }
}
