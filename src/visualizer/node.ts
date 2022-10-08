import { NodeType, Position } from "../types"
import { createElement, createElementNS } from "./utils"

export class SVGNode {
    type: NodeType
    location: Position
    value: Record<string, string> | string | number
    children: SVGNode[] = []
    el: SVGElement
    totalHeight = 0

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
        let width = 300 
        if(this.type == 'extension') width = 200

        this.size = {
            width, 
            height: this.el.querySelector('.object-text-wrapper')!.clientHeight ?? 100
        }
        console.log(this.size)
    }
    updateY(y: number) {
        this.location.y = y
        this.el.querySelector('rect')?.setAttribute('y', y.toString())
        this.el.querySelectorAll('foreignObject').forEach(f => f.setAttribute('y', y.toString()))
    }
    updateSize() {
        this.setSize()
        this.el.querySelector('rect')?.setAttribute('width', this.size.width.toString())
        this.el.querySelector('rect')?.setAttribute('height', this.size.height.toString())
        this.el.querySelector('foreignObject')?.setAttribute('width', this.size.width.toString())
        this.el.querySelector('foreignObject')?.setAttribute('height', this.size.height.toString())
    }
    getCard(): SVGElement {
        let g = createElementNS('g', {class: `card card-${this.type}`}, {}, (gEl) => {
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

            if(this.type == 'extension') {
                // Add toggle view button
                gEl.append(
                    createElementNS("foreignObject", {
                        x: this.location.x + 200 - 30, 
                        y: this.location.y, 
                        width: 30, 
                        height: 50, 
                    }, {}, 
                    (foreignElement) => {
                        foreignElement.append(
                            createElement("button", { class: "btn btn-transparent btn-toggle-view" }, {}, (btn) => {
                                btn.innerHTML = "X"
                            })
                        )
                    })
                )
            }

        })

        return g
    }
    highlight(data: Record<string, any> | string | number): HTMLElement {
        let wrapper = createElement('ul', { class: 'object-text-wrapper' })
        console.log(typeof data)
        switch (typeof data) {
            case 'object':
                // If the data is object, get the key-value pair and push it to string
                for(const key in data) {
                    let val = data[key]
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
                break;
            case 'string':
                let newEl = createElement('li', { class: "string" }, {}, (li) => {
                    li.innerHTML = data
                })
                wrapper.append(newEl)
                break;
            default:
                break;
        }

        return wrapper
    }

    addChildren(child: SVGNode) {
        this.children.push(child)
    }
}
