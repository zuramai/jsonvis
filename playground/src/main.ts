import './style.css'
import { createVisualizer } from 'jsonvis'


let data = {}

const getData = () => {
  const editor = document.querySelector<HTMLInputElement>('#the-editor')!
  data = JSON.parse(editor.value!)
  return data
}

getData()

const svg = document.querySelector<SVGElement>('#visualizer')
const vis = createVisualizer(svg!, data)

const renderButton = document.querySelector('#render')
renderButton?.addEventListener('click', () => {
  vis.updateData(getData())
})

