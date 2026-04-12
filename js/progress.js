/* ============================================================
   Petit Mot — progress.js
   localStorage persistence for day-completion records.
   Exposes: window.PetitMot.Progress
   No DOM interaction. No dependencies.
   ============================================================ */

window.PetitMot = window.PetitMot || {};

window.PetitMot.Progress = (function () {
  'use strict';

  var STORAGE_KEY = 'petit-mot-progress';

  // In-memory fallback — used when localStorage is unavailable
  var _completed = [];

  /* ── Private helpers ──────────────────────────────────────── */

  function _readStorage() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // Keep only integers in range 1-30
      return parsed.filter(function (n) {
        return typeof n === 'number' && Number.isInteger(n) && n >= 1 && n <= 30;
      });
    } catch (e) {
      return [];
    }
  }

  function _writeStorage(arr) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (e) {
      // Storage unavailable — in-memory array already updated, silently continue
    }
  }

  /* ── Public interface ─────────────────────────────────────── */

  /**
   * Reads completion state from localStorage into memory.
   * Called once on app init.
   */
  function load() {
    _completed = _readStorage();
  }

  /**
   * Marks a day as complete and persists to localStorage.
   * @param {number} dayNumber — integer 1-30
   */
  function markComplete(dayNumber) {
    if (_completed.indexOf(dayNumber) === -1) {
      _completed.push(dayNumber);
      _writeStorage(_completed);
    }
  }

  /**
   * Returns true if the given day is marked complete.
   * @param {number} dayNumber — integer 1-30
   * @returns {boolean}
   */
  function isComplete(dayNumber) {
    return _completed.indexOf(dayNumber) !== -1;
  }

  /**
   * Returns the count of completed days (0-30).
   * @returns {number}
   */
  function completedCount() {
    return _completed.length;
  }

  return {
    load: load,
    markComplete: markComplete,
    isComplete: isComplete,
    completedCount: completedCount
  };

}());
