var teamMembers = [
  {
    name: "Shubhaditya",
    role: "Frontend + Backend Dev",
    skills: ["HTML/Css", "Js"],
    github: "https://github.com/shubhadityasirothia-spec",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya"
  },
  {
    name: "Abhilash Reddy",
    role: "Frontend + Backend Dev",
    skills: ["HTML/Css", "Js"],
    github: "https://github.com/AbhilashReddy012",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha"
  }
];
var projects = [
  {
    title: "Live News Feed",
    description: "A full-stack e-commerce platform with cart, login, and payment integration.",
    github: "https://github.com/shubhadityasirothia-spec/Live-News-Feed.git"
  },
  {
    title: "ExpenceTracker",
    description: "A productivity app to manage daily tasks with drag-and-drop support.",
    github: "https://github.com/shubhadityasirothia-spec/ExpenceTracker.git"
  },
  {
    title: "GitExplorer",
    description: "Real-time weather app using OpenWeather API with city search.",
    github: "https://github.com/AbhilashReddy012/EndsemProject4.git"
  },
  {
    title: "Kanban Task Board",
    description: "A real-time chat app built with Socket.io and Node.js backend.",
    github: "https://endsem-project6.vercel.app/"
  }
];

function renderTeam() {
  var container = document.getElementById("teamContainer");

  for (var i = 0; i < teamMembers.length; i++) {
    var member = teamMembers[i];

    var skillsHTML = "";
    for (var j = 0; j < member.skills.length; j++) {
      skillsHTML += '<span class="skill-tag">' + member.skills[j] + '</span>';
    }

    var card = document.createElement("div");
    card.className = "team-card";

    card.innerHTML =
      '<img src="' + member.avatar + '" alt="' + member.name + '" />' +
      '<h3>' + member.name + '</h3>' +
      '<p>' + member.role + '</p>' +
      '<div class="skills-list">' + skillsHTML + '</div>' +
      '<a href="' + member.github + '" target="_blank">GitHub →</a>';

    container.appendChild(card);
  }
}


function renderProjects() {
  var container = document.getElementById("projectsContainer");

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    var card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML =
      '<h3>' + project.title + '</h3>' +
      '<p>' + project.description + '</p>' +
      '<a href="' + project.github + '" target="_blank">View on GitHub →</a>';

    container.appendChild(card);
  }
}

function toggleTheme() {
  var body = document.body;
  var btn = document.getElementById("themeBtn");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    btn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light"); 
  } else {
    body.classList.add("dark");
    btn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark"); 
  }
}

function loadTheme() {
  var savedTheme = localStorage.getItem("theme"); 

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("themeBtn").textContent = "☀️ Light Mode";
  }
}



function submitForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var message = document.getElementById("messageInput").value;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  var isValid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required!";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required!";
    isValid = false;
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("emailError").textContent = "Enter a valid email!";
    isValid = false;
  }

  if (message.trim() === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty!";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMsg").textContent = "✅ Message sent successfully!";

    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
  }
}


loadTheme();     
renderTeam();     
renderProjects();
