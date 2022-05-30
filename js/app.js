////////////apis//////////
const api_accesKey = `fTCd0sVXOLT0uQYq2b5vV_Bq8Eaw3y26LUq-PEf5lUM`;
const api_Url = `https://api.unsplash.com/photos/random?client_id=${api_accesKey}&count=50`;
//////elements///////
const warper = document.querySelector('.warper');
let allData;
const getImages = () => {
    fetch(`${api_Url}`)
    .then(response => response.json())
    .then((data) => {
        allData = data;
        createImg(allData)
    })
}
const createImg = (data) => {
    let imgs = ` `;
    
    data.forEach((item) => {
        imgs += `
       <div class="item">
       <div class="item_top">
              <div class="left"><p></p></div>
              <div class="rigth">
                <div class="love"><i class="fa-solid fa-heart"></i></div>
                <div class="plus"><i class="fa-solid fa-plus"></i></div>
              </div>
            </div>
            <div class="item_bottom">
              <div class="item_bottom_left">
                <div class="img">
                  <img
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
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </div>
            </div>
            <img class="img" src="${item.urls.regular}" alt="" />
          </div>
       `
    })
    warper.innerHTML = imgs;
}

getImages()
getImages()
