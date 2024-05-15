export function loadCurrencyConverter (windowContent) {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(response => response.json())
      .then(data => {
        populateCurrencyOptions(windowContent, data.rates)
      })
      .catch(error => {
        console.error('Error fetching currency list:', error)
        // Handle errors, maybe show an error message to the user
      })
  
  
    const convertButton = windowContent.querySelector('#convert')
    convertButton.addEventListener('click', function () {
      const amount = windowContent.querySelector('#amount').value
      const fromCurrency = windowContent.querySelector('#fromCurrency').value
      const toCurrency = windowContent.querySelector('#toCurrency').value
  
  
      convertCurrency(amount, fromCurrency, toCurrency, windowContent)
    })
}  