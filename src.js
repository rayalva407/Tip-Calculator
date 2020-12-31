const button = document.querySelector('#calculate')
const calculate = () => {
  const billAmt = document.querySelector('#billAmt').value
  const percent = document.querySelector('#service').value
  const people = document.querySelector('#people').value

  if (billAmt === "") {
    document.querySelector('#billAmt').classList.add('errors')
  }
  if (percent === "") {
    document.querySelector('#service').classList.add('errors')
  }
  if (people === "") {
    document.querySelector('#people').classList.add('errors')
  }
  if (billAmt !== "" && percent !== "" && people !== "") {
    document.querySelector('#billAmt').classList.remove('errors')
    document.querySelector('#service').classList.remove('errors')
    document.querySelector('#people').classList.remove('errors')

    const tip = (billAmt * percent) / people
    const resultDiv = document.querySelector('#tip-result')
    const result = document.createElement('h1')
    people > 1 ? result.innerText = `Tip $${tip.toFixed(2)} each` : result.innerText = `Tip $${tip.toFixed(2)}`
    resultDiv.innerHTML = ''
    resultDiv.appendChild(result)
  }
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  calculate()
})