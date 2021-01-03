function openPage(word) {
  let open = document.querySelector('.active');
  let page = document.querySelector(`.${word}`)

  if(open){
    open.classList.remove('active')
  }

  page.classList.add('active')
}