import { initWebsocket } from './socket'
import './style.css'
import { createVisualizer } from './visualizer/visualizer'
import { resizeSVG } from './window'


let data = {
  "name": "Ahmad Saugi",
  "occupation": "Nothing",
  "children": [
    'asd',
    'abc',
    'zcxc'
  ]
}


const svg = document.querySelector<SVGElement>('#visualizer')
const vis = createVisualizer(svg!, data)

window.addEventListener('DOMContentLoaded', initWebsocket)
