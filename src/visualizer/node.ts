import { NodeType, Position } from "../types"

export class SVGNode {
    type: NodeType
    location: Position
    value: string
    children: SVGNode[] = []

    constructor(type: NodeType, location: Position, value: string) {
        this.type = type
        this.location = location
        this.value = value
    }
    addChildren(child: SVGNode) {
        this.children.push(child)
    }
}