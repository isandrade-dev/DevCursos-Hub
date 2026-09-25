
const baseCourses = [
  {
    id: '1',
    title: 'HTML5 e CSS3 na Prática',
    provider: 'YouTube / Guanabara',
    category: 'Front-end',
    isFree: true,
    level: 'Iniciante',
    rating: 4.9,
    url: 'https://www.youtube.com/'
  },
  {
    id: '2',
    title: 'Curso Completo de React e Next.js',
    provider: 'Udemy',
    category: 'Front-end',
    isFree: false,
    level: 'Intermediário',
    rating: 4.8,
    url: 'https://www.udemy.com/'
  },
  {
    id: '3',
    title: 'Fundamentos de Cibersegurança',
    provider: 'FIAP On',
    category: 'Segurança',
    isFree: true,
    level: 'Iniciante',
    rating: 4.7,
    url: 'https://www.fiap.com.br/online/'
  },
  {
    id: '4',
    title: 'UI/UX Design do Zero ao Prototipagem',
    provider: 'Alura',
    category: 'UI/UX Design',
    isFree: false,
    level: 'Iniciante',
    rating: 4.6,
    url: 'https://www.alura.com.br/'
  },
  {
    id: '5',
    title: 'Lógica de Programação com Python',
    provider: 'YouTube',
    category: 'Programação',
    isFree: true,
    level: 'Iniciante',
    rating: 4.9,
    url: 'https://www.youtube.com/'
  }
];
 
// Playlists do canal freeCodeCamp.org (YouTube, conteúdo em inglês)
// fcc(título, categoria, nível, nº de vídeos, id da playlist)
const PLAYLIST_URL = 'https://www.youtube.com/playlist?list=';
let nextId = baseCourses.length + 1;
 
function fcc(title, category, level, videos, listId) {
  return {
    id: String(nextId++),
    title,
    provider: 'YouTube / freeCodeCamp.org',
    category,
    isFree: true,
    level,           // null = não se aplica (podcast, eventos etc.)
    rating: null,    // sem nota disponível
    videos,          // null = quantidade não informada
    url: PLAYLIST_URL + listId
  };
}
 
const freeCodeCampCourses = [
  fcc('HTML and CSS Tutorials', 'Front-end', 'Iniciante', 10, 'PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88'),
  fcc('Python Tutorials', 'Programação', 'Iniciante', 12, 'PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB'),
  fcc('JavaScript Tutorials', 'Front-end', 'Iniciante', 9, 'PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V'),
  fcc('The freeCodeCamp.org Podcast', 'Carreira e Comunidade', null, null, 'PLWKjhJtqVAbm04DK8TSUCRheRjW2P9TR7'),
  fcc('Back End Developer Learning Path', 'Back-end', 'Intermediário', 17, 'PLWKjhJtqVAbn21gs5UnLhCQ82f923WCgM'),
  fcc('Front End Developer Learning Path', 'Front-end', 'Iniciante', 22, 'PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E'),
  fcc('C / C++', 'Programação', 'Iniciante', 8, 'PLWKjhJtqVAbmUE5IqyfGYEYjrZBYzaT4m'),
  fcc('Deep Learning with PyTorch Course (Dec 2020)', 'IA e Machine Learning', 'Avançado', 4, 'PLWKjhJtqVAbm5dir5TLEy2aZQMG7cHEZp'),
  fcc('Data Analysis with Python Course', 'Análise de Dados', 'Intermediário', 6, 'PLWKjhJtqVAblvI1i46ScbKV2jH1gdL7VQ'),
  fcc('Vue.js Live Coding with Gwen', 'Front-end', 'Intermediário', 8, 'PLWKjhJtqVAbkPX-lJHxjXdsw19vbXIZpz'),
  fcc('Mathematics', 'Ciência da Computação', 'Intermediário', 10, 'PLWKjhJtqVAbl5SlE6aBHzUVZ1e6q1Wz0v'),
  fcc('Python Basics with Sam', 'Programação', 'Iniciante', 14, 'PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23'),
  fcc('DevOps Courses', 'DevOps e Cloud', 'Intermediário', null, 'PLWKjhJtqVAbkzvvpY12KkfiIGso9A_Ixs'),
  fcc('Deep Learning with PyTorch Live Course', 'IA e Machine Learning', 'Avançado', 6, 'PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa'),
  fcc('Brain Computer App with React Native (Live Coding with Jesse)', 'Mobile', 'Avançado', 7, 'PLWKjhJtqVAbmR4Wi1LxJsx0Tnx3qugnrU'),
  fcc('Popular Programming Courses', 'Programação', 'Iniciante', 13, 'PLWKjhJtqVAblfum5WiQblKPwIbqYXkDoC'),
  fcc('Java Tutorials', 'Programação', 'Iniciante', 7, 'PLWKjhJtqVAbnRT_hue-3zyiuIYj0OlpyG'),
  fcc('App Development Tutorials', 'Mobile', 'Intermediário', 1, 'PLWKjhJtqVAbkPz27wpMpBdNbF8wzH_lWh'),
  fcc('PHP Tutorials', 'Back-end', 'Iniciante', null, 'PLWKjhJtqVAbkoMsX4hgwxbJZW4aB0cbaB'),
  fcc('Django Tutorials', 'Back-end', 'Intermediário', 3, 'PLWKjhJtqVAblFnET3DbnAik--u4CBz62G'),
  fcc('Coding Interview', 'Carreira e Comunidade', 'Avançado', 6, 'PLWKjhJtqVAblv09G3sFgRMSeR0jnKQmJ9'),
  fcc('C# Tutorials', 'Programação', 'Iniciante', 2, 'PLWKjhJtqVAbkq5Oh8ERRJ1aPZK2NKBSRx'),
  fcc('Vue.js', 'Front-end', 'Intermediário', 2, 'PLWKjhJtqVAbkE0Or3HVMRTy-mq_wFUNVv'),
  fcc('WordPress', 'Back-end', 'Iniciante', 3, 'PLWKjhJtqVAbnon7MZndnKeGEfQbXjwOqd'),
  fcc("CS50's Introduction to Game Development", 'Games', 'Intermediário', 12, 'PLWKjhJtqVAbluXJKKbCIb4xd7fcRkpzoz'),
  fcc('Data Science', 'Análise de Dados', 'Intermediário', 20, 'PLWKjhJtqVAblQe2CCWqV4Zy3LY01Z8aF1'),
  fcc("Introduction to Computer Science - Harvard's CS50", 'Ciência da Computação', 'Iniciante', 9, 'PLWKjhJtqVAbmGw5fN5BQlwuug-8bDmabi'),
  fcc('React Native Web - Project 7 (Live Coding with Jesse)', 'Front-end', 'Avançado', 13, 'PLWKjhJtqVAblh4QvUtzEq4qgs_bnvBrw2'),
  fcc('Ethical Hacking', 'Segurança', 'Intermediário', 7, 'PLWKjhJtqVAbnklGh3FNRLECx_2D_vK3mu'),
  fcc('Machine Learning', 'IA e Machine Learning', 'Intermediário', 18, 'PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s'),
  fcc('Angular Tutorials', 'Front-end', 'Intermediário', 8, 'PLWKjhJtqVAblNvGKk6aQVPAJHxrRXxHTs'),
  fcc('Unity Tutorials', 'Games', 'Iniciante', 7, 'PLWKjhJtqVAbmh6kzCSUon-SoTaMvXnHMB'),
  fcc('Node.js Tutorials', 'Back-end', 'Intermediário', 8, 'PLWKjhJtqVAbmGQoa3vFjeRbRADAOC9drk'),
  fcc('freeCodeCamp Hackathon', 'Carreira e Comunidade', null, 1, 'PLWKjhJtqVAbkfiXnJ3BRB9kFO-IUV4vWg'),
  fcc('Resume Reviews', 'Carreira e Comunidade', null, 2, 'PLWKjhJtqVAbmnstg9rF7jCo1LO3hC7p4r'),
  fcc('Top Contributor Parties', 'Carreira e Comunidade', null, 1, 'PLWKjhJtqVAbloeeXn1-G1qKQLr006B9n6'),
  fcc('React Tutorials', 'Front-end', 'Intermediário', 29, 'PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC'),
  fcc('CSS3 in 30 Days', 'Front-end', 'Iniciante', 31, 'PLWKjhJtqVAbl1AfjiGyYxwpdAPi5v-1OU'),
  fcc('Logic for Programmers', 'Ciência da Computação', 'Iniciante', null, 'PLWKjhJtqVAbmqk3-E3MPFVoWMufdbR4qW'),
  fcc('Game Programming Tutorials', 'Games', 'Intermediário', 28, 'PLWKjhJtqVAbmqFs83T4W-FZQ9kK983tZC'),
  fcc('Full Courses in One Video', 'Programação', 'Iniciante', 52, 'PLWKjhJtqVAbnupwRFOq9zGOWjdvPRtCmO'),
  fcc('Serverless', 'DevOps e Cloud', 'Avançado', 7, 'PLWKjhJtqVAbkXQS12WiLsH1oaNZBSoWuV'),
  fcc('Alexa Skill Development', 'Programação', 'Intermediário', 5, 'PLWKjhJtqVAblMiJPkJBny7WbfTYc6z27r'),
  fcc('Computer Science Concepts', 'Ciência da Computação', 'Iniciante', 17, 'PLWKjhJtqVAbn5emQ3RRG8gEBqkhf_5vxD'),
  fcc('React Project 5 (Live Coding with Jesse)', 'Front-end', 'Avançado', 103, 'PLWKjhJtqVAbkOoQw0jDWn-pzN3nFVjhbH'),
  fcc('Talks', 'Carreira e Comunidade', null, 115, 'PLWKjhJtqVAbl9yptoxdSJDDoTVdcysyPo')
];
const courses = [...baseCourses, ...freeCodeCampCourses];
/* ---------- 2. CORES POR CATEGORIA ----------*/
const CATEGORY_COLORS = {
  'Front-end': '#3b5ba9',
  'Back-end': '#6d4aae',
  'Programação': '#2f9e44',
  'Análise de Dados': '#c77d0a',
  'IA e Machine Learning': '#b23a6b',
  'Segurança': '#c1392b',
  'UI/UX Design': '#2596a1',
  'Games': '#8b5e34',
  'Mobile': '#4a7a96',
  'DevOps e Cloud': '#5c6bc0',
  'Ciência da Computação': '#1d6e5c',
  'Carreira e Comunidade': '#a46b08'
};
function categoryColor(category) {
  return CATEGORY_COLORS[category] || '#172036';
}
/* ---------- 3. PROGRESSO SALVO NO NAVEGADOR ---------- */
const FAVORITES_KEY = 'devcourses-favorites';
const STATUS_KEY = 'devcourses-status';
const CHALLENGES_KEY = 'devcourses-solved';
function loadJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch (e) {
    return fallback;
  }
}
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // sem localStorage: os dados valem só até fechar a página
  }
}
let favorites = new Set(loadJSON(FAVORITES_KEY, []));
let courseStatus = loadJSON(STATUS_KEY, {}); 
let solved = new Set(loadJSON(CHALLENGES_KEY, [])); 
function saveSolved() {
  saveJSON(CHALLENGES_KEY, [...solved]);
}
function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveJSON(FAVORITES_KEY, [...favorites]);
}
function setCourseStatus(id, status) {
  if (status === 'none') delete courseStatus[id];
  else courseStatus[id] = status;
  saveJSON(STATUS_KEY, courseStatus);
}
function getCourseStatus(id) {
  return courseStatus[id] || 'none';
}
/* ---------- 4. ELEMENTOS DO DOM ---------- */
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const priceSelect = document.getElementById('priceSelect');
const levelSelect = document.getElementById('levelSelect');
const statusSelect = document.getElementById('statusSelect');
const courseGrid = document.getElementById('courseGrid');
const favoriteGrid = document.getElementById('favoriteGrid');
/* ---------- 5. CRIAÇÃO DO CARTÃO DE CURSO ---------- */
const STATUS_LABELS = {
  none: 'Não iniciado',
  progress: 'Em andamento',
  done: 'Concluído'
};
function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.style.setProperty('--tab-color', categoryColor(course.category));
  const badgeClass = course.isFree ? 'badge-free' : 'badge-paid';
  const badgeText = course.isFree ? 'Gratuito' : 'Pago';
  const ratingHtml = course.rating ? `<span class="rating">⭐ ${course.rating}</span>` : '';
  const levelTag = course.level ? `<span class="tag">${course.level}</span>` : '';
  const videosTag = course.videos
    ? `<span class="tag">${course.videos} ${course.videos === 1 ? 'vídeo' : 'vídeos'}</span>`
    : '';
  const isFav = favorites.has(course.id);
  const status = getCourseStatus(course.id);
  card.innerHTML = `
    <div>
      <div class="card-header">
        <span class="badge ${badgeClass}">${badgeText}</span>
        ${ratingHtml}
        <button type="button" class="fav-btn" data-id="${course.id}" data-active="${isFav}"
          aria-label="Marcar como favorito" title="Marcar como favorito">
          <svg viewBox="0 0 24 24"><path d="M12 4.5 14.3 9.4l5.4.7-3.9 3.7.9 5.3L12 16.6l-4.7 2.5.9-5.3-3.9-3.7 5.4-.7L12 4.5Z" stroke-width="1.8" stroke-linejoin="round"/></svg>
        </button>
      </div>
      <h2 class="course-title">${course.title}</h2>
      <p class="course-provider">Plataforma: <span>${course.provider}</span></p>
    </div>
    <div>
      <div class="tags" style="margin-bottom: 1rem;">
        <span class="tag">${course.category}</span>
        ${levelTag}
        ${videosTag}
      </div>
      <div class="card-footer">
        <select class="status-select" data-id="${course.id}" data-status="${status}" aria-label="Status de estudo">
          <option value="none" ${status === 'none' ? 'selected' : ''}>${STATUS_LABELS.none}</option>
          <option value="progress" ${status === 'progress' ? 'selected' : ''}>${STATUS_LABELS.progress}</option>
          <option value="done" ${status === 'done' ? 'selected' : ''}>${STATUS_LABELS.done}</option>
        </select>
        <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="btn-access">Acessar</a>
      </div>
    </div>
  `;
  return card;
}
// Um único listener no grid cuida de favoritar e mudar status
// (funciona mesmo para cartões criados depois, sem precisar religar nada).
function wireCardEvents(container) {
  container.addEventListener('click', e => {
    const btn = e.target.closest('.fav-btn');
    if (!btn) return;
    toggleFavorite(btn.dataset.id);
    refreshAllViews();
  });
  container.addEventListener('change', e => {
    const select = e.target.closest('.status-select');
    if (!select) return;
    setCourseStatus(select.dataset.id, select.value);
    refreshAllViews();
  });
}
if (courseGrid) wireCardEvents(courseGrid);
if (favoriteGrid) wireCardEvents(favoriteGrid);
/* ---------- 6. FILTROS E RENDERIZAÇÃO DO CATÁLOGO ---------- */
function renderList(container, list, emptyText) {
  if (!container) return;
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-message">${emptyText}</div>`;
    return;
  }
  list.forEach(course => container.appendChild(createCourseCard(course)));
}
function filterCourses() {
  const searchTerm = (searchInput?.value || '').toLowerCase();
  const selectedCategory = categorySelect?.value || 'Todas';
  const selectedPrice = priceSelect?.value || 'all';
  const selectedLevel = levelSelect?.value || 'Todos';
  const selectedStatus = statusSelect?.value || 'all';
  const filtered = courses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm) ||
      course.provider.toLowerCase().includes(searchTerm) ||
      course.category.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === 'Todas' || course.category === selectedCategory;
    const matchesPrice =
      selectedPrice === 'all' ||
      (selectedPrice === 'free' && course.isFree) ||
      (selectedPrice === 'paid' && !course.isFree);
    const matchesLevel = selectedLevel === 'Todos' || course.level === selectedLevel;
    const matchesStatus = selectedStatus === 'all' || getCourseStatus(course.id) === selectedStatus;
    return matchesSearch && matchesCategory && matchesPrice && matchesLevel && matchesStatus;
  });
  renderList(courseGrid, filtered, 'Nenhum curso encontrado com os filtros selecionados.');
}
function renderFavorites() {
  const favCourses = courses.filter(c => favorites.has(c.id));
  renderList(favoriteGrid, favCourses, 'Você ainda não marcou nenhum curso como favorito. Toque na estrela de um curso para guardá-lo aqui.');
}
[searchInput, categorySelect, priceSelect, levelSelect, statusSelect].forEach(el => {
  if (!el) return;
  el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', filterCourses);
});
/* ---------- 7. PAINEL ---------- */
const statRow = document.getElementById('statRow');
const continueList = document.getElementById('continueList');
const categoryChips = document.getElementById('categoryChips');
function renderDashboard() {
  if (!statRow) return;
  const total = courses.length;
  const done = courses.filter(c => getCourseStatus(c.id) === 'done').length;
  const inProgress = courses.filter(c => getCourseStatus(c.id) === 'progress');
  const favCount = favorites.size;
  const solvedCount = solved.size;
  const stats = [
    { number: total, label: 'Cursos no catálogo', color: '#3b5ba9' },
    { number: inProgress.length, label: 'Em andamento', color: '#c77d0a' },
    { number: done, label: 'Concluídos', color: '#1f8a70' },
    { number: favCount, label: 'Favoritos', color: '#b23a6b' }
  ];
  statRow.innerHTML = stats.map(s => `
    <div class="stat-card" style="--stat-color: ${s.color}">
      <div class="stat-number">${s.number}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
  // Continuar estudando
  if (continueList) {
    if (inProgress.length === 0) {
      continueList.innerHTML = `<li class="empty-note">Nenhum curso em andamento ainda. Vá até Cursos e marque um como "Em andamento".</li>`;
    } else {
      continueList.innerHTML = inProgress.slice(0, 5).map(c => `
        <li class="continue-item" style="--tab-color: ${categoryColor(c.category)}">
          <div>
            <div class="title">${c.title}</div>
            <div class="provider">${c.provider}</div>
          </div>
          <a href="${c.url}" target="_blank" rel="noopener noreferrer">Continuar</a>
        </li>
      `).join('');
    }
  }
  // Cursos por categoria
  if (categoryChips) {
    const counts = {};
    courses.forEach(c => { counts[c.category] = (counts[c.category] || 0) + 1; });
    categoryChips.innerHTML = Object.keys(counts).map(cat => `
      <button type="button" class="chip" data-category="${cat}" style="--chip-color: ${categoryColor(cat)}">
        <span class="dot"></span>${cat} <span class="count">${counts[cat]}</span>
      </button>
    `).join('');
  }
}
if (categoryChips) {
  categoryChips.addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    if (categorySelect) categorySelect.value = chip.dataset.category;
    filterCourses();
    switchView('courses');
  });
}
function refreshAllViews() {
  filterCourses();
  renderFavorites();
  renderDashboard();
}
/* ---------- 8. NAVEGAÇÃO POR ABAS ---------- */
const railTabs = document.querySelectorAll('.rail-tab');
const viewTitleEl = document.getElementById('viewTitle');
const viewSubtitleEl = document.getElementById('viewSubtitle');
const VIEW_INFO = {
  dashboard: { title: 'Painel', subtitle: 'Um resumo dos seus estudos até agora.' },
  courses: { title: 'Cursos', subtitle: 'Busque, filtre e acompanhe o que está estudando.' },
  favorites: { title: 'Favoritos', subtitle: 'Os cursos que você guardou para depois.' },
  practice: { title: 'Prática', subtitle: 'Treine lógica de programação com desafios do LeetCode.' }
};
function switchView(viewName) {
  document.querySelectorAll('.view').forEach(section => {
    section.hidden = section.id !== `view-${viewName}`;
    section.classList.toggle('is-active', section.id === `view-${viewName}`);
  });
  railTabs.forEach(tab => tab.classList.toggle('is-active', tab.dataset.view === viewName));
  const info = VIEW_INFO[viewName];
  if (info && viewTitleEl && viewSubtitleEl) {
    viewTitleEl.textContent = info.title;
    viewSubtitleEl.textContent = info.subtitle;
  }
  if (viewName === 'favorites') renderFavorites();
  if (viewName === 'dashboard') renderDashboard();
}
railTabs.forEach(tab => {
  tab.addEventListener('click', () => switchView(tab.dataset.view));
});
// RENDERIZAÇÃO INICIAL
filterCourses();
renderDashboard();

// 9. ÁREA DE PRÁTICA (LEETCODE)

const LC_URL = 'https://leetcode.com/problems/';
// lc(nome, slug, nível, tópicos, descrição)
const lc = (title, slug, level, topics, description) =>
  ({ title, slug, level, topics, description, url: `${LC_URL}${slug}/` });

const challenges = [
  // ----- Facil -----
  lc('Add Two Integers', 'add-two-integers', 'Easy', ['Matemática'],
'Some dois números inteiros. Ótimo para conhecer o formato da plataforma.'),
  lc('Two Sum', 'two-sum', 'Easy', ['Array', 'Hash Map'],
  'Encontre dois números do array cuja soma seja igual ao alvo.'),
  lc('Fizz Buzz', 'fizz-buzz', 'Easy', ['Matemática', 'String'],
    'Pratique condicionais e o operador de resto (%) gerando uma lista de textos.'),
  lc('Palindrome Number', 'palindrome-number', 'Easy', ['Matemática'],
    'Diga se um número inteiro é igual ao seu inverso.'),
  lc('Reverse String', 'reverse-string', 'Easy', ['String', 'Dois ponteiros'],
    'Inverta uma lista de caracteres usando apenas a própria lista.'),
  lc('Valid Anagram', 'valid-anagram', 'Easy', ['String', 'Hash Map'],
    'Verifique se duas palavras usam exatamente as mesmas letras.'),
  lc('Contains Duplicate', 'contains-duplicate', 'Easy', ['Array', 'Hash Set'],
    'Descubra se algum valor aparece mais de uma vez no array.'),
  lc('Valid Parentheses', 'valid-parentheses', 'Easy', ['String', 'Pilha'],
    'Confira se parênteses, colchetes e chaves estão abertos e fechados na ordem certa.'),
  lc('Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'Easy', ['Array'],
    'Ache o maior lucro possível comprando e vendendo uma ação uma única vez.'),
  lc('Climbing Stairs', 'climbing-stairs', 'Easy', ['Programação dinâmica'],
    'Conte de quantas formas é possível subir uma escada de 1 ou 2 degraus por vez.'),
  // ----- MÉDIO -----
  lc('Longest Substring Without Repeating Characters', 'longest-substring-without-repeating-characters', 'Medium', ['String', 'Janela deslizante'],
  'Encontre o maior trecho de uma string sem letras repetidas.'),
  lc('Group Anagrams', 'group-anagrams', 'Medium', ['String', 'Hash Map'],
    'Agrupe as palavras que são anagramas umas das outras.'),
  lc('Top K Frequent Elements', 'top-k-frequent-elements', 'Medium', ['Array', 'Hash Map'],
    'Retorne os k valores que mais aparecem em um array.'),
  lc('Product of Array Except Self', 'product-of-array-except-self', 'Medium', ['Array', 'Prefixo/Sufixo'],
    'Calcule, para cada posição, o produto de todos os outros números, sem usar divisão.'),
  lc('Maximum Subarray', 'maximum-subarray', 'Medium', ['Array', 'Programação dinâmica'],
    'Encontre o trecho contínuo do array com a maior soma.'),
  lc('3Sum', '3sum', 'Medium', ['Array', 'Dois ponteiros'],
  'Liste todos os trios de números que somam zero, sem repetir trios.'),
  lc('Container With Most Water', 'container-with-most-water', 'Medium', ['Array', 'Dois ponteiros'],
    'Escolha duas barras que formem o recipiente capaz de guardar mais água.'),
  lc('Coin Change', 'coin-change', 'Medium', ['Programação dinâmica'],
    'Descubra o menor número de moedas necessário para formar um valor.'),
  lc('Number of Islands', 'number-of-islands', 'Medium', ['Grafo', 'DFS/BFS', 'Matriz'],
    'Conte quantas ilhas existem em uma grade de terra e água.'),
  lc('Longest Palindromic Substring', 'longest-palindromic-substring', 'Medium', ['String', 'Programação dinâmica'],
    'Ache o maior trecho de uma string que seja um palíndromo.'),
  // ----- AVANÇADO -----
  lc('Median of Two Sorted Arrays', 'median-of-two-sorted-arrays', 'Hard', ['Array', 'Busca binária'],
    'Calcule a mediana de dois arrays ordenados em tempo logarítmico.'),
  lc('Regular Expression Matching', 'regular-expression-matching', 'Hard', ['String', 'Programação dinâmica'],
    'Implemente a correspondência de texto com os curingas "." e "*".'),
  lc('Merge k Sorted Lists', 'merge-k-sorted-lists', 'Hard', ['Lista ligada', 'Heap'],
    'Una várias listas ligadas ordenadas em uma só lista ordenada.'),
  lc('Trapping Rain Water', 'trapping-rain-water', 'Hard', ['Array', 'Dois ponteiros'],
    'Calcule quanta água da chuva fica retida entre barras de alturas diferentes.'),
  lc('First Missing Positive', 'first-missing-positive', 'Hard', ['Array'],
    'Encontre o menor inteiro positivo ausente, usando memória extra constante.'),
  lc('Minimum Window Substring', 'minimum-window-substring', 'Hard', ['String', 'Janela deslizante'],
    'Ache o menor trecho de uma string que contenha todas as letras de outra.'),
  lc('Sliding Window Maximum', 'sliding-window-maximum', 'Hard', ['Array', 'Fila dupla'],
    'Retorne o maior valor de cada janela de tamanho k que percorre o array.'),
  lc('Largest Rectangle in Histogram', 'largest-rectangle-in-histogram', 'Hard', ['Array', 'Pilha'],
    'Encontre a área do maior retângulo dentro de um histograma.'),
  lc('N-Queens', 'n-queens', 'Hard', ['Backtracking'],
    'Posicione N rainhas em um tabuleiro NxN sem que se ataquem.'),
  lc('Word Ladder', 'word-ladder', 'Hard', ['Grafo', 'BFS'],
    'Ache a menor sequência de palavras trocando uma letra por vez até chegar ao destino.')
];
const levelLabels = { Easy: 'Fácil', Medium: 'Intermediário', Hard: 'Avançado' };
const levelBadge = { Easy: 'badge-easy', Medium: 'badge-medium', Hard: 'badge-hard' };
let currentLevel = 'Todos';
const challengeGrid = document.getElementById('challengeGrid');
const levelTabs = document.getElementById('levelTabs');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
function updateProgress() {
  const total = challenges.length;
  if (progressText) progressText.textContent = `${solved.size} de ${total} resolvidos`;
  if (progressFill) progressFill.style.width = `${(solved.size / total) * 100}%`;
}
function renderChallenges() {
  if (!challengeGrid) return;
  const list = challenges.filter(c => currentLevel === 'Todos' || c.level === currentLevel);
  challengeGrid.innerHTML = '';
  list.forEach(c => {
    const isDone = solved.has(c.slug);
    const card = document.createElement('div');
    card.className = 'challenge-card' + (isDone ? ' done' : '');
    card.innerHTML = `
      <div>
        <span class="badge ${levelBadge[c.level]}">${levelLabels[c.level]}</span>
        <h3>${c.title}</h3>
        <p>${c.description}</p>
        <div class="tags">
          ${c.topics.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="challenge-actions">
        <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="btn-solve">Resolver no LeetCode</a>
        <label class="solved-check">
          <input type="checkbox" data-slug="${c.slug}" ${isDone ? 'checked' : ''} />
          Resolvido
        </label>
      </div>
    `;
    challengeGrid.appendChild(card);
  });
  updateProgress();
}
if (levelTabs) {
  levelTabs.addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    currentLevel = tab.dataset.level;
    levelTabs.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === tab));
    renderChallenges();
  });
}
if (challengeGrid) {
  challengeGrid.addEventListener('change', e => {
    const box = e.target.closest('input[type="checkbox"]');
    if (!box) return;
    if (box.checked) solved.add(box.dataset.slug);
    else solved.delete(box.dataset.slug);
    saveSolved();
    const card = box.closest('.challenge-card');
    if (card) card.classList.toggle('done', box.checked);
    updateProgress();
    renderDashboard(); 
  });
  renderChallenges();
}