$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
      type: 'POST',
      url: 'https://af9618c4-a602-4633-ade9-8b7152b7c1a1-00-od1vbydpfhbj.riker.replit.dev/', // Substitua pelo URL do seu servidor no Replit
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        alert(response); // Exibe a mensagem de sucesso
        $('form')[0].reset(); // Limpa o formulário
      },
      error: function(xhr, status, error) {
        alert('Erro ao enviar arquivo para o Google Drive.');
        console.error(error);
      }
    });
  });
});
