// Selecciona elementos
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = modal.querySelector('.close');

// Descripción fija de la paella
const paellaDescription = `Plato típico de la cocina española, originario de la Comunidad Valenciana,<br><br>que consiste en <strong>arroz seco</strong> cocido en una <strong>paellera</strong> con diferentes ingredientes, como <strong>carnes, mariscos o verduras</strong>.`;

// Para cada botón “Ver Más”
document.querySelectorAll('.card .btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); // Evita que el link navegue
    modalText.innerHTML = paellaDescription;
    modal.classList.add('active');
  });
});

// Cerrar al hacer clic en la “X”
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Cerrar al clicar fuera del contenido
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
