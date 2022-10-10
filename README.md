<p align="center">

    <a href="https://zuramai.github.io/jsonvis">Demo</a>

</p>

## Develop it locally

1. Clone

```bash
git clone https://github.com/zuramai/jsonvis
cd jsonvis
```

2. Install dependencies and run

```bash
pnpm install -r
pnpm js:dev & pnpm dev 
```

3. Usage
```js
let data = {} // put your data here
const svg = document.querySelector('#visualizer')
const vis = createVisualizer(svg, data)
```


# License

MIT