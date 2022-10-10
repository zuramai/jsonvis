<h1 align="center">JSON Visualizer</h1>

![ss](https://user-images.githubusercontent.com/45036724/194799745-ddd35971-2c2f-4c60-9110-72ca67ff5b0b.png)

<p></p>

<p align="center">
<a href="https://zuramai.github.io/jsonvis">Demo</a>
</p>

<p></p>

<p align="center">
	<img src="https://img.shields.io/github/issues/zuramai/jsonvis?style=flat-square">
	<img src="https://img.shields.io/github/stars/zuramai/jsonvis?style=flat-square"> 
	<img src="https://img.shields.io/github/forks/zuramai/jsonvis?style=flat-square">
	<img src="https://img.shields.io/github/license/zuramai/jsonvis?style=flat-square">
</p>

<p></p>

<h2 id="installation">💻 Installation</h2>

1. Clone this project
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

<p></p>

<h2 id="contribution">🤝 Contribution</h2>

I really appreciate contributions, issues and feature requests because this application is far from perfect. Feel free to pull requests and make changes to this project.

Since I finished this project myself, but there are many features and many things that can be improved, I really appreciate your help.

<p></p>

<h2 id="lisensi">📝 License</h2>

MIT license
