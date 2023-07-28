const cards = [
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  },
  {
    name1: "Multi-Post Stories",
    name2: "Gain+Glory",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersionLink: "https://dd-obua.github.io/Mic-Portfolio/",
    sourceLink: "https://github.com/dd-obua/Mic-Portfolio"
  }
];

const worksCards = document.querySelector(".works__cards");

cards.forEach((card, index) => {
  const cardElementHtml = `
    <div class="information">
      <h3 class="works__stories--heading">${card.name1} <span class="gain-glory">${card.name2}</span></h3>
      <ul class='works__categories'>
        <li class='works__skill'>${card.technologies[0]}</li>
        <li class='works__skill'>${card.technologies[1]}</li>
        <li class='works__skill'>${card.technologies[2]}</li>
        <li class='works__skill'>${card.technologies[3]}</li>
      </ul>
      <a href="#" class="link see-project" data-index="${index}">See Project</a>
    </div>`;

  const cardElement = document.createElement("article");
  cardElement.className = "works__card";
  cardElement.innerHTML = cardElementHtml;
  worksCards.appendChild(cardElement);
});
