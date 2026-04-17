const qMap = {};
quizData.forEach(q => { qMap[q.id] = q; });

let questionCount = 0;

const screenLanding = document.getElementById('screen-landing');
const screenQuiz    = document.getElementById('screen-quiz');
const screenResult  = document.getElementById('screen-result');
const btnStart      = document.getElementById('btn-start');
const btnRestart    = document.getElementById('btn-restart');
const quizContent   = document.getElementById('quiz-content');
const questionText  = document.getElementById('question-text');
const optionsList   = document.getElementById('options-list');
const quizCounter   = document.getElementById('quiz-counter');
const resultNumber  = document.getElementById('result-number');
const resultPct     = document.getElementById('result-pct');
const riskBadge     = document.getElementById('risk-badge');
const resultComment = document.getElementById('result-comment');
const gaugeFill     = document.getElementById('gauge-fill');

function showScreen(screen) {
  [screenLanding, screenQuiz, screenResult].forEach(s => s.classList.remove('active'));
  screen.classList.add('active');
  window.scrollTo(0, 0);
}

function getRiskInfo(p) {
  if (p <= 10) return { label: '免死金牌', cls: 'safe' };
  if (p <= 30) return { label: '较安全',   cls: 'safe' };
  if (p <= 60) return { label: '中等风险', cls: 'medium' };
  if (p <= 80) return { label: '偏高危',   cls: 'danger' };
  if (p <= 90) return { label: '高危',     cls: 'danger' };
  return             { label: '极度高危', cls: 'danger' };
}

function getColorClass(p) {
  if (p <= 30) return 'color-safe';
  if (p <= 60) return 'color-medium';
  return 'color-danger';
}

function getStrokeClass(p) {
  if (p <= 30) return 'stroke-safe';
  if (p <= 60) return 'stroke-medium';
  return 'stroke-danger';
}

function startQuiz() {
  questionCount = 0;
  showScreen(screenQuiz);
  renderQuestion('q1');
}

function renderQuestion(id) {
  const q = qMap[id];
  if (!q) return;
  questionCount++;
  quizCounter.textContent = `第 ${questionCount} 题`;

  quizContent.classList.add('fading');

  setTimeout(() => {
    questionText.textContent = q.question;
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      btn.addEventListener('click', () => handleOption(opt, btn));
      optionsList.appendChild(btn);
    });

    quizContent.classList.remove('fading');
  }, 220);
}

function handleOption(opt, btn) {
  optionsList.querySelectorAll('.option-btn').forEach(b => {
    b.disabled = true;
    b.style.pointerEvents = 'none';
  });
  btn.classList.add('selected');

  setTimeout(() => {
    if (opt.isEnd) {
      showResult(opt.probability, opt.comment);
    } else {
      renderQuestion(opt.next);
    }
  }, 180);
}

function showResult(probability, comment) {
  showScreen(screenResult);

  const colorClass  = getColorClass(probability);
  const strokeClass = getStrokeClass(probability);
  const riskInfo    = getRiskInfo(probability);
  const circumference = 502.65;

  resultNumber.textContent = '0';
  resultNumber.className = 'result-number';
  resultPct.className = 'result-pct';
  gaugeFill.style.strokeDashoffset = circumference;
  gaugeFill.className = 'gauge-fill-circle';
  riskBadge.className = 'risk-badge';
  resultComment.className = 'result-comment-card';

  riskBadge.textContent = riskInfo.label;
  resultComment.textContent = comment;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const targetOffset = circumference * (1 - probability / 100);
      gaugeFill.classList.add(strokeClass);
      gaugeFill.style.strokeDashoffset = targetOffset;
    });
  });

  const duration = 1300;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    resultNumber.textContent = Math.round(eased * probability);
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      resultNumber.textContent = probability;
      resultNumber.classList.add(colorClass);
      resultPct.classList.add(colorClass);
    }
  }
  requestAnimationFrame(tick);

  setTimeout(() => riskBadge.classList.add(riskInfo.cls, 'visible'), 900);
  setTimeout(() => resultComment.classList.add('visible'), 1000);
}

btnStart.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', () => showScreen(screenLanding));
