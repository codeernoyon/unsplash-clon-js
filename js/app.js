////////////apis//////////
const searchPeram = location.search.split('=').pop();
const api_accesKey = `fTCd0sVXOLT0uQYq2b5vV_Bq8Eaw3y26LUq-PEf5lUM`;
const api_Url = `https://api.unsplash.com/photos/random?client_id=${api_accesKey}&count=50`;
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
  await data.forEach((item) => {
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
              <div class="item_bottom_left" >
                <div class="img">
                  <img
                  class='itemImg'
                    src="${item.user.profile_image.small}"
                    alt=""
                  />
                </div>
                <div class="item_bottom_text">
                  <div class="name"><span>${item.user.name}</span></div>
                  <div class="title">
                   <a href="${item.user.links.html}" target="_blank"><span>Available for hire</span></a>
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
            <img class="galleryImg" src="${item.urls.regular}" alt="" />
          </div>
       `
       
       warper.innerHTML = imgs;

      const images =document.querySelectorAll('.galleryImg');
      images.forEach((img, index) => {
        img.addEventListener('click', () => {
          popUp.classList.add("show");
          popUp.classList.remove("hide");

          currentImg = index;
          /////popup img/////
          popUpImg(img);
          
          ////popUp profile Img Download////
          popUpProfileImg(currentImg);
          ////popUp user profile////
          popUpUserProfile(currentImg)
          // ////popUP Download////
          popUpDownload(currentImg);

          ///////slide img/////
          slideImg(currentImg);
        })
      })
    })
    
    //////add loves////////
    const loves =document.querySelectorAll('#galleryLove');
   await loves.forEach((love) => {
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

  /////////pop up profile imgs/////////
  let popupProfileImg = document.querySelector('#profile_img');
  let popUpUserName = document.querySelector('#popUpUserName');
  const popUpProfileImg = (currentImg)=>{
    popupProfileImg.src = `${allData[currentImg].user.profile_image.small}`;
    popUpUserName.innerHTML = `${allData[currentImg].user.name}`;
  }
  /////////pop up user profile/////////
  let popUpUserProfileLink = document.querySelectorAll('#popUp_header_left_a');

  const popUpUserProfile = async (currentImg)=>{
  await  popUpUserProfileLink.forEach((item) => {
      item.addEventListener('click', () => {
        item.href = `${allData[currentImg].user.links.html}`
      })
    })
  }
    ////////popUP Download/////////
  let popUpDownloadImg = document.querySelectorAll('#popUpDownload');
  let smallDownload = document.querySelectorAll('#smallDownload');
  let mediumDownload = document.querySelectorAll('#mediumDownload');
  let largeDownload = document.querySelectorAll('#largeDownload');
  let originalDownload = document.querySelectorAll('#originalDownload');

  let popUpDownload = (currentImg) => {
  ////element for each function//////
  let download = `${allData[currentImg].links.download}`;
  let small = `${allData[currentImg].urls.small_s3}`;
  let medium = `${allData[currentImg].urls.small}`;
  let large = `${allData[currentImg].urls.full}`;
  let original = `${allData[currentImg].urls.raw}`;

let createForEach = async (ele, links) => {
  await ele.forEach((item) => {
    item.href = `${links}`;
  })
}

createForEach(popUpDownloadImg, download);
createForEach(smallDownload, small);
createForEach(mediumDownload, medium);
createForEach(largeDownload, large);
createForEach(originalDownload, original);
}
  /////////image slide/////////
  const prv = document.querySelector('#prv');
  const next = document.querySelector('#next');
  /////////prv/////////
  let slideImg = (currentImg) => {
    prv.addEventListener('click', () => {
      if(currentImg > 0){
        currentImg--;
        let count = allData[currentImg].urls.regular;
        popupImg.src = `${count}`;
        popUpDownload(currentImg)

      }
    })
    next.addEventListener('click', () => {
      if(currentImg < allData.length){
        currentImg++;
       let count = allData[currentImg].urls.regular;
       popupImg.src = `${count}`;
       popUpDownload(currentImg)

      }
    })
  }
 
  /////////header slider//////
  const headerLeftArrow = document.querySelector('.header_left_arrow');
  const headerRightArrow = document.querySelector('.header_right_arrow');
  const rightUl = document.querySelector('.right_ul');
  headerRightArrow.addEventListener('click', () => {
})
  //////update car text//////////
const carText = document.querySelector('.titleSearch');
  if(searchPeram == ''){
  getImages()
  } else{
    searchImages()
carText.innerHTML = searchPeram;
  }