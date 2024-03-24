const projects = [
  {
    title: "Weather-App",
    src: "images/weather.png",
    description: "The Weather App is a web application that provides users with real-time weather information based on their location.",
    technologies: ["HTML", "CSS", "Javascript"],
    seeLiveLink: "https://weather-app-ten-tan-87.vercel.app/",
    seeSourceLink: "https://github.com/Mayank2004-25/Weather-App",
  },
  {
    title: "N-Queens-Visualizer",
    src: "images/thumbnail.jpeg",
    description: "Introducing our N-Queens Visualizer a captivating project crafted with HTML, CSS, and JavaScript!👑 Explore the classic chess problem in a visual, user-friendly interface.",
    technologies: ["HTML", "CSS", "Javascript"],
    seeLiveLink: "https://n-queens-visualizer-self.vercel.app/",
    seeSourceLink: "https://github.com/Mayank2004-25/N-Queens-Visualizer",
  },
  {
    title: "ToDo-App",
    src: "images/todo.png",
    description: "Introducing a user-friendly Todo App built with React, HTML, CSS, and JavaScript! 🚀 Stay organized effortlessly, add/edit/delete tasks, and enjoy a responsive design for any device.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
    seeLiveLink: "",
    seeSourceLink: "https://github.com/Mayank2004-25/ToDo-App",
  },
  {
    title: "Food-Recipe-App",
    src: "images/food.png",
    description: "Introducing our Food Recipe App, a culinary haven meticulously designed with React, HTML, CSS, and JavaScript! 🍽️ Immerse yourself in a gastronomic journey through an expansive collection of recipes.",
    technologies: ["HTML", "CSS", "Javascript", "React"],
    seeLiveLink: "",
    seeSourceLink: "https://github.com/Mayank2004-25/Food-Recipe-App",
  },
];

const AllButtons = document.querySelectorAll(".see-project");
const work = document.querySelector(".work");
const popUp = document.createElement("section");
popUp.classList.add("modal-container");

function createModal(cardNumber) {
  popUp.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${projects[cardNumber].title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
      </div>
      <div class="modal-image">
        <img src="${projects[cardNumber].src}" alt="App Image">
      </div>
      <div class="modal-description">
        <p>${projects[cardNumber].description}</p>
      </div>
      <div class="modal-technologies">
        <ul class="project-tools">
          ${projects[cardNumber].technologies.map(tech => `<li><img src="images/Rectangle.png" alt="line" /></li><li>${tech}</li>`).join('')}
        </ul>
      </div>
      <div class="modal-btns">
        <button>
          <a href="${projects[cardNumber].seeLiveLink}" target="_blank" rel="noopener noreferrer">See Live <img src="images/see-live-Icon.png" alt="See live"></a>
        </button>
        <button>
          <a href="${projects[cardNumber].seeSourceLink}" target="_blank" rel="noopener noreferrer">See Source <img src="images/Github.png" alt="Github icon"></a>
        </button>
      </div>
    </div>
  `;
  work.appendChild(popUp);

  document.getElementById("close-popUp").addEventListener("click", () => {
    popUp.style.display = "none";
  });
}

AllButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    createModal(index);
    popUp.style.display = "block";
  });
});
