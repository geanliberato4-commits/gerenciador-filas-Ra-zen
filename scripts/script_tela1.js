const chamadaDiv = document.getElementById('chamada');
const somChamada = document.getElementById('somChamada');

function mostrarChamada(nome, placa, guiche) {
  chamadaDiv.innerHTML = `Motorista ${nome}<br>Placa ${placa}<br>Dirija-se ao Guichê ${guiche}`;
  chamadaDiv.style.display = 'block';
  somChamada.currentTime = 0;
  somChamada.play();
  setTimeout(() => { chamadaDiv.style.display = 'none'; }, 10000);
}
