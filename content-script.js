const query = new URLSearchParams(location.search).get('q')
const input = document.querySelector('[data-id="root"]')

const submit = _ => {
  input.dispatchEvent(new Event('input', {bubbles: true}))
  input.nextSibling.click()
}

if(query){
  input.innerText = decodeURIComponent(query)
  submit()
}

document.querySelector("textarea#prompt-textarea").onkeypress = e => {
  if(e.key === 'Enter'){
    submit()
    e.preventDefault()
  }
}
