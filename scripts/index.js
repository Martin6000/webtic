const barra = document.getElementById("barra-progreso");

function actualizarBarra() {
    const scrollTop = window.scrollY;
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const porcentaje = (scrollTop / alturaTotal) * 100;
    barra.style.width = porcentaje + "%";
}

window.addEventListener("scroll", actualizarBarra);

const boton = document.querySelector("butondown");
let direction = 1;
let position = 0;

function rebote() {
    position += direction;
    if(position > 5 || position < 0) direction *= -1;
    boton.style.transform = `translateY(-${position}px)`;
    requestAnimationFrame(rebote);
}

rebote();
