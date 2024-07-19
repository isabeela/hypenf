document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

      var nome = document.getElementById('nome').value;
      var email = document.getElementById('email').value;
      var salario = document.getElementById('salario').value;
      const checkboxes = document.querySelectorAll('input[type="checkbox"][name="projeto"]:checked');
      const projetos = Array.from(checkboxes).map(checkbox => checkbox.value);

      if (projetos.length === 0) {
        alert('Selecione pelo menos um projeto.');
        return;
      }

      var formData = new FormData(this);
      formData.append('salario', salario);
      formData.append('projetos', projetos.join(','));

      fetch('http://localhost:80/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.text())
      .then(result => {
        alert(result);
      })
      .catch(error => {
        console.error('Erro:', error);

      });
 

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://hype-nf-hypeadm/upload'); // Substitua pelo URL do seu servidor no Replit
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(xhr.responseText); // Exibe a mensagem de sucesso
        document.querySelector('form').reset(); // Limpa o formulário
      } else {
        alert('Erro ao enviar arquivo para o Google Drive.');
        console.error(xhr.statusText);
      }
    };
    xhr.onerror = function() {
      alert('Erro ao enviar arquivo para o Google Drive.');
      console.error(xhr.statusText);
    };
    xhr.send(formData);
  });
});
