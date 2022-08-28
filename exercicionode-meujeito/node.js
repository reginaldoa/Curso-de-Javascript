const paragrafos = document.querySelector(".paragrafos");
const div = document.createElement("div");
const estilos = getComputedStyle(document.body);
const background = estilos.backgroundColor;
const ps = document.querySelectorAll('p')
console.log(background);


for(let p of ps){
    console.log(p)
    p.style.backgroundColor = background;
    p.style.color="#FFFFFF"
}