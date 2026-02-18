// infrafi.map — Impact page interactivity

(function () {
  'use strict';

  // ---- Animated counters ----
  function animateCounters() {
    var counters = document.querySelectorAll('.counter-value');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.dataset.animated) return;
        el.dataset.animated = '1';
        countUp(el);
        observer.unobserve(el);
      });
    }, { threshold: 0.3 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function countUp(el) {
    var target = parseInt(el.dataset.target, 10);
    var prefix = el.dataset.prefix || '';
    var suffix = el.dataset.suffix || '';
    var duration = 1200;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(ease * target);
      el.textContent = prefix + formatNumber(current) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + formatNumber(target) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  function formatNumber(n) {
    if (n >= 1000000) {
      return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (n >= 1000) {
      return n.toLocaleString('en-US');
    }
    return n.toString();
  }

  // ---- Expandable vertical cards ----
  function initCards() {
    var cards = document.querySelectorAll('.v-card');
    cards.forEach(function (card) {
      var header = card.querySelector('.v-card-header');
      header.addEventListener('click', function () {
        var wasOpen = card.classList.contains('open');
        // Close all
        cards.forEach(function (c) { c.classList.remove('open'); });
        // Toggle clicked
        if (!wasOpen) {
          card.classList.add('open');
          // Smooth scroll into view
          setTimeout(function () {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      });
    });
  }

  // ---- Timeline scroll reveal ----
  function initTimeline() {
    var items = document.querySelectorAll('.tl-item');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, { threshold: 0.2 });

    items.forEach(function (item, i) {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-12px)';
      item.style.transition = 'opacity 400ms ease ' + (i * 80) + 'ms, transform 400ms ease ' + (i * 80) + 'ms';
      observer.observe(item);
    });
  }

  // ---- Init ----
  function init() {
    animateCounters();
    initCards();
    initTimeline();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
