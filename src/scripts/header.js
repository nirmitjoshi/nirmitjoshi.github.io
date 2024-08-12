document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const navButtons = document.querySelectorAll(".color-change button");
  const colorButtonMobile = document.querySelector(".nav-mobile button");

  const colors = [
    { key: "w", color: "rgb(255, 255, 255)", name: "white" },
    { key: "l", color: "rgb(180, 190, 254)", name: "lavender" },
    { key: "g", color: "rgb(166, 227, 161)", name: "green" },
    { key: "m", color: "rgb(203, 166, 247)", name: "mauve" },
  ];

  let currentColorIndex = 0;

  const updateColor = (color) => {
    root.style.setProperty("--text-color", color);
  };

  navButtons.forEach((button, index) => {
    const color = colors[index + 1] || colors[0];
    button.addEventListener("mouseover", () => {
      button.style.setProperty("--hover-color", color.color);
    });
    button.addEventListener("click", () => {
      updateColor(color.color);
    });
  });

  colorButtonMobile.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    updateColor(newColor.color);
    colorButtonMobile.textContent = `[${newColor.key}]`;
  });
});
