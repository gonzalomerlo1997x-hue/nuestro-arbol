// Fecha inicio: 12/09/2023 16:23
const inicio = new Date("2023-09-12T16:23:00");
const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  let diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);
  const horas = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);
  const minutos = Math.floor(diff / (1000 * 60));
  diff %= (1000 * 60);
  const segundos = Math.floor(diff / 1000);

  contador.textContent =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// Música con fade in
const playBtn = document.getElementById("playBtn");
const musica = document.getElementById("musica");
let started = false;

playBtn.addEventListener("click", () => {
  if (!started) {
    musica.volume = 0;
    musica.play();

    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        musica.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    playBtn.textContent = "💗 Sonando";
    started = true;
  }
});
