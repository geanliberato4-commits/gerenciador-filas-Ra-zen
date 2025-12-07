document.getElementById('formSenha').addEventListener('submit', function(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const placa = document.getElementById('placa').value;
  const tipo = document.getElementById('tipo').value;

  fetch('http://localhost:3000/enviar-senha', { 
    method: 'POST', 
    headers:{'Content-Type':'application/json'}, 
    body: JSON.stringify({nome, placa, tipo})
  });
  alert('Senha enviada!');
});
