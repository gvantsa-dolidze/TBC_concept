fetch("scrollbar.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("flex_scrollbar");
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
    <a href="">
        <img src="${item.img}" alt="Image">  
      <div>
        <p>${item.title}</p>
        <h3>${item.paragraph}</h3>
      </div>
    </a>
`;
      container.appendChild(card);
    });
  })

  .catch((error) => {
    console.error("Error fetching data:", error);
  });
