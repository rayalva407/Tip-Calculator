const button = document.querySelector('#calculate')
const calculate = () => {
  const billAmt = document.querySelector('#billAmt').value
  const percent = document.querySelector('#service').value
  const people = document.querySelector('#people').value


  const tip = (billAmt * percent) / people
  const resultDiv = document.querySelector('#tip-result')
  const result = document.createElement('p')
  people > 1 ? result.innerText = `Tip $${tip} each` : result.innerText = `Tip $${tip}`
  resultDiv.innerHTML = ''
  resultDiv.appendChild(result)
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  calculate()
})