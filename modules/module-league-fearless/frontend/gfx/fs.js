const namespace = 'module-league-fearless';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

function setImg(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  el.src = url || '';
  el.style.opacity = url ? '1' : '0'; // cache si vide
}

function setState(res) {
  const state = res.state || [];
  if (state.length === 0) return;

  const games = chunk(state, 10);

  const g1 = games[0] || [];
  const g2 = games[1] || [];

  // Game 1 -> slots 1..10
  for (let i = 0; i < 10; i++) {
    setImg(`fs-${i + 1}`, g1[i]?.tileURL);
  }

  // Game 2 -> slots 11..20
  for (let i = 0; i < 10; i++) {
    setImg(`fs-${i + 11}`, g2[i]?.tileURL);
  }
}

LPTE.onready(async () => {
  const res = await LPTE.request({
    meta: {
      namespace,
      type: 'request',
      version: 1
    }
  });

  setState(res);
});