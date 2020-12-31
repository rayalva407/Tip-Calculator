const button = document.querySelector('#calculate')
const calculate = () => {
  const billAmt = document.querySelector('#billAmt').value
  const percent = document.querySelector('#service').value
  const people = document.querySelector('#people').value


  const tip = (billAmt * percent) / people
  const resultDiv = document.querySelector('#tip-result')
  const result = document.createElement('p')
  result.innerText = `Tip $${tip} each`
  resultDiv.innerHTML = ''
  resultDiv.appendChild(result)
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  calculate()
})