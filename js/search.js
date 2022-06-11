
////////////apis//////////
const searchPeram = location.search.split('=').pop();
const api_accesKey = `fTCd0sVXOLT0uQYq2b5vV_Bq8Eaw3y26LUq-PEf5lUM`;
const api_Url = `https://api.unsplash.com/photos?client_id=${api_accesKey}&count=50`;
const search_api_Url = `https://api.unsplash.com/search/photos?client_id=${api_accesKey}&query=${searchPeram}&per_page=50`;

//////elements///////
const warper = document.querySelector('.warper');
let allData;
let currentImg = 0;
const getImages = async  () => {
   await fetch(api_Url)
    .then((response) => response.json())
    .then((data) => {
        allData = data;
        createImg(allData);

    })
}
const searchImages = async  () => {
  await fetch(search_api_Url)
   .then((response) => response.json())
   .then((allsData) => {
       allData = allsData.results;
       createImg(allData);
   })
}
  ////////create imgs /////////
  const createImg =async (data) => {
    let imgs = ` `;
  await data.forEach((item, index) => {
        imgs += `
       <div class="item">
       <div class="item_top">
              <div class="left"><p></p></div>
              <div class="rigth">
                <div class="love" id="galleryLove"><i class="fa-solid fa-heart"></i></div>
                <div class="plus"><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div class="item_bottom">
              <div class="item_bottom_left">
                <div class="img">
                  <img
                  class='itemImg'
                    src="./img/profile-1653477423424-2860ccb143aaimage.avif"
                    alt=""
                  />
                </div>
                <div class="item_bottom_text">
                  <div class="name"><span>Vivien Wauthier</span></div>
                  <div class="title">
                    <span>Available for hire</span>
                    <svg
                      width="15"
                      height="15"
                      class="lXK9Z"
                      viewBox="0 0 32 32"
                      version="1.1"
                      aria-hidden="false"
                    >
                      <path
                        d="M16.3 3C9 3 3 9 3 16.3C3 23.6 9 29.6 16.3 29.6C23.7 29.6 29.6 23.6 29.6 16.3C29.6 9 23.7 3 16.3 3ZM13.8 22.6L8.7 17.5L10.7 15.5L13.8 18.6L21.6 10.8L23.6 12.8L13.8 22.6Z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="rigth">
                <div class="download">
                <a href="${item.links.download}" download target="_blank">
                  <i class="fa-solid fa-arrow-down" id="download"></i>
                </a>
                </div>
              </div>
            </div>
            <img class="img" src="${item.urls.regular}" alt="" />
          </div>
       `
       

       warper.innerHTML = imgs;

      const images =document.querySelectorAll('.img');
      images.forEach((img, index) => {
        img.addEventListener('click', () => {
          popUp.classList.add("show");
          popUp.classList.remove("hide");

          currentImg = index;
          /////popup img/////
          popUpImg(img);
          
          ////popUP Download////
          popUpDownload(currentImg);

          ///////slide img/////
          slideImg(currentImg);
        })
      })
    })

    
    //////add loves////////
    const loves =document.querySelectorAll('#galleryLove');
    loves.forEach((love) => {
      love.addEventListener('click', () => {
        love.classList.toggle("active")
      })
    })
  }
  /////////pop up imgs/////////
  let popupImg = document.querySelector('#popupImg');
  const popUpImg = (data)=>{
    popupImg.src = `${data.src}`;
    }
    ////////popUP Download/////////
  let popUpDownloadImg = document.querySelector('#popUpDownload');
  let smallDownload = document.querySelector('#smallDownload');
  let mediumDownload = document.querySelector('#mediumDownload');
  let largeDownload = document.querySelector('#largeDownload');
  let originalDownload = document.querySelector('#originalDownload');
let popUpDownload = (currentImg) => {
  popUpDownloadImg.href = `${allData[currentImg].links.download}`;
  smallDownload.href = `${allData[currentImg].urls.regular}`;
  mediumDownload.href = `${allData[currentImg].urls.regular}`;
  largeDownload.href = `${allData[currentImg].urls.regular}`;
  originalDownload.href = `${allData[currentImg].urls.regular}`;
}
  /////////image slide/////////
  const prv = document.querySelector('#prv');
  const next = document.querySelector('#next');
  /////////prv/////////
  let slideImg = (currentImg) => {
    prv.addEventListener('click', () => {
      if(currentImg > 0){
        currentImg--;
        let count = allData[currentImg - 1].urls.regular;
        popupImg.src = `${count}`;
      }
    })
    next.addEventListener('click', () => {
      if(currentImg < allData.length){
        currentImg++;
       let count = allData[currentImg - 1].urls.regular;
       popupImg.src = `${count}`;
      }
    })
  }
 
  

  //////update car text//////////
const carText = document.querySelector('.titleSearch');
  if(searchPeram == ''){
  getImages()
  } else{
    searchImages()
carText.innerHTML = searchPeram;
  }