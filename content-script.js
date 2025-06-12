// wait until textarea appears to attach event listener
const observer = new MutationObserver((mutations, obs) => {
  const textarea = document.querySelector('#prompt-textarea')

  if(!textarea)
    return

  textarea.addEventListener('keydown', e => {
    if(e.key === 'Enter' && !e.shiftKey){
      const send = document.querySelector('[data-testid="send-button"]')
      send.click()
    }
  })

  obs.disconnect()
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})
