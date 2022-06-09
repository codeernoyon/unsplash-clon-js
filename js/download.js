const popUp =document.querySelector('.pop_up');
 const downloadIcon = document.querySelector('.download_icon');
 const downloadPopUP = document.querySelector('.download_popUp');
 const popUPlove =document.querySelector('.fevList');
 const close_popUp =document.querySelector('.close_popUp');
 const classAdd = (element) => {
  element.classList.toggle('active')
 }
    downloadIcon.addEventListener('click', () => classAdd(downloadPopUP));
    popUPlove.addEventListener('click', () => classAdd(popUPlove));
    close_popUp.addEventListener('click', () =>{
      popUp.classList.add('hide')
      popUp.classList.remove('show')
    })
    
