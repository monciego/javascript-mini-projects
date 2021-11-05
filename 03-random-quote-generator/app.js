const quotes = [
  "Keep your fears to yourself, but share your courage with others. —Robert Louis Stevenson",
  "The entrance door to the sanctuary is inside you. ~Rumi",
  "You discover you have wings when you open a book. ~Unknown",
  "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
  "If you want to build a ship, don’t drum up the men to gather wood, divide the work and give orders. Instead, teach them to yearn for the vast and endless sea. – Antoine de Saint-Exupery",
  "If you want to conquer the anxiety of life, live in the moment, live in the breath.”— Amit Ray",
  "At the end of the day, tell yourself gently: ‘I love you, you did the best you could today, and even if you didn’t accomplish all you had planned, I love you anyway. – Anonymous",
  "[Slow breathing] is like an anchor in the midst of an emotional storm: The anchor won’t make the storm go away, but it will hold you steady until it passes. – Russ Harris",
  "If you can’t fly then run, if you can’t run then walk, if you can’t walk then crawl, but whatever you do you have to keep moving forward. – Martin Luther King, Jr.",
];
const btn = document.getElementById("btnGenerator");
const quote = document.getElementById("quote");

btn.addEventListener("click", () => {
  quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
});
