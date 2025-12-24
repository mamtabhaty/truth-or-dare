const truths = [
  "What is your biggest fear?",
  "Have you ever lied to your best friend?",
  "Who was your first crush?",
  "What is one secret nobody knows?",
  "What is your most embarrassing moment?"
];

const dares = [
  "Sing a song for 30 seconds.",
  "Do 15 jumping jacks.",
  "Talk in a funny accent for 1 minute.",
  "Act like a robot for 30 seconds.",
  "Send a funny emoji to someone."
];

function showTruth() {
  const randomIndex = Math.floor(Math.random() * truths.length);
  document.getElementById("output").innerText =
    "Truth: " + truths[randomIndex];
}

function showDare() {
  const randomIndex = Math.floor(Math.random() * dares.length);
  document.getElementById("output").innerText =
    "Dare: " + dares[randomIndex];
}
