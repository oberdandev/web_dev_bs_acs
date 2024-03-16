const enviarResumoDiario =  document.querySelector('#enviarResumoDiario');
const form = document.querySelector('#formResumoDiario');

console.log(enviarResumoDiario)

const salvarResumoDiario = async(e) => {
  e.preventDefault();
  const prePayload = new FormData(form);
  const data = Object.fromEntries(prePayload)
  console.log(data)

  fetch('http://localhost:2101/resumodiario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => console.log(res))
  .then(()=> {
    alert('Resumo diário enviado com sucesso!')
    form.reset();
  })
  .catch(()=> {
    alert('erro ao enviar resumo diário. tente novamente mais tarde!')
  })
}

enviarResumoDiario.addEventListener('submit', salvarResumoDiario);
enviarResumoDiario.addEventListener('click', salvarResumoDiario);