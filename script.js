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
  const musica = document.getElementById("musica");
  musica.play().catch(() => {});

  // MAPA
  const mapa = document.getElementById("mapa");
  mapa.style.display = "block";
  mapa.innerHTML = `
    <iframe
      width="100%"
      height="320"
      style="border:0"
      loading="lazy"
      src="https://maps.google.com/maps?q=-32.940241,-60.672443&z=17&output=embed">
    </iframe>
  `;

  // CORAZÓN
  const corazon = document.getElementById("corazon");
  corazon.style.animation = "latir 1.2s infinite";

  // POLAROIDS
  const cont = document.getElementById("polaroids");
  cont.style.display = "block";

  const polaroids = document.querySelectorAll(".polaroid");
  polaroids.forEach((p, i) => {
    setTimeout(() => {
      p.style.opacity = 1;
      p.style.transform = p.style.transform.replace("scale(0.6)", "scale(1)");
    }, i * 900);
  });
};
