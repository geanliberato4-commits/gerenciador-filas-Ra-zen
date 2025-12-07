const senhasDiv = document.getElementById('senhas');

function adicionarSenha(nome, placa, tipo){
  const div = document.createElement('div');
  div.innerHTML = `Motorista: ${nome} | Placa: ${placa} | Tipo: ${tipo}`;
  senhasDiv.appendChild(div);
}
