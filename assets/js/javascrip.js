let precio = 400000;
let cuenta = 0;

let precioSpan = document.querySelector(".precio-inicial");
let valorTotal = document.querySelector(".valor-total");
let unidad = document.querySelector(".cantidad");
let buttonsubir = document.querySelector(".buttonA");
let buttonbajar = document.querySelector(".buttonB");

buttonsubir.addEventListener("click", updateButtonsubir);

function updateButtonsubir() {
  let unidades = document.querySelector(".cantidad");
  cuenta = Number(unidades.innerHTML);
  cuenta = cuenta + 1;
  unidades.innerHTML = cuenta;
  valorTotal.innerHTML = cuenta * precio;
}

buttonbajar.addEventListener("click", updatebuttonbajar);
function updatebuttonbajar() {
  let unidades = document.querySelector(".cantidad");
  cuenta = Number(unidades.innerHTML);
  cuenta = cuenta - 1;
  unidades.innerHTML = cuenta;
  valorTotal.innerHTML = cuenta * precio;
}

precioSpan.innerHTML = precio;
