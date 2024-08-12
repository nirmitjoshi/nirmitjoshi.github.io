const root = document.documentElement;
const gridSize = getComputedStyle(root).getPropertyValue("--grid-size").trim();

const container = document.body;
if (container) {
  container.style.backgroundImage = `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
        `;
  container.style.backgroundSize = `${gridSize} ${gridSize}`;
}
