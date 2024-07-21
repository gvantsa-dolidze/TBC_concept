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
    <a href="" class="card">
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
      card.className = "card";
      card.innerHTML = `
    <a href="#" class="card">
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
