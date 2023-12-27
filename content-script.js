const q = new URLSearchParams(location.search).get('q')
if(q){
  const input = document.querySelector('[data-id="root"]')
  input.innerText = decodeURIComponent(q)
  input.dispatchEvent(new Event('input', {bubbles: true}))
  input.nextSibling.click()
}
