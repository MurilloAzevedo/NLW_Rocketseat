const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const form = document.getElementById('form');
const aiResponse = document.getElementById('aiResponse');

//chave API: AIzaSyADxQhWEONUtD5XRLQFT51SdA7ooRyBZ0Q

const perguntarAI = async (question, game, apiKey) => {
  const model = "gemini-2.5-flash"
  const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
  const pergunta = `
    Tenho o jogo ${game}, e quero saber ${question}
  `
  const contents = [{
    parts: [{
      text: pergunta
    }]
  }]

  //chamar API
  const response = await fetch(geminiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents
    })
  })

  const data = await response.json()
 
  return data.candidates[0].contents.parts[0].text

}

const enviarFormulario = async (event) => {
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

    await perguntarAI(question, game, apiKey)

  } catch (error) {

    console.log('Erro: ', error)

  } finally {

    askButton.disabled = false
    askButton.textContent = "Perguntar"
    askButton.classList.remove('loading')

  }

}
form.addEventListener('submit', enviarFormulario)