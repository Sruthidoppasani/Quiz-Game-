let currentTopic = localStorage.getItem("selectedTopic") || "science";
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

const questions = {
  science: [
  { question: "What is the SI unit of force?", options: ["Joule", "Pascal", "Newton", "Watt"], answer: "Newton" },
  { question: "Which part of the atom has a negative charge?", options: ["Proton", "Neutron", "Electron", "Nucleus"], answer: "Electron" },
  { question: "What is the main gas in Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
  { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Dioxygen Acid", "None of these"], answer: "Deoxyribonucleic Acid" },
  { question: "Which law explains action and reaction?", options: ["Newton's 1st", "Newton's 2nd", "Newton's 3rd", "Law of gravity"], answer: "Newton's 3rd" },
  { question: "What causes seasons on Earth?", options: ["Earth’s rotation", "Earth’s tilt", "Moon's pull", "Sun’s heat"], answer: "Earth’s tilt" },
  { question: "Which electromagnetic wave has the shortest wavelength?", options: ["Microwaves", "Ultraviolet", "Gamma rays", "Infrared"], answer: "Gamma rays" },
  { question: "What is the chemical formula for table salt?", options: ["KCl", "NaCl", "HCl", "CaCl2"], answer: "NaCl" },
  { question: "Which energy transformation occurs in a solar panel?", options: ["Thermal to Electrical", "Nuclear to Electrical", "Solar to Electrical", "Mechanical to Electrical"], answer: "Solar to Electrical" },
  { question: "Which gas turns limewater milky?", options: ["CO2", "O2", "H2", "N2"], answer: "CO2" },
  { question: "Which mirror is used in vehicles to view rear objects?", options: ["Concave", "Convex", "Plane", "Spherical"], answer: "Convex" },
  { question: "Unit of electrical resistance is?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: "Ohm" },
  { question: "What type of lens is used in a magnifying glass?", options: ["Concave", "Convex", "Cylindrical", "Plano-concave"], answer: "Convex" },
  { question: "Which device converts chemical energy to electrical?", options: ["Bulb", "Battery", "Motor", "Transformer"], answer: "Battery" },
  { question: "Acids react with bases to form?", options: ["Salts", "Oxygen", "Hydrogen", "Water"], answer: "Salts" },
  { question: "Sound travels fastest in?", options: ["Air", "Water", "Vacuum", "Steel"], answer: "Steel" },
  { question: "Which scientist developed the theory of relativity?", options: ["Newton", "Einstein", "Galileo", "Bohr"], answer: "Einstein" },
  { question: "Which layer protects Earth from UV radiation?", options: ["Troposphere", "Stratosphere", "Ozone layer", "Thermosphere"], answer: "Ozone layer" },
  { question: "The S.I unit of frequency is?", options: ["Hertz", "Newton", "Joule", "Volt"], answer: "Hertz" },
  { question: "Which organ helps filter blood in the human body?", options: ["Lungs", "Heart", "Liver", "Kidneys"], answer: "Kidneys" }
],

  mathematics: [
  { question: "What is the HCF of 12 and 18?", options: ["6", "4", "12", "2"], answer: "6" },
  { question: "What is the value of 2³ + 3²?", options: ["13", "17", "15", "18"], answer: "17" },
  { question: "If 5x = 45, what is x?", options: ["8", "7", "9", "6"], answer: "9" },
  { question: "What is the square root of 169?", options: ["12", "13", "14", "15"], answer: "13" },
  { question: "Which of these is a prime number?", options: ["9", "15", "11", "21"], answer: "11" },
  { question: "If a triangle has sides 3cm, 4cm, 5cm, what type is it?", options: ["Right-angled", "Equilateral", "Obtuse", "Isosceles"], answer: "Right-angled" },
  { question: "Simplify: (2 + 3)²", options: ["25", "10", "9", "12"], answer: "25" },
  { question: "What is 15 × 12?", options: ["160", "170", "180", "190"], answer: "180" },
  { question: "Which angle measures exactly 90°?", options: ["Acute", "Obtuse", "Right", "Straight"], answer: "Right" },
  { question: "What is 1/2 + 2/3?", options: ["4/5", "3/5", "7/6", "5/6"], answer: "7/6" },
  { question: "What is the value of π (up to 2 decimals)?", options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14" },
{ question: "Simplify: 25 ÷ (5 × 1)", options: ["1", "5", "0", "10"], answer: "5" },
{ question: "What is 15²?", options: ["225", "250", "200", "215"], answer: "225" },
{ question: "A triangle with all sides equal is called?", options: ["Isosceles", "Scalene", "Equilateral", "Right"], answer: "Equilateral" },
{ question: "What is the LCM of 6 and 8?", options: ["24", "18", "48", "36"], answer: "24" },
{ question: "Evaluate: 2x - 5 = 7, find x", options: ["6", "5", "4", "3"], answer: "6" },
{ question: "Which shape has 4 equal sides and 4 right angles?", options: ["Rectangle", "Rhombus", "Square", "Trapezium"], answer: "Square" },
{ question: "Area of circle formula is?", options: ["πr²", "2πr", "πd", "r²"], answer: "πr²" },
{ question: "Find 20% of 250", options: ["40", "45", "50", "60"], answer: "50" },
{ question: "If x = 4, evaluate 3x + 2", options: ["10", "12", "14", "18"], answer: "14" }

],

 biology: [
  { question: "What is the basic structural unit of the kidney?", options: ["Neuron", "Nephron", "Alveoli", "Glomerulus"], answer: "Nephron" },
  { question: "What pigment gives plants their green color?", options: ["Chlorophyll", "Hemoglobin", "Carotene", "Xanthophyll"], answer: "Chlorophyll" },
  { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], answer: "Cerebellum" },
  { question: "Which part of the cell contains genetic material?", options: ["Cytoplasm", "Ribosome", "Nucleus", "Vacuole"], answer: "Nucleus" },
  { question: "Which process helps plants lose water?", options: ["Photosynthesis", "Respiration", "Transpiration", "Diffusion"], answer: "Transpiration" },
  { question: "Which type of blood cell fights infections?", options: ["RBC", "Platelets", "WBC", "Plasma"], answer: "WBC" },
  { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], answer: "Skin" },
  { question: "What is the function of hemoglobin?", options: ["Digestion", "Transport oxygen", "Filter waste", "Provide immunity"], answer: "Transport oxygen" },
  { question: "Where does protein synthesis occur?", options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"], answer: "Ribosome" },
  { question: "Which organ controls reflex actions?", options: ["Brain", "Spinal Cord", "Liver", "Heart"], answer: "Spinal Cord" },
  { question: "Which organ produces insulin?", options: ["Liver", "Pancreas", "Kidney", "Heart"], answer: "Pancreas" },
{ question: "Which part of the eye controls light entry?", options: ["Iris", "Pupil", "Cornea", "Lens"], answer: "Pupil" },
{ question: "Which part of the brain controls breathing?", options: ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"], answer: "Medulla" },
{ question: "The smallest bone in the human body is?", options: ["Stapes", "Femur", "Humerus", "Tibia"], answer: "Stapes" },
{ question: "Which blood group is universal donor?", options: ["A", "AB", "B", "O"], answer: "O" },
{ question: "Which organ breaks down alcohol in the body?", options: ["Stomach", "Liver", "Kidney", "Intestine"], answer: "Liver" },
{ question: "What are the structural units of proteins?", options: ["Fatty acids", "Sugars", "Amino acids", "Bases"], answer: "Amino acids" },
{ question: "Which cells carry oxygen?", options: ["WBC", "Platelets", "RBC", "Nerve cells"], answer: "RBC" },
{ question: "What do mitochondria produce?", options: ["Proteins", "Oxygen", "Energy", "Blood"], answer: "Energy" },
{ question: "What is the function of white blood cells?", options: ["Clot blood", "Transport oxygen", "Fight infection", "Form bones"], answer: "Fight infection" }

],

  history: [
  { question: "Who wrote the Indian Constitution?", options: ["Nehru", "Ambedkar", "Gandhi", "Rajendra Prasad"], answer: "Ambedkar" },
  { question: "Which empire did Ashoka belong to?", options: ["Maurya", "Gupta", "Mughal", "Chola"], answer: "Maurya" },
  { question: "In which year was the Quit India Movement launched?", options: ["1939", "1940", "1942", "1945"], answer: "1942" },
  { question: "Which battle ended Tipu Sultan's reign?", options: ["Plassey", "Buxar", "Third Anglo-Mysore", "Fourth Anglo-Mysore"], answer: "Fourth Anglo-Mysore" },
  { question: "Which Mughal emperor built the Red Fort?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: "Shah Jahan" },
  { question: "When was the Jallianwala Bagh massacre?", options: ["1917", "1919", "1921", "1930"], answer: "1919" },
  { question: "What was the capital of the Maurya Empire?", options: ["Delhi", "Patliputra", "Lahore", "Varanasi"], answer: "Patliputra" },
  { question: "Who was the founder of the Gupta dynasty?", options: ["Chandragupta I", "Samudragupta", "Harshavardhana", "Skandagupta"], answer: "Chandragupta I" },
  { question: "Who led the Dandi March?", options: ["Ambedkar", "Bhagat Singh", "Gandhi", "Subhash Chandra Bose"], answer: "Gandhi" },
  { question: "Who was the last British Viceroy of India?", options: ["Mountbatten", "Wavell", "Curzon", "Dalhousie"], answer: "Mountbatten" },
  { question: "Who founded the Mughal Empire in India?", options: ["Babur", "Akbar", "Humayun", "Shah Jahan"], answer: "Babur" },
{ question: "Who was the first woman ruler of India?", options: ["Rani Lakshmibai", "Razia Sultana", "Indira Gandhi", "Noor Jahan"], answer: "Razia Sultana" },
{ question: "Where did Mahatma Gandhi begin Satyagraha in India?", options: ["Ahmedabad", "Champaran", "Dandi", "Kheda"], answer: "Champaran" },
{ question: "Which Indian freedom fighter formed 'Azad Hind Fauj'?", options: ["Gandhi", "Bose", "Bhagat Singh", "Tilak"], answer: "Bose" },
{ question: "Who built the Qutub Minar?", options: ["Qutub-ud-din Aibak", "Iltutmish", "Balban", "Akbar"], answer: "Qutub-ud-din Aibak" },
{ question: "Which war ended the British East India Company's rule?", options: ["1857 Revolt", "Battle of Buxar", "Battle of Plassey", "World War I"], answer: "1857 Revolt" },
{ question: "Who was known as the 'Father of Indian Renaissance'?", options: ["Raja Ram Mohan Roy", "Vivekananda", "Tagore", "Tilak"], answer: "Raja Ram Mohan Roy" },
{ question: "In which year was the Indian National Congress formed?", options: ["1857", "1885", "1905", "1942"], answer: "1885" },
{ question: "Who introduced the Doctrine of Lapse?", options: ["Dalhousie", "Curzon", "Wellesley", "Cornwallis"], answer: "Dalhousie" },
{ question: "Where did Tipu Sultan die?", options: ["Hyderabad", "Mysore", "Srirangapatna", "Pune"], answer: "Srirangapatna" }

],

 gk: [
  { question: "Which is the smallest continent?", options: ["Australia", "Europe", "Antarctica", "South America"], answer: "Australia" },
  { question: "Which is the highest civilian award in India?", options: ["Padma Shri", "Bharat Ratna", "Padma Bhushan", "Ashoka Chakra"], answer: "Bharat Ratna" },
  { question: "Who invented the telephone?", options: ["Graham Bell", "Edison", "Tesla", "Newton"], answer: "Graham Bell" },
  { question: "What is the currency of Japan?", options: ["Won", "Yen", "Ringgit", "Baht"], answer: "Yen" },
  { question: "Which city is known as the Pink City?", options: ["Jaipur", "Jodhpur", "Udaipur", "Delhi"], answer: "Jaipur" },
  { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Thar", "Kalahari"], answer: "Sahara" },
  { question: "Which is the longest bone in the human body?", options: ["Tibia", "Femur", "Humerus", "Fibula"], answer: "Femur" },
  { question: "How many players are there in a basketball team?", options: ["5", "6", "7", "11"], answer: "5" },
  { question: "Who was the first woman in space?", options: ["Kalpana Chawla", "Valentina Tereshkova", "Sunita Williams", "Sally Ride"], answer: "Valentina Tereshkova" },
  { question: "Which country has the most time zones?", options: ["USA", "Russia", "France", "China"], answer: "France" },
  { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa" },
{ question: "Which planet is known for its rings?", options: ["Earth", "Saturn", "Mars", "Venus"], answer: "Saturn" },
{ question: "Which is the deepest ocean?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific" },
{ question: "What does CPU stand for?", options: ["Central Process Unit", "Computer Power Unit", "Central Processing Unit", "Core Programming Unit"], answer: "Central Processing Unit" },
{ question: "Which language is spoken in Brazil?", options: ["Spanish", "Portuguese", "English", "French"], answer: "Portuguese" },
{ question: "What does WWW stand for?", options: ["World Web Wide", "Wide World Web", "World Wide Web", "Web World Wide"], answer: "World Wide Web" },
{ question: "Which instrument is used to measure pressure?", options: ["Thermometer", "Hygrometer", "Barometer", "Altimeter"], answer: "Barometer" },
{ question: "Who was the first man to step on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"], answer: "Neil Armstrong" },
{ question: "Which country has a maple leaf on its flag?", options: ["USA", "Canada", "UK", "Australia"], answer: "Canada" },
{ question: "Which animal lays eggs?", options: ["Cat", "Dog", "Bat", "Duck"], answer: "Duck" }

]
};
const quizVideo = document.getElementById("quiz-video");
const videoSource = document.getElementById("quiz-video-source");
const quizAudio = document.getElementById("quiz-audio");

// ✅ Start background music immediately on page load
function tryPlayAudio() {
  quizAudio.volume = 0.4;
  const playPromise = quizAudio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => console.log("🎵 Quiz audio started"))
      .catch(() => {
        // ⛔ Autoplay blocked: Wait for user interaction
        window.addEventListener("click", () => {
          quizAudio.play();
        }, { once: true });
      });
  }
}

tryPlayAudio(); // ✅ Try to play when the page loads


// ✅ Load the background video based on topic
const videoMap = {
  science: "assets/science.mp4",
  mathematics: "assets/maths.mp4",
  biology: "assets/biology.mp4",
  history: "assets/gk.mp4",
  gk: "assets/history.mp4"
};

if (videoMap[currentTopic]) {
  videoSource.src = videoMap[currentTopic];
  quizVideo.load();
  quizVideo.play();
}

// 🔄 Now start the quiz
// 🎯 Shuffle questions and pick first 5 every time quiz starts
const allQuestions = questions[currentTopic];
const shuffled = shuffleArray(allQuestions);
questions[currentTopic] = shuffled.slice(0, 10); // use only 5 questions

showQuestion();

function showQuestion() {
  timeLeft = 15;
  startTimer();
  const q = questions[currentTopic][currentQuestion];
  document.getElementById("question-text").textContent = `Q${currentQuestion + 1}: ${q.question}`;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("feedback").textContent = "";

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
      playSound('complete-sound');
      document.getElementById("feedback").textContent = "⏱️ Time's up!";
      setTimeout(nextQuestion, 1500);
    }
  }, 1000);
}

function checkAnswer(selected) {
  playSound("click-sound");
  const correct = questions[currentTopic][currentQuestion].answer;
  const feedback = document.getElementById("feedback");

  if (selected === correct) {
    score++;
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
    setTimeout(nextQuestion, 1000);
  } else {
    feedback.textContent = `❌ Wrong! Correct: ${correct}`;
    feedback.style.color = "red";
  }

  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.backgroundColor = "green";
    else if (btn.textContent === selected) btn.style.backgroundColor = "red";
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions[currentTopic].length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizAudio.pause();
  playSound("complete-sound");
  const qBox = document.getElementById("question-section");
  qBox.innerHTML = `
    <h2>🎉 Quiz Completed!</h2>
    <p>Your Score: <strong>${score}/${questions[currentTopic].length}</strong></p>
    <button onclick="window.location.href='index.html'">Restart</button>
  `;
}

function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
function shuffleArray(arr) {
  const array = [...arr]; // avoid mutating original
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


