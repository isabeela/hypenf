document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var salario = document.getElementById('salario').value;
    var mes = document.getElementById('mes').value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="projeto"]:checked');
    const projetos = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (projetos.length === 0) {
      alert('Selecione pelo menos um projeto.');
      return;
    }

    var formData = new FormData(this);
    formData.append('salario', salario);
    formData.append('projetos', projetos.join(','));

    fetch('https://hype-nf-hypeadm.replit.app/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text())
    .then(result => {
      alert(result);
      document.querySelector('form').reset(); // Limpa o formulário
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar arquivo para o Google Drive.');
    });
  });
});
