const projects = [
  {
    title: "Weather-App",
    src: "images/weather.png",
    description: ["The Weather App is a web application that provides users with real-time weather information based on their location."],
    technologies: ["HTML", "CSS", "Javascript"],
    seeLiveLink: "https://weather-app-ten-tan-87.vercel.app/",
    seeSourceLink: "https://github.com/Mayank2004-25/Weather-App",
  },
  {
    title: "N-Queens-Visualizer",
    src: "images/thumbnail.jpeg",
    description: ["Introducing our N-Queens Visualizer a captivating project crafted with HTML, CSS, and JavaScript!👑 Explore the classic chess problem in a visual, user-friendly interface."],
    seeLiveLink: "https://n-queens-visualizer-self.vercel.app/",
    seeSourceLink: "https://github.com/Mayank2004-25/N-Queens-Visualizer",
  },
  {
    title: "ToDo-App",
    src: "images/todo.png",
    description: ["Introducing a user-friendly Todo App built with React, HTML, CSS, and JavaScript! 🚀 Stay organized effortlessly, add/edit/delete tasks, and enjoy a responsive design for any device."],
    seeLiveLink: "",
    seeSourceLink: "https://github.com/Mayank2004-25/ToDo-App",
  },
  {
    title: "Food-Recipe-App",
    src: "images/food.png",
    description: ["Introducing our Food Recipe App, a culinary haven meticulously designed with React, HTML, CSS, and JavaScript! 🍽️ Immerse yourself in a gastronomic journey through an expansive collection of recipes."],
    seeLiveLink: "",
    seeSourceLink: "https://github.com/Mayank2004-25/Food-Recipe-App",
  },
];

const AllButtons = document.getElementsByClassName("see-project");
const work = document.querySelector(".project");
const popUp = document.createElement("section");
popUp.classList.add("modal-container");

function popUpDesktop(cardNumber) {
  popUp.style.display = "block";
  work.appendChild(popUp);
  popUp.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${projects[cardNumber].title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
      </div>
      <div class="modal-image">
        <img src=${projects[cardNumber].src} alt="App Image">
      </div>
      <div class="modal-description">
        <p>${projects[cardNumber].description}</p>
      </div>
      <div class="modal-technologies">
        <ul class="project-tools">
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[0]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[1]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[2]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[3]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
        </ul>
      </div>
      <div class="modal-btns">
        <button>
          <a href="${projects[cardNumber].seeLiveLink}">See Live <img src="images/see-live-Icon.png" alt="See live"></a>
        </button>
        <button>
          <a href="${projects[cardNumber].seeSourceLink}">See Source <img src="images/Github.png" alt="Github icon"></a>
        </button>
      </div>
    </div>
  </section>`;
  document.addEventListener("click", (event) => {
    if (event.target.id === "close-popUp") {
      popUp.style.display = "none";
    }
  });
}

function popUpMobile(cardNumber) {
  popUp.style.display = "block";
  work.appendChild(popUp);
  popUp.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${projects[cardNumber].title}</h2>
        <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
      </div>
      <div class="modal-image">
        <img src=${projects[cardNumber].src} alt="App Image">
      </div>
      <div class="modal-description">
        <p>${projects[cardNumber].description}</p>
      </div>
      <div class="modal-technologies">
        <ul class="project-tools">
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[0]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[1]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[2]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
          <li>${projects[cardNumber].technologies[3]}</li>
          <li><img src="images/Rectangle.png" alt="line" /></li>
        </ul>
      </div>
      <div class="modal-btns">
        <button>
          <a href="${projects[cardNumber].seeLiveLink}">See Live <img src="images/see-live-Icon.png" alt="See live"></a>
        </button>
        <button>
          <a href="${projects[cardNumber].seeSourceLink}">See Source <img src="images/Github.png" alt="Github icon"></a>
        </button>
      </div>
    </div>
  </section>`;
  document.addEventListener("click", (event) => {
    if (event.target.id === "close-popUp") {
      popUp.style.display = "none";
    }
  });
}

for (let i = 0; i < AllButtons.length; i += 1) {
  AllButtons[i].addEventListener("click", () => {
    popUpDesktop(i);
  });
  AllButtons[i].addEventListener("click", () => {
    popUpMobile(i);
  });
}
