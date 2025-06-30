function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

const questions = {
  science: [
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
    { question: "Which gas is essential for breathing?", options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: "Oxygen" },
    { question: "Which planet has rings?", options: ["Earth", "Venus", "Saturn", "Mars"], answer: "Saturn" },
    { question: "Which is the closest star to Earth?", options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Sun"], answer: "Sun" },
    { question: "Which instrument measures temperature?", options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"], answer: "Thermometer" },
    { question: "What is H2O?", options: ["Hydrogen", "Oxygen", "Water", "Acid"], answer: "Water" },
    { question: "What causes tides on Earth?", options: ["Wind", "Sun", "Moon", "Rain"], answer: "Moon" },
    { question: "Which gas makes up most of the air?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Nitrogen" },
    { question: "What do plants use to make food?", options: ["Photosynthesis", "Evaporation", "Fermentation", "Respiration"], answer: "Photosynthesis" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter", "Venus", "Saturn"], answer: "Mars" }
  ],
  maths: [
    { question: "What is 7 + 6?", options: ["12", "13", "14", "15"], answer: "13" },
    { question: "What is 8 × 8?", options: ["64", "72", "56", "48"], answer: "64" },
    { question: "What is 100 ÷ 4?", options: ["20", "25", "30", "40"], answer: "25" },
    { question: "What is the square of 12?", options: ["124", "122", "144", "112"], answer: "144" },
    { question: "What is the cube of 3?", options: ["6", "9", "27", "18"], answer: "27" },
    { question: "What is 15% of 200?", options: ["25", "30", "35", "40"], answer: "30" },
    { question: "What is the value of π (approx)?", options: ["3.12", "3.14", "3.15", "3.16"], answer: "3.14" },
    { question: "What is the area of a square with side 5?", options: ["10", "15", "20", "25"], answer: "25" },
    { question: "What is 9²?", options: ["81", "72", "90", "99"], answer: "81" },
    { question: "What is the missing number: 2, 4, ?, 16", options: ["6", "8", "10", "12"], answer: "8" }
  ],
  biology: [
    { question: "Which organ pumps blood?", options: ["Lungs", "Liver", "Heart", "Brain"], answer: "Heart" },
    { question: "Which part of plant makes food?", options: ["Root", "Leaf", "Stem", "Flower"], answer: "Leaf" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], answer: "Mitochondria" },
    { question: "What do white blood cells do?", options: ["Digest food", "Carry oxygen", "Fight disease", "Clot blood"], answer: "Fight disease" },
    { question: "What is the smallest unit of life?", options: ["Organ", "Tissue", "Cell", "System"], answer: "Cell" },
    { question: "Which vitamin is gained from sunlight?", options: ["A", "B", "C", "D"], answer: "Vitamin D" },
    { question: "Where does digestion start?", options: ["Stomach", "Mouth", "Liver", "Intestine"], answer: "Mouth" },
    { question: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "What carries oxygen in blood?", options: ["White cells", "Platelets", "Red cells", "Plasma"], answer: "Red cells" },
    { question: "Which part of the brain controls movement?", options: ["Cerebrum", "Cerebellum", "Medulla", "Spinal Cord"], answer: "Cerebellum" }
  ],
  history: [
    { question: "Who discovered America?", options: ["Vasco da Gama", "Columbus", "Magellan", "Cook"], answer: "Columbus" },
    { question: "Who was the first President of India?", options: ["Rajendra Prasad", "Nehru", "Gandhi", "Kalam"], answer: "Rajendra Prasad" },
    { question: "In which year did India get independence?", options: ["1947", "1950", "1945", "1946"], answer: "1947" },
    { question: "Who built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: "Shah Jahan" },
    { question: "What was the ancient name of Patna?", options: ["Pataliputra", "Kanchipuram", "Madurai", "Kurukshetra"], answer: "Pataliputra" },
    { question: "Who was known as Iron Man of India?", options: ["Gandhi", "Nehru", "Sardar Patel", "Tilak"], answer: "Sardar Patel" },
    { question: "Who started the Quit India Movement?", options: ["Gandhi", "Tilak", "Bose", "Nehru"], answer: "Gandhi" },
    { question: "Who was the last Mughal emperor?", options: ["Aurangzeb", "Akbar", "Bahadur Shah Zafar", "Shah Jahan"], answer: "Bahadur Shah Zafar" },
    { question: "Where did Buddha attain enlightenment?", options: ["Sarnath", "Kushinagar", "Lumbini", "Bodh Gaya"], answer: "Bodh Gaya" },
    { question: "Which war ended with the Treaty of Versailles?", options: ["WWI", "WWII", "Cold War", "Napoleonic War"], answer: "WWI" }
  ],
  gk: [
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Ganga", "Nile", "Yangtze"], answer: "Nile" },
    { question: "Which animal is known as the ship of the desert?", options: ["Camel", "Elephant", "Horse", "Donkey"], answer: "Camel" },
    { question: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
    { question: "Which country is known as the Land of Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], answer: "Japan" },
    { question: "What is the smallest planet?", options: ["Mercury", "Mars", "Venus", "Pluto"], answer: "Mercury" },
    { question: "Which country gifted the Statue of Liberty to USA?", options: ["UK", "Germany", "France", "Italy"], answer: "France" },
    { question: "What color is a ruby?", options: ["Blue", "Green", "Red", "Yellow"], answer: "Red" },
    { question: "Which sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Cricket"], answer: "Badminton" }
  ]
 
};

let timer;
let timeLeft = 15;
function startQuiz(topic) {
  currentTopic = topic;
  currentQuestion = 0;
  score = 0;

  startQuizAudio();


  // ✅ Change background video per topic
  const video = document.getElementById("bg-video");
  const source = document.getElementById("bg-video-source");

  const videoMap = {
    science: "assets/science.mp4",
    maths: "assets/maths.mp4",
    biology: "assets/biology.mp4",
    history: "assets/history.mp4", // upload this
    gk: "assets/gk.mp4"
  };

  if (video && source && videoMap[topic]) {
    source.src = videoMap[topic];
    video.load(); // reload video source
    video.play();
    video.style.display = "block"; // in case it was hidden before
  }

  document.querySelector(".topics").style.display = "none";
  document.getElementById("question-section").style.display = "block";

  // Hide video, switch to starry background
  document.getElementById("bg-video").style.display = "none ";
  document.body.style.background = "url('assets/space-bg') center center / cover no-repeat fixed";

  showQuestion();
}

function startQuizAudio() {
  const audio = document.getElementById('quiz-audio');
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function stopQuizAudio() {
   const audio = document.getElementById('quiz-audio');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  // 🎬 Switch background video to image
  document.getElementById("bg-video").style.display = "none";
  document.body.style.background = "url('assets/space-bg.png') center center / cover no-repeat fixed";

  document.querySelector(".topics").style.display = "none";
  document.getElementById("question-section").style.display = "block";

  showQuestion();
}

function showQuestion() {
  timeLeft = 15;
  startTimer();

  const q = questions[currentTopic][currentQuestion];
  document.getElementById("question-text").textContent = `Q${currentQuestion + 1}: ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      clearInterval(timer);
      checkAnswer(option);
    };
    btn.classList.add("option-btn");
    optionsDiv.appendChild(btn);
  });
}

function startTimer() {
  document.getElementById("timer").textContent = `⏳ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `⏳ ${timeLeft}s`;
    if (timeLeft <= 0) {
  clearInterval(timer);
  stopQuizAudio(); // Stop audio on timeout
  playSound('complete-sound');
  alert("⏱️ Time's up!");
  nextQuestion();
}


  }, 1000);
}

function checkAnswer(selected) {
  playSound('click-sound');

  const correct = questions[currentTopic][currentQuestion].answer;
  if (selected === correct) {
    score++;
    alert("✅ Correct!");
  } else {
    alert(`❌ Wrong! Correct answer: ${correct}`);
  }

  // Disable options after one answer
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
    }
  });
}

function nextQuestion() {
  playSound('click-sound');

  currentQuestion++;
  if (currentQuestion < questions[currentTopic].length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  playSound('complete-sound'); // 🎉 play quiz complete sound

  const qBox = document.querySelector(".quiz-box");
  qBox.innerHTML = `
    <h2>🎉 Quiz Completed!</h2>
    <p>Your Score: <strong>${score}/${questions[currentTopic].length}</strong></p>
    <button onclick="window.location.reload()">Restart</button>

  `;
}
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const bgMusic = document.getElementById("bg-music");
    if (bgMusic) {
      bgMusic.muted = false;
      bgMusic.play();
    }
  });
});