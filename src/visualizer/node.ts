import { NodeType, Position } from "../types"
import { createElement, createElementNS } from "./utils"

export class SVGNode {
    type: NodeType
    location: Position
    value: Record<string, string> | string | number
    children: SVGNode[] = []
    el: SVGElement

    // Default size
    size = {
        width: 300,
        height: 100
    }

    constructor(type: NodeType, location: Position, value: Record<string, string> | string | number) {
        this.type = type
        this.location = location
        this.value = value
        this.el = this.getCard()
    }
    setSize() {
        this.size = {
            width: 300, 
            height: this.el.querySelector('.object-text-wrapper')!.clientHeight ?? 100
        }
    }
    updateSize() {
        this.setSize()
        this.el.querySelector('rect')?.setAttribute('width', this.size.width.toString())
        this.el.querySelector('rect')?.setAttribute('height', this.size.height.toString())
        this.el.querySelector('foreignObject')?.setAttribute('width', this.size.width.toString())
        this.el.querySelector('foreignObject')?.setAttribute('height', this.size.height.toString())
    }
    getCard(): SVGElement {
        let g = createElementNS('g', {class: 'card'}, {}, (gEl) => {
            let rectSize = this.size
            gEl.append(
                createElementNS("rect", { 
                    x: this.location.x, 
                    y: this.location.y, 
                    width: rectSize.width, 
                    height: rectSize.height, 
                    fill: "rgba(50,50,50)",
                    rx: 10,
                    "fill-opacity": .8
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
    highlight(obj: Record<string, any> | string | number): HTMLElement {
        let wrapper = createElement('ul', { class: 'object-text-wrapper' })
        if(typeof obj == 'object') {
            for(const key in obj) {
                let val = obj[key]
                if(typeof val == 'object') continue 
                else {
                    // Create key-value span
                    let newEl = createElement('li', { class: "object-kv" }, {}, (el) => {
                        let keyEl = createElement('span', { class: "object-key" })
                        keyEl.innerText = key + ': '
                        let valueEl = createElement('span', { class: "object-value" })
                        valueEl.innerText = val
                        el.append(keyEl, valueEl)
                    })
                    wrapper.append(newEl)
                }
            }
        }

        return wrapper
    }

    addChildren(child: SVGNode) {
        this.children.push(child)
    }
}
