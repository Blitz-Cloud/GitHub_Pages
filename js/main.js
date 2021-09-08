const svg = document.getElementsByClassName("logo");
console.log(svg);
const colors = ["red", "blue", "green", "yellow", "#03045e"];

function click() {
  const rando = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  document.documentElement.style.cssText = `--ellipse:${rando()};
  --rectangle:${rando()};`;
  console.log(1);
}
