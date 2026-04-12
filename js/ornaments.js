/* ============================================================
   Petit Mot — ornaments.js
   SVG Art Nouveau components: IronArch, IronDivider, EiffelIcon, MetroSign
   Exposes: window.PetitMot.Ornaments.create(type, options)
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Ornaments = (function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';

  function makeSVG(viewBox, width, height) {
    var svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', viewBox);
    svg.setAttribute('width', width || '100%');
    if (height) svg.setAttribute('height', height);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('xmlns', NS);
    return svg;
  }

  function setAttrs(el, attrs) {
    Object.keys(attrs).forEach(function (k) {
      el.setAttribute(k, attrs[k]);
    });
  }

  function makePath(d, attrs) {
    var el = document.createElementNS(NS, 'path');
    el.setAttribute('d', d);
    Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    return el;
  }

  function makeLine(x1, y1, x2, y2, attrs) {
    var el = document.createElementNS(NS, 'line');
    setAttrs(el, Object.assign({ x1: String(x1), y1: String(y1), x2: String(x2), y2: String(y2) }, attrs));
    return el;
  }

  function makeCircle(cx, cy, r, attrs) {
    var el = document.createElementNS(NS, 'circle');
    setAttrs(el, Object.assign({ cx: String(cx), cy: String(cy), r: String(r) }, attrs));
    return el;
  }

  /* ── IronArch ──────────────────────────────────────────────
     Two layered curves, leaf accents, large curl terminals,
     crown medallion with ochre center dot.
     viewBox: 0 0 320 60
  ─────────────────────────────────────────────────────────── */
  function createIronArch() {
    var svg = makeSVG('0 0 320 60', '100%');
    svg.classList.add('ornament-arch');

    // Main outer arch curve
    svg.appendChild(makePath(
      'M 10,58 C 10,20 80,4 160,4 C 240,4 310,20 310,58',
      { stroke: 'var(--green)', 'stroke-width': '2.5', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Inner echo arch (thinner, different profile)
    svg.appendChild(makePath(
      'M 30,58 C 30,28 90,14 160,14 C 230,14 290,28 290,58',
      { stroke: 'var(--green)', 'stroke-width': '1', fill: 'none', 'stroke-linecap': 'round', opacity: '0.55' }
    ));

    // Left curl terminal
    svg.appendChild(makePath(
      'M 10,58 C 4,58 0,54 2,50 C 4,46 10,46 12,50 C 14,54 10,56 8,54',
      { stroke: 'var(--green)', 'stroke-width': '2', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Right curl terminal (mirrored)
    svg.appendChild(makePath(
      'M 310,58 C 316,58 320,54 318,50 C 316,46 310,46 308,50 C 306,54 310,56 312,54',
      { stroke: 'var(--green)', 'stroke-width': '2', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Left leaf accent
    svg.appendChild(makePath(
      'M 55,38 C 50,32 52,24 58,26 C 64,28 62,36 55,38 Z',
      { stroke: 'var(--green)', 'stroke-width': '1', fill: 'var(--green)', opacity: '0.35' }
    ));

    // Right leaf accent (mirrored)
    svg.appendChild(makePath(
      'M 265,38 C 270,32 268,24 262,26 C 256,28 258,36 265,38 Z',
      { stroke: 'var(--green)', 'stroke-width': '1', fill: 'var(--green)', opacity: '0.35' }
    ));

    // Crown medallion ring at apex
    svg.appendChild(makeCircle(160, 4, 5,
      { stroke: 'var(--green)', 'stroke-width': '1.5', fill: 'var(--cream)' }
    ));

    // Crown medallion ochre center dot
    svg.appendChild(makeCircle(160, 4, 2.5, { fill: 'var(--ochre)' }));

    return svg;
  }

  /* ── IronDivider ───────────────────────────────────────────
     Flowing sine-wave curve, leaf bud shapes at peaks,
     central ochre medallion. No straight lines.
     viewBox: 0 0 300 28
  ─────────────────────────────────────────────────────────── */
  function createIronDivider(options) {
    var opts = options || {};
    var width = opts.width || '100%';
    var svg = makeSVG('0 0 300 28', width);
    svg.classList.add('ornament-divider');

    // Flowing sine-wave left of medallion
    svg.appendChild(makePath(
      'M 8,14 C 20,14 22,6 35,6 C 48,6 50,22 63,22 C 76,22 78,14 90,14 C 102,14 104,6 117,6 C 130,6 132,14 138,14',
      { stroke: 'var(--green)', 'stroke-width': '1.5', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Flowing sine-wave right of medallion (mirrored)
    svg.appendChild(makePath(
      'M 162,14 C 168,14 170,6 183,6 C 196,6 198,22 211,22 C 224,22 226,14 238,14 C 250,14 252,6 265,6 C 278,6 280,14 292,14',
      { stroke: 'var(--green)', 'stroke-width': '1.5', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Leaf buds at wave peaks (left side)
    [[35, 6], [63, 22], [117, 6]].forEach(function (pt) {
      svg.appendChild(makePath(
        'M ' + pt[0] + ',' + (pt[1] - 5) +
        ' C ' + (pt[0] - 3) + ',' + (pt[1] - 9) +
        ' ' + (pt[0] + 3) + ',' + (pt[1] - 9) +
        ' ' + pt[0] + ',' + (pt[1] - 5) + ' Z',
        { fill: 'var(--green)', opacity: '0.5' }
      ));
    });

    // Leaf buds at wave peaks (right side)
    [[183, 6], [211, 22], [265, 6]].forEach(function (pt) {
      svg.appendChild(makePath(
        'M ' + pt[0] + ',' + (pt[1] - 5) +
        ' C ' + (pt[0] - 3) + ',' + (pt[1] - 9) +
        ' ' + (pt[0] + 3) + ',' + (pt[1] - 9) +
        ' ' + pt[0] + ',' + (pt[1] - 5) + ' Z',
        { fill: 'var(--green)', opacity: '0.5' }
      ));
    });

    // Central medallion outer ring
    svg.appendChild(makeCircle(150, 14, 10,
      { stroke: 'var(--green)', 'stroke-width': '1.5', fill: 'var(--cream)' }
    ));

    // Central medallion ochre fill
    svg.appendChild(makeCircle(150, 14, 6, { fill: 'var(--ochre)' }));

    return svg;
  }

  /* ── EiffelIcon ────────────────────────────────────────────
     LINE DRAWING — stroke var(--green), fill none.
     Matches mockup: closed trapezoid top, two platforms,
     curved legs with inner lines, arch, horizontal braces,
     lattice hints, ochre antenna.
     viewBox: 0 0 80 120  (aspect ratio 2:3)
     options.size: sets height (default '80px'); width auto-scales
  ─────────────────────────────────────────────────────────── */
  function createEiffelIcon(options) {
    var opts = options || {};
    var h = opts.size || '120px';
    // Parse numeric height to derive width (aspect ratio 80:120 = 2:3)
    var hNum = parseFloat(h);
    var unit = h.replace(/[\d.]/g, '') || 'px';
    var wNum = Math.round(hNum * 80 / 120);
    var wStr = isNaN(wNum) ? 'auto' : (wNum + unit);

    var svg = makeSVG('0 0 80 120', wStr, h);
    svg.classList.add('ornament-eiffel');

    var g    = { stroke: 'var(--green)', 'stroke-width': '1.5', fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
    var gMed = { stroke: 'var(--green)', 'stroke-width': '1.3', fill: 'none', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
    var gDim = { stroke: 'var(--green)', 'stroke-width': '1.2', fill: 'none', 'stroke-linecap': 'round', opacity: '0.5' };
    var gFaint = { stroke: 'var(--green)', 'stroke-width': '0.7', fill: 'none', opacity: '0.4' };

    // Antenna/spire — ochre, top to top-section
    svg.appendChild(makeLine(40, 2, 40, 18,
      { stroke: 'var(--ochre)', 'stroke-width': '1.5', 'stroke-linecap': 'round' }
    ));

    // Top section — closed narrow trapezoid
    svg.appendChild(makePath('M 37,18 L 35,34 L 45,34 L 43,18 Z', g));

    // Second platform — rect at y=34
    svg.appendChild(makePath('M 32,34 L 48,34 L 48,37 L 32,37 Z', gMed));

    // Middle section — widens from platform to first platform
    svg.appendChild(makePath('M 34,37 L 30,56 L 50,56 L 46,37 Z', g));

    // Cross brace in middle section
    svg.appendChild(makeLine(32, 46, 48, 46,
      { stroke: 'var(--green)', 'stroke-width': '0.8', fill: 'none', opacity: '0.5' }
    ));

    // First platform — rect at y=56
    svg.appendChild(makePath('M 27,56 L 53,56 L 53,59.5 L 27,59.5 Z', gMed));

    // Legs — curved outward (outer, heavier weight)
    svg.appendChild(makePath('M 29,59.5 C 26,72 18,90 6,110',
      { stroke: 'var(--green)', 'stroke-width': '2', fill: 'none', 'stroke-linecap': 'round' }
    ));
    svg.appendChild(makePath('M 51,59.5 C 54,72 62,90 74,110',
      { stroke: 'var(--green)', 'stroke-width': '2', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Inner leg lines — lattice depth
    svg.appendChild(makePath('M 33,59.5 C 31,70 26,85 18,110', gDim));
    svg.appendChild(makePath('M 47,59.5 C 49,70 54,85 62,110', gDim));

    // Horizontal braces across legs
    svg.appendChild(makeLine(22, 80, 58, 80, gFaint));
    svg.appendChild(makeLine(15, 95, 65, 95,
      { stroke: 'var(--green)', 'stroke-width': '0.7', fill: 'none', opacity: '0.35' }
    ));

    // Arch between legs
    svg.appendChild(makePath('M 18,98 C 28,88 52,88 62,98',
      { stroke: 'var(--green)', 'stroke-width': '1.3', fill: 'none' }
    ));

    // Ground feet
    svg.appendChild(makeLine(4, 110, 20, 110,
      { stroke: 'var(--green)', 'stroke-width': '1.8', fill: 'none', 'stroke-linecap': 'round' }
    ));
    svg.appendChild(makeLine(60, 110, 76, 110,
      { stroke: 'var(--green)', 'stroke-width': '1.8', fill: 'none', 'stroke-linecap': 'round' }
    ));

    // Lattice hints on top section (X marks)
    svg.appendChild(makePath('M 36,40 L 38,44 M 38,40 L 36,44',
      { stroke: 'var(--green)', 'stroke-width': '0.5', fill: 'none', opacity: '0.3' }
    ));
    svg.appendChild(makePath('M 42,40 L 44,44 M 44,40 L 42,44',
      { stroke: 'var(--green)', 'stroke-width': '0.5', fill: 'none', opacity: '0.3' }
    ));

    return svg;
  }

  /* ── MetroSign ─────────────────────────────────────────────
     Returns a <div class="metro-sign"> styled entirely by CSS.
     No inline styles — .metro-sign and .metro-sign-text in
     styles.css handle all visual properties.
     options.text: station label text (set via textContent)
     options.dataFr / options.dataEn: optional tooltip attrs
  ─────────────────────────────────────────────────────────── */
  function createMetroSign(options) {
    var opts = options || {};

    var div = document.createElement('div');
    div.className = 'metro-sign';

    var span = document.createElement('span');
    span.className = 'metro-sign-text';
    span.textContent = opts.text || '';

    if (opts.dataFr) div.setAttribute('data-fr', opts.dataFr);
    if (opts.dataEn) div.setAttribute('data-en', opts.dataEn);

    div.appendChild(span);
    return div;
  }

  /* ── Public API ─────────────────────────────────────────── */
  function create(type, options) {
    switch (type) {
      case 'iron-arch':    return createIronArch();
      case 'iron-divider': return createIronDivider(options);
      case 'eiffel-icon':  return createEiffelIcon(options);
      case 'metro-sign':   return createMetroSign(options);
      default:
        console.warn('[ornaments] Unknown type:', type);
        return document.createElement('span');
    }
  }

  return { create: create };

}());
