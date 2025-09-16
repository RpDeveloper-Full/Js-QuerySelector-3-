const imagen = document.querySelector("#imagen");
const botonImagen = document.querySelector("#btn-imagen");

botonImagen.addEventListener("click", () => {
  imagen.setAttribute("src", "https://via.placeholder.com/200x100");
  imagen.setAttribute("alt", "Imagen cambiada");
});