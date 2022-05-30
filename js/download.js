 const downloadIcon = document.querySelector('.download_icon');
 const downloadPopUP = document.querySelector('.download_popUp');

 downloadIcon.addEventListener('click', () => {
    downloadPopUP.classList.toggle('active');
 })