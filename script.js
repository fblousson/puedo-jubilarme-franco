let edad = parseInt(prompt("Ingresa tu edad:"));
let genero = prompt("Ingresa tu género (f para femenino, m para masculino):").trim().toLowerCase();

if ((genero === "f" && edad >= 60) || (genero === "m" && edad >= 65)) {
  alert("¡Estás en edad de jubilarte!");
} else {
  alert("Aún no estás en edad de jubilarte.");
}