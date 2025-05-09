const cartasTarot = [
  {
    nombre: "El Loco",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_00_Fool.jpg"
  },
  {
    nombre: "La Emperatriz",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d2/RWS_Tarot_03_Empress.jpg"
  },
  {
    nombre: "El Mago",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/RWS_Tarot_01_Magician.jpg"
  },
  {
    nombre: "La Muerte",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d7/RWS_Tarot_13_Death.jpg"
  },
  {
    nombre: "La Estrella",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Star.jpg"
  }
  // Puedes agregar más cartas
];

function mostrarCarta(elemento) {
  const contenido = elemento.querySelector('.contenido');
  if (contenido.style.display === 'block') {
    contenido.style.display = 'none';
    contenido.innerHTML = '';
  } else {
    const carta = cartasTarot[Math.floor(Math.random() * cartasTarot.length)];
    contenido.innerHTML = `
      <div class="tarot-carta">
        <strong>${carta.nombre}</strong><br>
        <img src="${carta.imagen}" alt="${carta.nombre}">
      </div>`;
    contenido.style.display = 'block';
  }
}
