// Quiz Questions Bank
const questionsBank = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is the largest in our solar system?",
                options: ["Saturn", "Neptune", "Jupiter", "Venus"],
                correct: 2
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "Which ocean is the largest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "What color is a banana?",
                options: ["Green", "Red", "Yellow", "Purple"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "In what year did the Titanic sink?",
                options: ["1912", "1915", "1920", "1905"],
                correct: 0
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Mark Twain", "William Shakespeare", "Jane Austen", "Charles Dickens"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the currency of Japan?",
                options: ["Won", "Yuan", "Yen", "Ringgit"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "Which artist cut off his own ear?",
                options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"],
                correct: 2
            },
            {
                question: "What is the only mammal capable of true flight?",
                options: ["Flying squirrel", "Bat", "Flying fish", "Sugar glider"],
                correct: 1
            },
            {
                question: "In what year did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Who was the first President of the United States?",
                options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "What is the most spoken language in the world by native speakers?",
                options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
                correct: 2
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is the chemical symbol for Gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "How many legs does a spider have?",
                options: ["6", "8", "10", "12"],
                correct: 1
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Lysosome"],
                correct: 1
            },
            {
                question: "At what temperature does water freeze?",
                options: ["0°C", "32°C", "-10°C", "100°C"],
                correct: 0
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the speed of light in vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"],
                correct: 0
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
                correct: 1
            },
            {
                question: "What is the study of fossils called?",
                options: ["Archeology", "Paleontology", "Geology", "Anthropology"],
                correct: 1
            },
            {
                question: "How many bones are in the human body?",
                options: ["186", "206", "226", "246"],
                correct: 1
            },
            {
                question: "What is the SI unit of electric current?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the name of the process by which plants convert sunlight into chemical energy?",
                options: ["Respiration", "Photosynthesis", "Fermentation", "Oxidation"],
                correct: 1
            },
            {
                question: "What is the atomic number of Carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1
            },
            {
                question: "Which scientist developed the theory of evolution?",
                options: ["Newton", "Darwin", "Einstein", "Hawking"],
                correct: 1
            },
            {
                question: "What is the pH of a neutral solution?",
                options: ["0", "7", "14", "7.4"],
                correct: 1
            },
            {
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
                correct: 2
            }
        ]
    },
    history: {
        easy: [
            {
                question: "In what year did Columbus discover America?",
                options: ["1492", "1500", "1420", "1521"],
                correct: 0
            },
            {
                question: "Who was the first Emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                correct: 1
            },
            {
                question: "In which century did the Renaissance occur?",
                options: ["13th-15th", "14th-17th", "15th-18th", "16th-19th"],
                correct: 1
            },
            {
                question: "Which country hosted the 1936 Olympics?",
                options: ["USA", "Italy", "Germany", "France"],
                correct: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "In what year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first British Prime Minister?",
                options: ["King George III", "Robert Walpole", "William Pitt", "Edmund Burke"],
                correct: 1
            },
            {
                question: "In which year did the American Declaration of Independence occur?",
                options: ["1774", "1776", "1778", "1780"],
                correct: 1
            },
            {
                question: "What was the capital of the Ottoman Empire?",
                options: ["Ankara", "Constantinople", "Bursa", "Izmir"],
                correct: 1
            },
            {
                question: "In what year did the French Revolution begin?",
                options: ["1787", "1789", "1791", "1793"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "Who was the longest reigning British monarch before Elizabeth II?",
                options: ["George III", "Victoria", "Edward VII", "George V"],
                correct: 1
            },
            {
                question: "In what year did Gutenberg invent the printing press?",
                options: ["1430", "1440", "1450", "1460"],
                correct: 2
            },
            {
                question: "What ancient structure is also known as the Mausoleum of Emperor Qin?",
                options: ["Great Wall", "Forbidden City", "Terracotta Army", "Summer Palace"],
                correct: 2
            },
            {
                question: "Who was the first President of South Africa after apartheid?",
                options: ["Thabo Mbeki", "Nelson Mandela", "F.W. de Klerk", "Jacob Zuma"],
                correct: 1
            },
            {
                question: "In what year did the Soviet Union collapse?",
                options: ["1989", "1990", "1991", "1992"],
                correct: 2
            }
        ]
    },
    technology: {
        easy: [
            {
                question: "Who is known as the father of computers?",
                options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
                correct: 1
            },
            {
                question: "What does 'HTTP' stand for?",
                options: ["Hyper Text Transfer Protocol", "High Tech Transfer Protocol", "Home Text Transfer Protocol", "Hyper Technical Transfer Protocol"],
                correct: 0
            },
            {
                question: "In what year was the Internet publicly released?",
                options: ["1989", "1991", "1993", "1995"],
                correct: 2
            },
            {
                question: "What does 'CPU' stand for?",
                options: ["Central Process Unit", "Central Processing Unit", "Computer Process Unit", "Central Processor Unit"],
                correct: 1
            },
            {
                question: "Which company created JavaScript?",
                options: ["Microsoft", "Oracle", "Netscape", "Apple"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the full form of 'USB'?",
                options: ["Universal Subscriber Bus", "Universal Serial Bus", "Universal System Bus", "Universal Software Bus"],
                correct: 1
            },
            {
                question: "In what year was the first iPhone released?",
                options: ["2005", "2006", "2007", "2008"],
                correct: 2
            },
            {
                question: "What does 'RAM' stand for?",
                options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Register Access Memory"],
                correct: 0
            },
            {
                question: "Who invented the World Wide Web?",
                options: ["Vint Cerf", "Tim Berners-Lee", "Jon Postel", "Lawrence Roberts"],
                correct: 1
            },
            {
                question: "What is the most widely used programming language?",
                options: ["Java", "C++", "Python", "JavaScript"],
                correct: 3
            }
        ],
        hard: [
            {
                question: "What does 'API' stand for in software development?",
                options: ["Application Programming Instruction", "Application Programming Interface", "Applied Programming Interface", "Application Process Integration"],
                correct: 1
            },
            {
                question: "In what year was the first webcam invented?",
                options: ["1993", "1994", "1995", "1996"],
                correct: 0
            },
            {
                question: "What is the concept of encryption called in cybersecurity?",
                options: ["Encoding", "Cryptography", "Steganography", "Serialization"],
                correct: 1
            },
            {
                question: "What does 'IoT' stand for?",
                options: ["Internet of Things", "Integration of Technology", "Internet of Trust", "Integration of Things"],
                correct: 0
            },
            {
                question: "Who developed the concept of object-oriented programming?",
                options: ["Alan Turing", "Simula developers", "Donald Knuth", "Bjarne Stroustrup"],
                correct: 1
            }
        ]
    }
};

// Quiz State
let quizState = {
    currentQuestion: 0,
    category: null,
    difficulty: null,
    questions: [],
    answers: [],
    timeTaken: [],
    questionStartTime: null,
    totalStartTime: null,
    currentQuestionTime: 0,
    timerInterval: null,
    timePerQuestion: 60 // Base time, can be adjusted
};

// Initialize Quiz
function initQuiz() {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const categorySelect = document.getElementById('categorySelect');
    const difficultySelect = document.getElementById('difficultySelect');

    startQuizBtn.addEventListener('click', () => {
        const category = categorySelect.value;
        const difficulty = difficultySelect.value;

        if (!category || !difficulty) {
            alert('Please select both category and difficulty!');
            return;
        }

        startQuiz(category, difficulty);
    });

    // Navigation buttons
    document.getElementById('prevBtn').addEventListener('click', goToPreviousQuestion);
    document.getElementById('nextBtn').addEventListener('click', goToNextQuestion);
    document.getElementById('submitBtn').addEventListener('click', submitQuiz);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
}

function startQuiz(category, difficulty) {
    quizState.category = category;
    quizState.difficulty = difficulty;
    quizState.questions = questionsBank[category][difficulty];
    quizState.answers = new Array(quizState.questions.length).fill(null);
    quizState.timeTaken = new Array(quizState.questions.length).fill(0);
    quizState.currentQuestion = 0;
    quizState.totalStartTime = Date.now();
    quizState.questionStartTime = Date.now();

    // Hide landing page, show quiz
    document.getElementById('landingPage').classList.remove('active');
    document.getElementById('quizPage').classList.add('active');

    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = quizState.questions[quizState.currentQuestion];
    const questionNum = quizState.currentQuestion + 1;
    const totalQuestions = quizState.questions.length;

    // Update progress
    document.getElementById('currentQuestion').textContent = questionNum;
    document.getElementById('totalQuestions').textContent = totalQuestions;

    const progressPercent = (questionNum / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';

    // Display question
    document.getElementById('questionText').textContent = question.question;

    // Display options
    const optionsWrapper = document.getElementById('optionsWrapper');
    optionsWrapper.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option';
        optionBtn.textContent = option;
        optionBtn.dataset.index = index;

        if (quizState.answers[quizState.currentQuestion] === index) {
            optionBtn.classList.add('selected');
        }

        optionBtn.addEventListener('click', () => selectAnswer(index));
        optionsWrapper.appendChild(optionBtn);
    });

    // Update navigation buttons
    updateNavigationButtons();
}

function selectAnswer(optionIndex) {
    quizState.answers[quizState.currentQuestion] = optionIndex;

    // Update UI
    document.querySelectorAll('.option').forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === optionIndex) {
            btn.classList.add('selected');
        }
    });
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const totalQuestions = quizState.questions.length;
    const isLastQuestion = quizState.currentQuestion === totalQuestions - 1;

    prevBtn.disabled = quizState.currentQuestion === 0;
    nextBtn.disabled = isLastQuestion;
    submitBtn.style.display = isLastQuestion ? 'inline-block' : 'none';
    nextBtn.style.display = isLastQuestion ? 'none' : 'inline-block';
}

function goToNextQuestion() {
    if (quizState.currentQuestion < quizState.questions.length - 1) {
        saveQuestionTime();
        quizState.currentQuestion++;
        quizState.questionStartTime = Date.now();
        clearTimeout(quizState.timerInterval);
        displayQuestion();
        startTimer();
    }
}

function goToPreviousQuestion() {
    if (quizState.currentQuestion > 0) {
        saveQuestionTime();
        quizState.currentQuestion--;
        quizState.questionStartTime = Date.now();
        clearTimeout(quizState.timerInterval);
        displayQuestion();
        startTimer();
    }
}

function saveQuestionTime() {
    const timeSpent = Math.round((Date.now() - quizState.questionStartTime) / 1000);
    quizState.timeTaken[quizState.currentQuestion] = timeSpent;
}

function startTimer() {
    let timeLeft = quizState.timePerQuestion;
    document.getElementById('timer').textContent = timeLeft;

    quizState.timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        const timerElement = document.getElementById('timer');
        timerElement.classList.remove('warning', 'danger');

        if (timeLeft <= 10) {
            timerElement.classList.add('danger');
        } else if (timeLeft <= 20) {
            timerElement.classList.add('warning');
        }

        if (timeLeft <= 0) {
            clearInterval(quizState.timerInterval);
            auto_moveToNextQuestion();
        }
    }, 1000);
}

function auto_moveToNextQuestion() {
    saveQuestionTime();

    if (quizState.currentQuestion < quizState.questions.length - 1) {
        quizState.currentQuestion++;
        quizState.questionStartTime = Date.now();
        displayQuestion();
        startTimer();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    clearInterval(quizState.timerInterval);
    saveQuestionTime();

    const totalTime = Math.round((Date.now() - quizState.totalStartTime) / 1000);

    // Calculate results
    let correctCount = 0;
    const results = quizState.questions.map((question, index) => {
        const isCorrect = quizState.answers[index] === question.correct;
        if (isCorrect) correctCount++;

        return {
            question: question.question,
            selectedAnswer: quizState.answers[index] !== null ? question.options[quizState.answers[index]] : 'Not answered',
            correctAnswer: question.options[question.correct],
            isCorrect: isCorrect,
            timeSpent: quizState.timeTaken[index] || 0
        };
    });

    const score = Math.round((correctCount / quizState.questions.length) * 100);

    displayResults(results, correctCount, quizState.questions.length - correctCount, score, totalTime);
}

function displayResults(results, correctCount, incorrectCount, score, totalTime) {
    // Hide quiz, show results
    document.getElementById('quizPage').classList.remove('active');
    document.getElementById('resultsPage').classList.add('active');

    // Update score cards
    document.getElementById('totalScore').textContent = score + '%';
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('totalTime').textContent = formatTime(totalTime);

    // Display results list
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    results.forEach((result, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `result-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
        resultDiv.innerHTML = `
            <div class="result-item-question">Q${index + 1}: ${result.question}</div>
            <div class="result-item-answer">
                <strong>Your Answer:</strong> ${result.selectedAnswer}
            </div>
            <div class="result-item-answer">
                <strong>Correct Answer:</strong> ${result.correctAnswer}
            </div>
            <div class="result-item-time">Time Spent: ${result.timeSpent}s</div>
            <div class="result-item-answer">
                <strong>Status:</strong> <span style="color: ${result.isCorrect ? '#10b981' : '#ef4444'}">
                    ${result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
            </div>
        `;
        resultsList.appendChild(resultDiv);
    });

    // Draw charts
    drawPerformanceChart(correctCount, incorrectCount);
    drawTimeChart(results);
}

function drawPerformanceChart(correctCount, incorrectCount) {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correctCount, incorrectCount],
                backgroundColor: ['#10b981', '#ef4444'],
                borderColor: ['#059669', '#dc2626'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function drawTimeChart(results) {
    const ctx = document.getElementById('timeChart').getContext('2d');
    const labels = results.map((_, i) => `Q${i + 1}`);
    const times = results.map(r => r.timeSpent);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Time Spent (seconds)',
                data: times,
                backgroundColor: '#667eea',
                borderColor: '#4f46e5',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Seconds'
                    }
                }
            }
        }
    });
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
        return `${minutes}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

function restartQuiz() {
    // Reset state
    quizState = {
        currentQuestion: 0,
        category: null,
        difficulty: null,
        questions: [],
        answers: [],
        timeTaken: [],
        questionStartTime: null,
        totalStartTime: null,
        currentQuestionTime: 0,
        timerInterval: null,
        timePerQuestion: 60
    };

    // Reset form
    document.getElementById('categorySelect').value = '';
    document.getElementById('difficultySelect').value = '';

    // Show landing page
    document.getElementById('resultsPage').classList.remove('active');
    document.getElementById('landingPage').classList.add('active');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initQuiz);