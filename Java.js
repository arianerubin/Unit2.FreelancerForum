const initialFreelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
];

const additionalFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

let freelancers = initialFreelancers.slice();
let currentIndex = 0;

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const average = total / freelancers.length;
  return average.toString().substring(0, 2);
  // or I can use .toFixed(2) this way would have 2 numbers after the comma, (not what I wanted)
}

function updateAveragePrice() {
  const avgPriceElement = document.querySelector("#avg-price");
  avgPriceElement.textContent = calculateAveragePrice();
}

function renderFreelancers() {
  const freelancersList = document.querySelector("#freelancers-list");
  freelancersList.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const div = document.createElement("div");
    div.className = "freelancer";
    div.innerHTML = `<strong>${freelancer.name}</strong> - ${freelancer.occupation}, starting price: $${freelancer.price}`;
    freelancersList.appendChild(div);
  });
}

function generateRandomFreelancer() {
  const randomIndex = Math.floor(Math.random() * additionalFreelancers.length);
  return additionalFreelancers[randomIndex];
}

function updateFreelancers() {
  for (let i = 0; i < freelancers.length; i++) {
    freelancers[i] = generateRandomFreelancer();
  }
  renderFreelancers();
  updateAveragePrice();
}

function init() {
  renderFreelancers();
  updateAveragePrice();
  setInterval(updateFreelancers, 3000);
}

init();
