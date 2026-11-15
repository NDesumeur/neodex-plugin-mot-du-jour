// lancé par le test « local » de NeoDex : une partie libre au clavier (un essai raté puis le bon mot), les lettres qui se retournent une par une,
// le clavier coloré après, la définition du Wiktionnaire, et la place prise (avec NEO_SHOTS : garde des images de l'appli)
module.exports = async ({ pj, sleep }) => {
  const C = code => pj(`(() => { const T = document.getElementById('mdGrid').__md, md = T.st(); ${code} })()`);
  const key = k => pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: '${k}', bubbles: true})), 0`);
  const type = async w => { for (const ch of w.slice(1)) await key(ch); await key('Enter'); };
  const shot = async n => { if (!process.env.NEO_SHOTS || !pj.shot) return; await pj.shot(require('path').join(process.env.NEO_SHOTS, 'motdujour-' + n + '.png')); };
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  const st = await C('return md ? md.mode : "rien";'); if (!st) throw new Error('le jeu ne démarre pas');
  await C(`T.play('maison'); return 0;`); await sleep(200);
  await type('MOUTON'); await sleep(320);
  // pendant le retournement : une partie des lettres est déjà colorée, pas toutes
  const mid = await pj(`(() => { const r = document.getElementById('mdGrid').children[0]; return [...r.children].filter(c => /md\\d/.test(c.className)).length; })()`);
  if (!(mid > 0 && mid < 6)) throw new Error('les lettres devaient se retourner une par une (' + mid + ' retournées)');
  await key('A'); const typedDuring = await C('return md.typed;');
  if (typedDuring !== 'M') throw new Error('on ne doit pas taper pendant le retournement');
  await sleep(1800);
  const row1 = await pj(`[...document.getElementById('mdGrid').children[0].children].map(c => c.className.match(/md(\\d)/)?.[1] ?? '-').join('')`);
  if (row1 !== '200022')throw new Error('couleurs de MOUTON contre MAISON : ' + row1);
  const keyM = await pj(`[...document.querySelectorAll('.mdKey')].find(b => b.textContent === 'M').className`);
  if (!/\bok\b/.test(keyM)) throw new Error('la touche M devait être verte après le retournement');
  await type('MAISON'); await sleep(2600);
  if (!await C('return md.cur.done && md.cur.won;')) throw new Error('la partie devait être gagnée');
  // la définition : prise en ligne (si la connexion manque, un message le dit)
  let def = '';
  for (let i = 0; i < 20 && !/Bâtiment|indisponible|Pas de définition/i.test(def); i++) { await sleep(300); def = await pj(`document.getElementById('mdDef').textContent`); }
  if (!/Bâtiment/i.test(def)) { if (/indisponible/.test(def)) console.log('définition : pas de connexion'); else throw new Error('définition de maison : « ' + def + ' »'); }
  await shot('fin');
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  const L = await pj(`(() => { const k = [...document.querySelectorAll('#mdKeys, #mdDef')].map(e => e.getBoundingClientRect()).reduce((a, r) => r.bottom > a.bottom ? r : a), c = document.querySelector('.mdCell').getBoundingClientRect(); let s = 0; for (let e = document.getElementById('mdKeys').parentElement; e; e = e.parentElement) s += e.scrollTop; return { bottom: Math.round(k.bottom + s), cell: Math.round(c.width), key: Math.round(document.querySelector('.mdKey').getBoundingClientRect().width), wh: innerHeight, ww: innerWidth, sw: document.documentElement.scrollWidth }; })()`);
  if (process.env.NEO_FIT_LOG) console.log('FIT', JSON.stringify(L));
  if (L.bottom > L.wh + 1 || L.sw > L.ww + 1 || L.cell < 34) throw new Error('la grille et le clavier dépassent la fenêtre ou restent petits : ' + JSON.stringify(L));
  return 'MOUTON puis MAISON, lettres retournées une par une · ' + (/Bâtiment/i.test(def) ? 'définition affichée' : 'pas de connexion') + ' · cases de ' + L.cell + ' px, touches de ' + L.key + ' px dans ' + L.ww + '×' + L.wh;
};
