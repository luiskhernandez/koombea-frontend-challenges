const ready = (fn) => {
  if(document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


const fetchProducts = (url, successFn, errorFn) => {
  fetch(url, { mode: 'cors-with-forced-preflight' })
  .then((data) => data.json().then((json) => successFn(json)))
  .catch((error) => errorFn(error) )
}
