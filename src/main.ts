import { initWebsocket } from './socket'
import './style.css'
import { createVisualizer } from './visualizer/visualizer'
import { resizeSVG } from './window'


let data = {}

const getData = () => {
  const editor = document.querySelector('#the-editor')!
  data = JSON.parse(editor.textContent!)
}

getData()

const svg = document.querySelector<SVGElement>('#visualizer')
const vis = createVisualizer(svg!, data)

window.addEventListener('DOMContentLoaded', initWebsocket)
