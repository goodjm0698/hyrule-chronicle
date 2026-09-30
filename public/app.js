'use strict';

const diary = 'https://zeldawiki.wiki/wiki/Zelda%27s_Diary';
const memories = 'https://zeldawiki.wiki/wiki/Memory';
const dragon = 'https://zeldawiki.wiki/wiki/Light_Dragon';
const games = {
  botw: {
    caption: 'BREATH OF THE WILD',
    chapters: [
      { label: '낯선 동행', period: '재앙 이전 · 왕녀와 호위 기사', title: '가까이 있지만,<br>멀었던 두 사람.', word: 'Distance',
        paragraphs: ['봉인의 힘을 깨우지 못한 젤다에게, 검에 선택받은 링크의 존재는 자신의 부족함을 떠올리게 합니다. 말없이 따르는 그의 태도도 쉽게 이해하지 못합니다.', '링크는 맡은 호위 임무를 계속합니다. 그러나 곁에 있다는 사실만으로 마음의 거리가 좁혀지는 것은 아닙니다.'],
        reading: '두 사람의 시작에는 영웅이라는 이름 아래 감춰진 불안과 오해가 있습니다.', evidence: 'BOTW · 젤다의 일기, 초반 회상', source: diary },
      { label: '침묵의 이유', period: '재앙 이전 · 오해에서 이해로', title: '너도 나와 같은<br>무게를 지고 있었구나.', word: 'Understanding',
        paragraphs: ['이가단의 위협에서 자신을 구한 링크를 본 뒤, 젤다는 그에게 먼저 말을 걸기로 합니다. 대화를 통해 침묵 뒤의 이유도 알게 됩니다.', '링크 역시 많은 기대와 책임 때문에 감정을 드러내지 못하고 있었습니다. 젤다는 그의 부담을 이해하며, 자신의 고민도 나눌 수 있기를 바랍니다.'],
        reading: '완벽한 기사처럼 보였던 사람이, 자신의 어려움을 나눌 수 있는 동반자로 다가오는 순간입니다.', evidence: 'BOTW · 젤다의 일기, 이가단 습격 이후', source: diary },
      { label: '재앙 속의 선택', period: '재앙의 날 · BOTW 핵심 전개', title: '이번에는,<br>내가 너를 지킬게.', word: 'Courage', spoiler: true,
        paragraphs: ['재앙이 하이랄을 휩쓴 뒤, 링크는 젤다를 지키다 쓰러집니다. 수호자의 공격 앞에서 젤다가 그를 감싸는 순간, 오랫동안 깨어나지 않던 봉인의 힘이 발현됩니다.', '젤다는 링크를 회생의 사당으로 보내고, 자신은 재앙 가논을 억누르기 위해 성으로 향합니다. 두 사람의 역할은 서로의 생존과 미래를 지탱하는 쪽으로 이어집니다.'],
        reading: '젤다의 각성을 사랑의 표현으로 읽을 수 있지만, 감정의 이름은 해석입니다. 장면에서 분명한 것은 링크를 지키려는 행동입니다.', evidence: 'BOTW · 마지막 회상, 재앙 이후의 기록', source: memories },
      { label: '백 년 뒤의 재회', period: '현재 · BOTW 결말', title: '잃어버린 기억의 끝에,<br>다시 너를 만나다.', word: 'Reunion', spoiler: true,
        paragraphs: ['백 년의 잠에서 깨어난 링크는 흩어진 기억을 되찾고 하이랄 성으로 향합니다. 젤다가 긴 시간 억눌러 온 재앙에 맞서, 두 사람은 각자의 역할로 가논을 물리칩니다.', '모든 사진의 기억을 되찾았을 때 볼 수 있는 추가 결말에서는, 두 사람이 하이랄을 다시 일으킬 여정을 함께 시작합니다.'],
        reading: '과거를 되찾는 여정은, 함께 살아갈 미래를 바라보는 이야기로 이어집니다.', evidence: 'BOTW · 기억 찾기, 결말과 추가 결말', source: memories }
    ]
  },
  totk: {
    caption: 'TEARS OF THE KINGDOM',
    chapters: [
      { label: '재건의 나날', period: '이변 이전 · 다시 함께 걷는 하이랄', title: '거대한 전설 사이,<br>작은 마음의 기록.', word: 'Together',
        paragraphs: ['재앙이 끝난 뒤, 젤다는 하이랄의 재건을 돕고 링크는 그녀의 곁을 지킵니다. 두 사람의 관계는 위기 속 장면뿐 아니라 일상에 남은 기록에서도 드러납니다.', '젤다의 비밀 우물에 있는 일기에는, 자신과 함께 다니느라 옷이 낡은 링크를 위해 새 영걸의 옷을 준비했다는 내용이 남아 있습니다.'],
        reading: '상대의 수고를 알아보고 조용히 선물을 준비하는 배려에서, 오래 쌓인 친밀함을 읽을 수 있습니다.', evidence: 'TOTK · 젤다의 비밀 우물, 젤다의 일기', source: diary },
      { label: '시간의 저편', period: '용의 눈물 · TOTK 주요 전개', title: '닿을 수 없는 곳에서도,<br>너를 믿는 마음.', word: 'Faith', spoiler: true,
        paragraphs: ['하이랄 성 지하의 사건으로 젤다는 먼 과거로 이동합니다. 링크는 현재에 남아 그녀의 행방을 찾고, 용의 눈물에 담긴 기억을 통해 무슨 일이 있었는지 알아갑니다.', '젤다는 고대 하이랄에서 링크에 대한 믿음을 전합니다. 시간으로 갈라진 두 사람의 행동은 같은 미래를 향해 이어집니다.'],
        reading: 'BOTW가 잃어버린 함께의 시간을 되찾는 이야기라면, TOTK는 떨어져 있는 동안에도 이어지는 신뢰를 보여줍니다.', evidence: 'TOTK · 용의 눈물에 담긴 기억', source: memories },
      { label: '미래를 위한 선택', period: '용의 눈물 후반 · TOTK 핵심 반전', title: '나의 시간을,<br>너의 내일에게.', word: 'Devotion', spoiler: true,
        paragraphs: ['과거로 전해진 손상된 마스터 소드를 받은 젤다는, 긴 세월 동안 신성한 힘을 채워 검을 복원할 방법을 택합니다. 자신의 정신을 잃을 위험을 알고도 비석을 삼켜 백룡이 됩니다.', '하늘을 떠돌며 검을 회복시킨 젤다. 링크가 다시 손에 넣는 마스터 소드에는, 그가 미래를 바꿀 수 있으리라는 그녀의 믿음이 담겨 있습니다.'],
        reading: '이 선택은 링크 개인에 대한 믿음과 하이랄을 구하려는 의지가 함께 담긴 장면으로 읽을 수 있습니다.', evidence: 'TOTK · 후반부 기억, 마스터 소드 회수', source: dragon },
      { label: '다시 맞잡는 손', period: '최후의 전투 이후 · TOTK 결말', title: '이번에는,<br>놓치지 않을 손.', word: 'Homecoming', spoiler: true,
        paragraphs: ['마지막 전투에서 백룡은 링크를 돕습니다. 승리 뒤 라울과 소니아의 힘이 링크를 통해 전해지고, 젤다는 본래의 모습으로 돌아옵니다.', '하늘에서 떨어지는 젤다를 향해 링크가 몸을 던집니다. 도입부에서 놓쳤던 손을 이번에는 붙잡습니다. 오랜 이별 끝에, 두 사람은 같은 시간으로 돌아옵니다.'],
        reading: '시작의 실패한 손잡기와 마지막의 구조가 서로 호응합니다. 화면의 반복을 통해 재회를 느끼게 하는 연출입니다.', evidence: 'TOTK · 최종 전투와 결말', source: dragon }
    ]
  }
};

let game = 'botw';
let chapter = 0;
let allowSpoilers = false;
const revealed = new Set();
const list = document.querySelector('#memory-list');
const content = document.querySelector('#memory-content');
const count = document.querySelector('#memory-count');
const previous = document.querySelector('#previous-memory');
const next = document.querySelector('#next-memory');
const toggle = document.querySelector('#spoiler-toggle');
const tabs = [...document.querySelectorAll('[data-game]')];

function renderContent() {
  const item = games[game].chapters[chapter];
  const locked = item.spoiler && !allowSpoilers && !revealed.has(`${game}-${chapter}`);
  const number = String(chapter + 1).padStart(2, '0');
  content.innerHTML = locked
    ? `<div class="memory-locked"><span class="lock-symbol" aria-hidden="true">◇</span><p class="eyebrow">SEALED MEMORY ${number}</p><h3>아직 열지 않은 기억</h3><p>이 기억에는 ${game === 'botw' ? '야생의 숨결' : '티어스 오브 더 킹덤'}의<br>중요한 전개 또는 결말이 담겨 있습니다.</p><button id="reveal-memory" class="reveal-button">스포일러를 포함해 이 기억 열기</button></div>`
    : `<div class="memory-top"><span class="eyebrow">MEMORY ${number}</span><span class="memory-period">${item.period}</span></div><div class="memory-word" aria-hidden="true">${item.word}</div><h3>${item.title}</h3><div class="memory-prose">${item.paragraphs.map(p => `<p>${p}</p>`).join('')}</div><aside class="reading"><span>관계를 읽는 시선</span><p>${item.reading}</p></aside><a class="evidence" href="${item.source}" target="_blank" rel="noopener noreferrer">기록 확인 · ${item.evidence} <span aria-hidden="true">↗</span></a>${item.spoiler && !allowSpoilers ? '<button id="hide-memory" class="hide-memory">이 기억 다시 가리기</button>' : ''}`;
  count.textContent = `${number} / 04`;
  previous.disabled = chapter === 0;
  next.disabled = chapter === games[game].chapters.length - 1;
  list.querySelectorAll('button').forEach((button, i) => { button.setAttribute('aria-current', i === chapter ? 'step' : 'false'); });
}
function renderGame() {
  tabs.forEach(tab => { const active = tab.dataset.game === game; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; });
  document.querySelector('#story-panel').setAttribute('aria-labelledby', `tab-${game}`);
  document.querySelector('#game-caption').textContent = games[game].caption;
  list.innerHTML = games[game].chapters.map((item, index) => `<li><button data-chapter="${index}" aria-current="${index === chapter ? 'step' : 'false'}"><span class="step-number">${String(index + 1).padStart(2, '0')}</span><span>${item.label}</span>${item.spoiler ? '<small aria-label="스포일러 포함">◇</small>' : ''}</button></li>`).join('');
  renderContent();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => { game = tab.dataset.game; chapter = 0; revealed.clear(); renderGame(); });
  tab.addEventListener('keydown', event => {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const target = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[target].click(); tabs[target].focus();
  });
});
list.addEventListener('click', event => { const button = event.target.closest('[data-chapter]'); if (button) { chapter = Number(button.dataset.chapter); renderContent(); } });
previous.addEventListener('click', () => { if (chapter > 0) { chapter--; renderContent(); if (previous.disabled) next.focus(); } });
next.addEventListener('click', () => { if (chapter < games[game].chapters.length - 1) { chapter++; renderContent(); if (next.disabled) previous.focus(); } });
toggle.addEventListener('click', () => { allowSpoilers = !allowSpoilers; revealed.clear(); toggle.setAttribute('aria-pressed', String(allowSpoilers)); renderContent(); });
content.addEventListener('click', event => {
  if (event.target.closest('#reveal-memory')) { revealed.add(`${game}-${chapter}`); renderContent(); document.querySelector('#hide-memory')?.focus({preventScroll:true}); }
  if (event.target.closest('#hide-memory')) { revealed.delete(`${game}-${chapter}`); renderContent(); document.querySelector('#reveal-memory')?.focus({preventScroll:true}); }
});
renderGame();
