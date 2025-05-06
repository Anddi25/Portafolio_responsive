const projects = [
    {
      title: "First project in this portafolio",
      image: "Images/background_grey.jpg",
      description: "First project in the portafolio por TheDevBA.",
      technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
      github: "https://github.com/tu_usuario/proyecto1",
      liveDemo: "https://tu-sitio.com/proyecto1"
    },
    {
      title: "Second Project Example",
      image: "Images/background_grey.jpg",
      description: "This is the second project in this portafolio.",
      technologies: ["React", "Tailwind", "Node.js"],
      github: "https://github.com/tu_usuario/proyecto2",
      liveDemo: "https://tu-sitio.com/proyecto2"
    },
    {
      title: "Tirth Project Example",
      image: "Images/background_grey.jpg",
      description: "Another app in this portafolio.",
      technologies: ["React", "Tailwind", "Node.js"],
      github: "https://github.com/tu_usuario/proyecto2",
      liveDemo: "https://tu-sitio.com/proyecto2"
    }
  ];
  
  const worksContainer = document.getElementById("works-container");
  const popup = document.getElementById("project-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImg = document.getElementById("popup-img");
  const popupLangs = document.getElementById("popup-langs");
  const closeBtn = document.querySelector(".close-popup");
  
  // Renderizar tarjetas
  projects.forEach((project, index) => {
    const work = document.createElement("div");
    work.className = "works";
    work.innerHTML = `
      <div class="item-work">
        <img src="${project.image}" alt="${project.title}">
        <div>
          <h2>${project.title}</h2>
          <ul class="lang">
            ${project.technologies.map(tech => `<li>${tech}</li>`).join("")}
          </ul>
        </div>
        <div class="bottom-project">
          <button class="project" data-index="${index}">See project</button>
        </div>
      </div>
    `;
    worksContainer.appendChild(work);
  });
  
  // Evento para abrir el popup
  worksContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("project")) {
      const index = e.target.getAttribute("data-index");
      const project = projects[index];
      popupTitle.textContent = project.title;
      popupImg.src = project.image;
      popupLangs.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");
      popup.classList.remove("hidden");
    }
  });
  
  // Cerrar popup
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
  