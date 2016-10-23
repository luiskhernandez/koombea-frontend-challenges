const url =  "/koombea-frontend-challenges/3-vanilla-validator-hint/data.json"

const renderOptions = (options) => {
  return renderEach(options,'option')
}
const renderProducts = (json) => {
  const container = document.getElementById('container')
  container.innerHTML = renderEach(json.results, 'product')
}

const validate = (e) => {
  const select = document.forms[e.getAttribute('id')].getElementsByTagName('select')[0]
  if(select.value == ""){
    e.classList.add('error')
    return false;
  }

  return true
}

const showError = (error) => alert(error.message)
ready(fetchProducts(url, renderProducts , showError))
