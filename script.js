const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const form = document.getElementById('form');
const aiResponse = document.getElementById('aiResponse');

const perguntarAI = async () => {
  
}

const enviarFormulario = (event) => {
  event.preventDefault()
  const apiKey = apiKeyInput.value
  const game = gameSelect.value
  const question = questionInput.value

  if (apiKey == '' || game == '' || question == '') {
    alert('Por favor, preencha todos os campos')
    return
  }

  askButton.disabled = true
  askButton.textContent = 'Perguntando...'
  askButton.classList.add('loading')

  try {

  } catch (error) {
    console.log('Erro: ', error)
  } finally {
    askButton.disabled = false
    askButton.textContent = "Perguntar"
    askButton.classList.remove('loading')
  }

}
form.addEventListener('submit', enviarFormulario)