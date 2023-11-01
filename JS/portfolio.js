const portfolio = document.querySelector(".portfolio");

const displayPortfolio = () => {
  projects.forEach((obj) => {
    const html = `<div class="portfolio-container">
    <p class="portfolio-description">${obj.description} <a
    class="portfolio-link"
    href=${obj.link}
    target="_blank">${obj.name}</a
    >.
    </p>
    <img
    class="portfolio-img"
    src=${obj.image}
    alt="${obj.name}"
    />
    </div>`;
    portfolio.insertAdjacentHTML("beforeend", html);
  });
};

const projects = [
  {
    description:
      "Här är ett grupprojekt där uppgiften var att tillverka en hemsida åt restaurangen",
    name: "Lucky Duck",
    link: "https://erik-ryman.github.io/Restaurang-Lucky-Duck/",
    image: "./images/Misc/luckyDuck.png",
  },
  {
    description:
      "Här är ett projekt där uppgiften var att tillverka en hemsida åt",
    name: "Fryele Ridskola",
    link: "https://erik-ryman.github.io/Fryele-stallklubb-Erik/index.html",
    image: "./images/Misc/fryele.png",
  },
  {
    description: "Kommande projekt publiceras här när de är klara.",
    name: "",
    link: "",
    image: "./images/Misc/questionmark.jpg",
  },
];

displayPortfolio();
