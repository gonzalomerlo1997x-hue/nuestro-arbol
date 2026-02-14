// FECHA DE INICIO
const inicio = new Date("2023-09-12T16:23:00");

// CONTADOR
function actualizarTiempo() {
  const ahora = new Date();
  const diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const segundos = Math.floor(diff / 1000) % 60;

  document.getElementById("tiempo").innerText =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarTiempo, 1000);
actualizarTiempo();

// PLAY
document.getElementById("play").onclick = () => {

  document.getElementById("mapa").style.display = "block";
  document.getElementById("zona-arbol").style.display = "block";

  document.getElementById("mapa").innerHTML = `
    <iframe
      width="100%"
      height="320"
      style="border:0"
      loading="lazy"
      src="https://maps.google.com/maps?q=-32.940241,-60.672443&z=17&output=embed">
    </iframe>
  `;

  const frutos = document.querySelectorAll(".fruto");

  frutos.forEach((fruto, i) => {
    setTimeout(() => {
      fruto.style.opacity = 1;
      fruto.style.transform = "scale(1)";
    }, i * 900);
  });
};
