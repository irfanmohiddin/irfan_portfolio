// Scroll to section function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
function showDetails(projectId) {
  const details = {
    project1: "This portfolio website uses responsive design with smooth scroll, JavaScript interactivity, and clean UI/UX.",
    project2: "Weather App fetches live weather data using OpenWeather API and displays temperature, humidity, and conditions."
  };
  document.getElementById("projectDetails").innerText = details[projectId];
}
// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

//Display form submission message (if connected to Google Apps Script)
const form = document.querySelector('form');
const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
  form.addEventListener('submit', () => {
    formMessage.innerText = "Thanks! Your message has been sent.";
  });
}
