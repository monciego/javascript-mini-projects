const ideas = [
  "Note App",
  "Coffee Website",
  "Investment App",
  "Productivity App",
  "Space Tourism Website",
  "Hotel Booking App",
  "Fitness App",
  "Social Media App",
  "Video call App",
  "E-commerce",
  "Suicide Prevention Apps",
  "Stress Relaxation App",
  "Restaurant Reservation App",
  "Music App",
  "Weather App",
  "Movie App",
  "Modal",
  "Quiz App",
  "Slider",
  "Gallery Website",
  "Reviews Slider",
  "Pagination",
  "Video Website",
  "Todo App",
  "Drag and Drop",
  "Glassmorphism Card",
  "Rock paper scissors",
  "Image Carousel",
  "Calculator",
  "Browser Extension",
  "Diary App",
  "Navigation and Map App",
  "Clock",
  "Snake Game",
  "Drawing App",
  "Travel Website",
  "Airline App",
  "Chat Messaging App",
  "Image Gallery App",
  "DCEU Superheroes App",
  "Animated Charts",
  "Kanban Board",
  "Facebook Clone",
  "Tesla Website Clone",
  "Instagram Clone",
  "Discord Clone",
  "Twitter Clone",
  "Blog App",
  "Validation Form",
  "Accordion",
  "Sidebar Menu",
  "Dropdown Menu",
  "Recipe App",
  "GitHub Profiles App",
  "Password Generator",
];

const idea = document.getElementById("idea");
const generateBtn = document.querySelector(".generate-btn");

const randomFunction = () => {
  const random = ideas[Math.floor(Math.random() * ideas.length)];
  idea.innerHTML = random;
};

randomFunction();

generateBtn.addEventListener("click", () => randomFunction());

document.onkeydown = function (e) {
  if (e.code == "Space") {
    generateBtn.click();
  }
};
