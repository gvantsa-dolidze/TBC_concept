fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container0 = document.getElementById("grid-container");
    data.products.forEach((item) => {
      const gridElement = document.createElement("div");
      gridElement.className = `grid-item item${item.id}`;
      gridElement.innerHTML = `
            <a href="#"> <img src="${item.img}"></a>
            <div class="text_on_img">
            <h3>${item.title}</h3>
            <a href><span class="bi bi-arrow-right"></span><span>${item.link_name}</span></a>
            </div>
`;
      container0.appendChild(gridElement);
    });
    const container = document.getElementById("flex_scrollbar");
    data.offers.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
    <a href="">
    <div class="card_img_container">
        <img src="${item.img}" class="bottom-img" alt="Image">  
        <img src="${item.logo}" class="top-logo" alt="logo">
        </div>
      <div class="title_text">
        <p>${item.title}</p>
        <h3>${item.paragraph}</h3>
      </div>
    </a>
`;
      container.appendChild(card);
    });

    const container3 = document.getElementById("products_scrollbar");
    data.products.forEach((item) => {
      const card = document.createElement("div");
      // card.className = "card";
      card.innerHTML = `
    <a href="" class="card products_card">
    <div class="">
        <img src="${item.img}" class="bottom-img" alt="Image" width="100%">  
        </div>
      <div class="title_text">
        <h3>${item.title}</h3>
        <p>${item.paragraph}</p>
      </div>
    </a>
`;
      container3.appendChild(card);
    });

    const container1 = document.getElementById("awards_scrollbar");
    data.awards.forEach((item) => {
      const card = document.createElement("div");
      // card.className = "card";
      card.innerHTML = `
    <a href="#" class="card awards_card">
    <div class="card_img_container">
        <img src="${item.img}" class="bottom-img" alt="Image" width="30%" style="padding-left:30px">  
        </div>
      <div class="title_text">
        <h3>${item.title}</h3>
        <p>${item.paragraph}</p>
      </div>
    </a>
`;
      container1.appendChild(card);
    });
  })

  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// choose language bnt
const hoverContainers = document.querySelectorAll(".lang_buttons_div");

hoverContainers.forEach((container) => {
  const hiddenButton = container.querySelector(".eng_btn");

  container.onmouseover = () => {
    hiddenButton.style.display = "inline-block";
  };

  container.onmouseout = () => {
    hiddenButton.style.display = "none";
  };
});

// footer navigation
const toggleNav = (navId, event) => {
  event.preventDefault();
  const navElement = document.getElementById(navId);
  const arrowIcon = document
    .getElementById(navId)
    .previousElementSibling.querySelector("i");

  if (navElement.style.display === "block") {
    navElement.style.display = "none";
    arrowIcon.classList.remove("bi-chevron-up");
    arrowIcon.classList.add("bi-chevron-down");
  } else {
    navElement.style.display = "block";
    arrowIcon.classList.remove("bi-chevron-down");
    arrowIcon.classList.add("bi-chevron-up");
  }
}

// burger button
const burgerMenu = document.getElementById("burger_btn");
const burgerIcon = document.getElementById("burger_icon");
let isOpen = false;
burgerMenu.addEventListener("click", function () {
  if (!isOpen) {
    burgerIcon.classList.add("bi-x");
    const box = document.createElement("div");
    box.classList.add("burger_box");
    box.innerHTML = `<section class="footer">
    <div class="footer_main" id="footer_for_burger">
      <div class="flex_row" style="padding-bottom:60px">
        <div>
          <div class="with_border with_top_border">
            <a href="#" onclick="toggleNav('mob_none4', event)" id="link_to_click4">
              <h3>პროდუქტები</h3><span><i id="arrowIcon4" class="bi bi-chevron-down"></i></span>
            </a>
          </div>
          <nav id="mob_none4" class="content">
            <a href="#">ნაკრები</a>
            <a href="#">პერსონალური</a>
          </nav>
        </div>
        <div>
          <div class="with_border">
            <a href="#" onclick="toggleNav('mob_none5', event)" id="link_to_click5">
              <h3>შეთავაზებები</h3><span><i id="arrowIcon5" class="bi bi-chevron-down"></i></span>
            </a>
          </div>
          <nav id="mob_none5" class="content">
            <a href="#">მიმოხილვა</a>
            <a href="#">შეთავაზებები</a>
            <a href="#">ღონისძიებები</a>
          </nav>
        </div>
        <div>
          <div class="with_border">
            <a href="#" onclick="toggleNav('mob_none6', event)" id="link_to_click6">
              <h3>კონცეფტის სივრცე</h3><span><i id="arrowIcon6" class="bi bi-chevron-down"></i></span>
            </a>
          </div>
          <nav id="mob_none6" class="content">
            <a href="#">მიმოხილვა</a>
            <a href="#">კაფე</a>
            <a href="#">ბიბლიოთეკა</a>
            <a href="#">კონცეფტის ფილიალი</a>
          </nav>
        </div>

      </div>
      <div class="flex_column">
        <div>
          <div>
            <h3>დაგვიკავშირდით:</h3>
          </div>
          <nav>
            <a href="#"><span><svg data-v-174d8ed1="" width="16" height="16" viewbox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path data-v-174d8ed1=""
                    d="M11.5987 14.6676C5.93736 14.6676 1.33203 10.0622 1.33203 4.4009C1.33203 2.70956 2.70803 1.33423 4.3987 1.33423C4.57203 1.33423 4.74336 1.3489 4.90936 1.37756C5.07136 1.40356 5.2347 1.4449 5.3927 1.49956C5.61003 1.5749 5.7727 1.7569 5.82403 1.9809L6.73736 5.9569C6.78736 6.17556 6.72403 6.4049 6.5687 6.56756C6.47736 6.66223 6.47536 6.66423 5.6487 7.0969C6.31803 8.54623 7.48136 9.70556 8.90203 10.3522C9.3347 9.5249 9.33736 9.52223 9.43203 9.43156C9.59536 9.27556 9.82537 9.2149 10.0434 9.2629L14.0194 10.1756C14.2427 10.2269 14.4247 10.3896 14.5 10.6062C14.5547 10.7636 14.5954 10.9262 14.6227 11.0936C14.6507 11.2582 14.6654 11.4289 14.6654 11.6009C14.6654 13.2922 13.29 14.6676 11.5987 14.6676Z"
                    fill="#555F62"></path>
                  <mask data-v-174d8ed1="" id="mask0_167_7524" maskunits="userSpaceOnUse" x="1" y="1" width="14"
                    height="14" style="mask-type: luminance;">
                    <path data-v-174d8ed1=""
                      d="M11.5987 14.6676C5.93736 14.6676 1.33203 10.0622 1.33203 4.4009C1.33203 2.70956 2.70803 1.33423 4.3987 1.33423C4.57203 1.33423 4.74336 1.3489 4.90936 1.37756C5.07136 1.40356 5.2347 1.4449 5.3927 1.49956C5.61003 1.5749 5.7727 1.7569 5.82403 1.9809L6.73736 5.9569C6.78736 6.17556 6.72403 6.4049 6.5687 6.56756C6.47736 6.66223 6.47536 6.66423 5.6487 7.0969C6.31803 8.54623 7.48136 9.70556 8.90203 10.3522C9.3347 9.5249 9.33736 9.52223 9.43203 9.43156C9.59536 9.27556 9.82537 9.2149 10.0434 9.2629L14.0194 10.1756C14.2427 10.2269 14.4247 10.3896 14.5 10.6062C14.5547 10.7636 14.5954 10.9262 14.6227 11.0936C14.6507 11.2582 14.6654 11.4289 14.6654 11.6009C14.6654 13.2922 13.29 14.6676 11.5987 14.6676Z"
                      fill="white"></path>
                  </mask>
                  <g data-v-174d8ed1="" mask="url(#mask0_167_7524)"></g>
                </svg></span><span>+995 32 2 27 27 00</span></a>
            <a href="#"> <span><svg data-v-174d8ed1="" width="16" height="16" viewbox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path data-v-174d8ed1=""
                    d="M11.9987 2.66772H3.9987C2.52536 2.66772 1.33203 3.86106 1.33203 5.33439V10.6744C1.33203 12.1477 2.52536 13.3411 3.9987 13.3411H11.9987C13.472 13.3411 14.6654 12.1477 14.6654 10.6744V5.33439C14.6654 3.86106 13.472 2.66772 11.9987 2.66772ZM11.9987 4.00106C12.0787 4.00106 12.152 4.01439 12.232 4.02106L7.9987 6.56106L3.75203 4.02772C3.83203 4.01439 3.9187 4.00106 4.00536 4.00106H12.0054H11.9987Z"
                    fill="#555F62"></path>
                </svg></span><span>info@tbcconcept.ge</span> </a>
            <a href="#"><span><svg data-v-174d8ed1="" width="16" height="16" viewbox="0 0 16 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.66797 6.61623C2.66797 3.70356 5.06064 1.33423 8.0013 1.33423C10.942 1.33423 13.3346 3.70356 13.3346 6.61623C13.3346 10.2656 8.6353 14.3356 8.4353 14.5069C8.30997 14.6142 8.15597 14.6676 8.0013 14.6676C7.84664 14.6676 7.69264 14.6142 7.5673 14.5069C7.3673 14.3356 2.66797 10.2656 2.66797 6.61623ZM8.0013 8.66756C6.71464 8.66756 5.66797 7.62089 5.66797 6.33423C5.66797 5.04756 6.71464 4.0009 8.0013 4.0009C9.28797 4.0009 10.3346 5.04756 10.3346 6.33423C10.3346 7.62089 9.28797 8.66756 8.0013 8.66756ZM8.0013 5.33423C7.44997 5.33423 7.0013 5.7829 7.0013 6.33423C7.0013 6.88556 7.44997 7.33423 8.0013 7.33423C8.55264 7.33423 9.0013 6.88556 9.0013 6.33423C9.0013 5.7829 8.55264 5.33423 8.0013 5.33423Z"
                    fill="#555F62"></path>
                  <mask data-v-174d8ed1="" id="mask0_167_7533" maskunits="userSpaceOnUse" x="2" y="1" width="12"
                    height="14" style="mask-type: luminance;">
                    <path data-v-174d8ed1="" fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.66797 6.61623C2.66797 3.70356 5.06064 1.33423 8.0013 1.33423C10.942 1.33423 13.3346 3.70356 13.3346 6.61623C13.3346 10.2656 8.6353 14.3356 8.4353 14.5069C8.30997 14.6142 8.15597 14.6676 8.0013 14.6676C7.84664 14.6676 7.69264 14.6142 7.5673 14.5069C7.3673 14.3356 2.66797 10.2656 2.66797 6.61623ZM8.0013 8.66756C6.71464 8.66756 5.66797 7.62089 5.66797 6.33423C5.66797 5.04756 6.71464 4.0009 8.0013 4.0009C9.28797 4.0009 10.3346 5.04756 10.3346 6.33423C10.3346 7.62089 9.28797 8.66756 8.0013 8.66756ZM8.0013 5.33423C7.44997 5.33423 7.0013 5.7829 7.0013 6.33423C7.0013 6.88556 7.44997 7.33423 8.0013 7.33423C8.55264 7.33423 9.0013 6.88556 9.0013 6.33423C9.0013 5.7829 8.55264 5.33423 8.0013 5.33423Z"
                      fill="white"></path>
                  </mask>
                  <g data-v-174d8ed1="" mask="url(#mask0_167_7533)"></g>
                </svg></span><span>ფილიალები</span></a>
          </nav>
        </div>
        <div>
          <div>
            <h3>სოციალური ქსელები</h3>
          </div>
          <nav>
            <div class="footer_buttons_flex">
              <button href="#"><svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_167_7547)">
                    <path
                      d="M9.83464 9.00163H11.5013L12.168 6.33496H9.83464V5.00163C9.83464 4.31496 9.83464 3.66829 11.168 3.66829H12.168V1.42829C11.9506 1.39963 11.13 1.33496 10.2633 1.33496C8.4533 1.33496 7.16797 2.43963 7.16797 4.46829V6.33496H5.16797V9.00163H7.16797V14.6683H9.83464V9.00163Z">
                    </path>
                  </g>
                  <defs>
                    <clipPath id="clip0_167_7547">
                      <rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect>
                    </clipPath>
                  </defs>
                </svg></button>
              <button href="#"><svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg" class="bi bi-instagram">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334">
                  </path>
                </svg></button>
            </div>
          </nav>
        </div>

      </div>
    </div>
    <hr>
    <div class="footer_bottom">
      <div>
        <svg data-v-174d8ed1="" width="36" height="32" viewBox="0 0 36 32" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path data-v-174d8ed1=""
            d="M15.8154 18.4806C15.8263 18.5838 15.8325 18.7025 15.8325 18.8227C15.8325 19.8184 15.4065 20.7155 14.7261 21.3474L14.7246 21.349C11.2681 24.5334 7.20468 27.1305 2.73238 28.9447L2.4671 29.0402C2.09727 29.1913 1.66502 29.3099 1.21717 29.3747L1.18752 29.3778C1.1251 29.3916 1.05332 29.3993 0.979974 29.3993C0.438492 29.3993 0 28.9662 0 28.4314C0 28.4114 0 28.3898 0.00156047 28.3697V28.3728C0.0187256 28.154 0.0639792 27.949 0.13264 27.7578L0.127958 27.7748C1.32952 24.3946 5.39922 17.0533 7.15475 14.0277C9.33784 10.2375 15.0632 1.11901 15.9168 0.118682C15.973 0.0462399 16.0588 0 16.1571 0C16.2055 0 16.2523 0.0107893 16.2929 0.0323679L16.2913 0.0308266C16.4333 0.0986452 16.5503 0.186501 16.4068 0.692058C15.6577 3.39401 14.5717 9.27881 15.6952 17.3246C15.7529 17.7407 15.8169 18.1214 15.8169 18.4806H15.8154Z">
          </path>
          <path data-v-174d8ed1=""
            d="M17.2182 22.3447C17.78 21.9501 18.4807 21.7143 19.2375 21.7143C19.6104 21.7143 19.9693 21.7713 20.3064 21.8776L20.2814 21.8715C25.2172 23.3851 29.5022 25.6493 33.2443 28.5639L33.16 28.5007C33.5126 28.7751 33.8216 29.0787 34.09 29.4163L34.0994 29.4271C34.257 29.5997 34.3537 29.8278 34.3537 30.0791C34.3537 30.4552 34.1368 30.7819 33.8201 30.9438L33.8138 30.9468C33.6437 31.0285 33.4455 31.0948 33.238 31.1318L33.224 31.1333C29.6661 31.7992 21.1771 31.9718 17.6567 31.998C13.2437 32.0289 2.39535 31.6913 1.08143 31.4771C0.939428 31.457 0.828635 31.343 0.817711 31.2027V31.2012C0.817711 31.0455 0.817711 30.9037 1.34515 30.7742C4.09157 30.0606 9.77948 28.0461 16.2851 23.0676C16.6175 22.787 16.9171 22.5466 17.2182 22.3431V22.3447Z">
          </path>
          <path data-v-174d8ed1=""
            d="M19.9178 19.2296C18.9394 18.7734 18.22 17.9134 17.9719 16.873L17.9672 16.8498C17.3212 14.1987 16.9514 11.1562 16.9514 8.02726C16.9514 6.0821 17.0949 4.17085 17.3711 2.30275L17.3446 2.51546C17.4117 2.04381 17.5319 1.61686 17.7004 1.21612L17.6879 1.25002C17.819 0.853902 18.1904 0.571839 18.6273 0.571839C18.827 0.571839 19.0127 0.630409 19.1672 0.730596L19.1641 0.729055C19.3373 0.85082 19.4871 0.986457 19.6198 1.13751L19.6229 1.14059C21.9854 3.85333 26.3813 11.0344 28.1633 14.023C30.3932 17.7823 35.5443 27.2338 35.9766 28.473C35.9906 28.5069 36 28.547 36 28.5886C36 28.6919 35.9469 28.7828 35.8674 28.8383H35.8658C35.7347 28.9262 35.6021 28.9786 35.2338 28.6086C33.2146 26.6188 28.6174 22.7454 21.0055 19.6828C20.6044 19.5271 20.2471 19.3853 19.9194 19.2296H19.9178Z">
          </path>
        </svg>
        <p>&copy; 2024 ყველა უფლება დაცულია</p>
      </div>

      <div>
        <a href="#">კონფიდენციალურობა</a>
        <a href="#">წესები და პირობები</a>
      </div>

    </div>
  </section>`;
    document.body.appendChild(box);
    isOpen = true;
  } else {
    // Box is open, so close it
    const box = document.querySelector(".burger_box");
    if (box) {
      burgerIcon.classList.remove("bi-x");
      document.body.removeChild(box);
      isOpen = false;
    }
  }
});

// fixed btn
const fixedBtn = document.getElementById("fixed_button");
fixedBtn.addEventListener("click", () => {
  const noneBtn = document.getElementById("fixed_button_display_none_div");
  const openBtnIcon = document.getElementById("open_btn_icon");
  const closeBtnIcon = document.getElementById("close_btn_icon");

  noneBtn.style.display = noneBtn.style.display === "block" ? "none" : "block";
  if (noneBtn.style.display === "none") {
    openBtnIcon.style.display = "inline-block";
    closeBtnIcon.style.display = "none";
  } else {
    openBtnIcon.style.display = "none";
    closeBtnIcon.style.display = "inline-block";
  }
});



