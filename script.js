document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Preenche o campo nome_projeto com os dados do nome e projeto selecionado
    var nome = document.getElementById('nome').value;
    console.log(nome)
    var nome_projeto_data = `${nome}`;
    var formData = new FormData(this);

    var email = document.getElementById('email').value;
    console.log(email)

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const projetos = Array.from(checkboxes).map(checkbox => checkbox.value);
    console.log(projetos);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://af9618c4-a602-4633-ade9-8b7152b7c1a1-00-od1vbydpfhbj.riker.replit.dev/upload'); // Substitua pelo URL do seu servidor no Replit
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
