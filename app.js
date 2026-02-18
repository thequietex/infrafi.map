// infrafi.map — Dashboard application

(function () {
  'use strict';

  // State
  let currentFilter = 'all';
  let currentSort = { key: 'name', dir: 'asc' };
  let searchQuery = '';
  let expandedRows = new Set();

  // DOM
  const tableBody = document.getElementById('tableBody');
  const searchInput = document.getElementById('searchInput');
  const filtersContainer = document.getElementById('filters');
  const emptyState = document.getElementById('emptyState');
  const totalProjectsEl = document.getElementById('totalProjects');

  // Init
  function init() {
    totalProjectsEl.textContent = PROJECTS.length;
    bindEvents();
    render();
  }

  // Event bindings
  function bindEvents() {
    searchInput.addEventListener('input', function (e) {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });

    filtersContainer.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      filtersContainer.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });

    document.querySelectorAll('th.sortable').forEach(function (th) {
      th.addEventListener('click', function () {
        var key = th.dataset.sort;
        if (currentSort.key === key) {
          currentSort.dir = currentSort.dir === 'asc' ? 'desc' : 'asc';
        } else {
          currentSort.key = key;
          currentSort.dir = 'asc';
        }
        updateSortIndicators();
        render();
      });
    });

    // Keyboard: Escape clears search
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        searchInput.blur();
        render();
      }
      // Focus search with /
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  function updateSortIndicators() {
    document.querySelectorAll('th.sortable').forEach(function (th) {
      th.classList.remove('sort-asc', 'sort-desc');
      if (th.dataset.sort === currentSort.key) {
        th.classList.add(currentSort.dir === 'asc' ? 'sort-asc' : 'sort-desc');
      }
    });
  }

  // Filter + search
  function getFilteredProjects() {
    return PROJECTS.filter(function (p) {
      // Vertical filter
      if (currentFilter !== 'all' && p.vertical !== currentFilter) return false;

      // Search
      if (searchQuery) {
        var haystack = [
          p.name, p.ticker, p.vertical, p.chain, p.model,
          p.backers.join(' '), p.revenueAnnualized, p.raised
        ].join(' ').toLowerCase();
        return haystack.indexOf(searchQuery) !== -1;
      }

      return true;
    });
  }

  // Sort
  function sortProjects(projects) {
    var key = currentSort.key;
    var dir = currentSort.dir === 'asc' ? 1 : -1;

    return projects.slice().sort(function (a, b) {
      var va, vb;
      switch (key) {
        case 'name':
          va = a.name.toLowerCase();
          vb = b.name.toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        case 'ticker':
          va = a.ticker.toLowerCase();
          vb = b.ticker.toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        case 'vertical':
          va = a.vertical.toLowerCase();
          vb = b.vertical.toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        case 'chain':
          va = a.chain.toLowerCase();
          vb = b.chain.toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        case 'revenue':
          va = a.revenueRaw || 0;
          vb = b.revenueRaw || 0;
          return (va - vb) * dir;
        case 'raised':
          va = a.raisedRaw || 0;
          vb = b.raisedRaw || 0;
          return (va - vb) * dir;
        case 'devices':
          va = a.devicesRaw || 0;
          vb = b.devicesRaw || 0;
          return (va - vb) * dir;
        default:
          return 0;
      }
    });
  }

  // Render
  function render() {
    var filtered = getFilteredProjects();
    var sorted = sortProjects(filtered);

    tableBody.innerHTML = '';

    if (sorted.length === 0) {
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    sorted.forEach(function (project) {
      var isExpanded = expandedRows.has(project.name);

      // Main row
      var tr = document.createElement('tr');
      tr.className = isExpanded ? 'expanded' : '';
      tr.innerHTML = buildMainRow(project, isExpanded);
      tr.addEventListener('click', function () {
        toggleExpand(project.name);
      });
      tableBody.appendChild(tr);

      // Detail row
      var detailTr = document.createElement('tr');
      detailTr.className = 'detail-row' + (isExpanded ? ' visible' : '');
      detailTr.innerHTML = '<td colspan="8">' + buildDetailContent(project) + '</td>';
      // Prevent click on detail row from toggling
      detailTr.addEventListener('click', function (e) {
        e.stopPropagation();
      });
      tableBody.appendChild(detailTr);
    });
  }

  function buildMainRow(p, isExpanded) {
    return '' +
      '<td class="col-expand"><span class="expand-icon">▸</span></td>' +
      '<td class="col-name"><span class="project-name">' + esc(p.name) + '</span></td>' +
      '<td class="col-ticker"><span class="ticker">' + esc(p.ticker) + '</span></td>' +
      '<td class="col-vertical"><span class="vertical-tag" data-vertical="' + esc(p.vertical) + '">' + esc(p.vertical) + '</span></td>' +
      '<td class="col-chain"><span class="chain-name">' + esc(p.chain) + '</span></td>' +
      '<td class="col-revenue"><span class="revenue' + (p.revenueRaw === 0 ? ' na' : '') + '">' + esc(p.revenueAnnualized) + '</span></td>' +
      '<td class="col-raised"><span class="raised' + (p.raisedRaw === 0 ? ' na' : '') + '">' + esc(p.raised) + '</span></td>' +
      '<td class="col-devices"><span class="devices">' + esc(p.devices) + '</span></td>';
  }

  function buildDetailContent(p) {
    var linksHtml = '';
    if (p.links) {
      var linkEntries = Object.entries(p.links);
      linksHtml = '<div class="detail-links">';
      linkEntries.forEach(function (entry) {
        var label = entry[0];
        var url = entry[1];
        var icon = getLinkIcon(label);
        linksHtml += '<a class="detail-link" href="' + esc(url) + '" target="_blank" rel="noopener">' + icon + ' ' + capitalize(label) + '</a>';
      });
      linksHtml += '</div>';
    }

    var backersHtml = '<div class="backer-list">';
    p.backers.forEach(function (b) {
      backersHtml += '<span class="backer-tag">' + esc(b) + '</span>';
    });
    backersHtml += '</div>';

    return '<div class="detail-content">' +
      '<div class="detail-section">' +
        '<span class="detail-label">Model</span>' +
        '<span class="detail-value">' + esc(p.model) + '</span>' +
      '</div>' +
      '<div class="detail-section">' +
        '<span class="detail-label">Backers</span>' +
        backersHtml +
      '</div>' +
      '<div class="detail-section">' +
        '<span class="detail-label">Chain</span>' +
        '<span class="detail-value"><strong>' + esc(p.chain) + '</strong></span>' +
      '</div>' +
      '<div class="detail-section">' +
        '<span class="detail-label">Links</span>' +
        linksHtml +
      '</div>' +
    '</div>';
  }

  function toggleExpand(name) {
    if (expandedRows.has(name)) {
      expandedRows.delete(name);
    } else {
      expandedRows.add(name);
    }
    render();
  }

  function getLinkIcon(label) {
    switch (label) {
      case 'website': return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
      case 'twitter': return '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
      case 'docs': return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';
      case 'coingecko': return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>';
      default: return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
    }
  }

  // Utilities
  function esc(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
