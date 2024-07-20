fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("awards_scrollbar");
    data.awards.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
    <a href="">
    <div class="">
        <img src="${item.img}" class="bottom-img" alt="Image" width="100px">  
        </div>
      <div class="title_text">
        <h3>${item.title}</h3>
        <p>${item.paragraph}</p>
      </div>
    </a>
`;
      container.appendChild(card);
    });
  })

  .catch((error) => {
    console.error("Error fetching data:", error);
  });
