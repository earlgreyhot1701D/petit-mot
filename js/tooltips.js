/* ============================================================
   Petit Mot — tooltips.js
   French translation tooltip component.
   Exposes: window.PetitMot.Tooltips = { init, refresh }
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Tooltips = (function () {
  'use strict';

  var tooltip = null;
  var dismissTimer = null;
  var DISMISS_DELAY = 2200;

  /* ── Create shared tooltip element ─────────────────────────
     One element reused for all triggers.
  ─────────────────────────────────────────────────────────── */
  function ensureTooltip() {
    if (tooltip) return;
    tooltip = document.createElement('div');
    tooltip.className = 'fr-tooltip';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);
  }

  /* ── Position tooltip above trigger ────────────────────────
     Uses getBoundingClientRect + scrollY for absolute positioning.
  ─────────────────────────────────────────────────────────── */
  function positionAbove(trigger) {
    var rect = trigger.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset || 0;
    var scrollX = window.scrollX || window.pageXOffset || 0;

    tooltip.style.left = (rect.left + scrollX + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = (rect.top + scrollY - tooltip.offsetHeight - 8) + 'px';
  }

  /* ── Show tooltip ───────────────────────────────────────── */
  function showTooltip(trigger) {
    var text = trigger.getAttribute('data-en');
    if (!text) return;

    clearTimeout(dismissTimer);

    tooltip.textContent = text;
    tooltip.style.display = 'block';

    // Position after making visible so offsetWidth/Height are available
    positionAbove(trigger);

    dismissTimer = setTimeout(hideTooltip, DISMISS_DELAY);
  }

  /* ── Hide tooltip ───────────────────────────────────────── */
  function hideTooltip() {
    clearTimeout(dismissTimer);
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  }

  /* ── Attach listeners to a single element ──────────────── */
  function attachToElement(el) {
    // Avoid double-attaching
    if (el.dataset.tooltipBound) return;
    el.dataset.tooltipBound = '1';

    // Desktop
    el.addEventListener('mouseenter', function () {
      showTooltip(el);
    });
    el.addEventListener('mouseleave', function () {
      hideTooltip();
    });

    // Mobile — no preventDefault so card flip still fires
    el.addEventListener('touchstart', function () {
      showTooltip(el);
    }, { passive: true });
  }

  /* ── scan DOM for [data-fr] elements ────────────────────── */
  function scan() {
    var elements = document.querySelectorAll('[data-fr]');
    elements.forEach(function (el) {
      attachToElement(el);
    });
  }

  /* ── init ───────────────────────────────────────────────── */
  function init() {
    ensureTooltip();
    scan();
  }

  /* ── refresh ────────────────────────────────────────────── */
  function refresh() {
    scan();
  }

  return { init: init, refresh: refresh };

}());
