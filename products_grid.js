fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("grid-container");
    data.products.forEach((item) => {
      const gridElement = document.createElement("div");
      gridElement.className = `grid-item item${item.id}`;
      gridElement.innerHTML = `
            <a href="#"> <img src="${item.img}"> </a>
`;
      container.appendChild(gridElement);
    });
  })

  .catch((error) => {
    console.error("Error fetching data:", error);
  });
