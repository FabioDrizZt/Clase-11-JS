/* const bucle = setInterval(() => {
  console.log("Me ejecuto cada 1seg");
}, 1000);

const hacerAlgo = (callback) => {
  callback;
};

hacerAlgo(bucle);
setTimeout(() => {
  clearInterval(bucle);
}, 5000); */

let posX = 0;
let posY = 0;
let velocidad = 10;
const caja = document.querySelector("#caja");
const speed = document.querySelector("p>span");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  document.body.style.cursor = "none";
  caja.style.left = mouseX + "px";
  caja.style.top = mouseY + "px";
});
document.addEventListener("keydown", (e) => {
  console.dir(caja.style.left);
  console.log(e.key);
  switch (e.key) {
    case "+":
      velocidad += 5;
      speed.textContent = velocidad;
      break;
    case "-":
      velocidad -= 5;
      speed.textContent = velocidad;
      break;
    case "ArrowUp":
      posY -= velocidad;
      caja.style.top = posY + "px";
      break;
    case "ArrowDown":
      posY += velocidad;
      caja.style.top = posY + "px";
      break;
    case "ArrowLeft":
      posX -= velocidad;
      caja.style.left = posX + "px";
      break;
    case "ArrowRight":
      posX += velocidad;
      caja.style.left = posX + "px";
      break;
    default:
      break;
  }
});
