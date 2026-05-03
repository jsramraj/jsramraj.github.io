(function () {
  var NAV_HTML = [
    '<a class="brand" href="/">Ramaraj T</a>',
    '<div class="topbar-links">',
    '  <a href="/apps/">Apps</a>',
    '  <a href="/blogs/">Blogs</a>',
    '  <a href="/">Home</a>',
    '</div>'
  ].join('\n');

  var FOOTER_HTML = [
    '<div class="footer-links" aria-label="Contact links">',
    '  <a href="mailto:ramaraj.tt@gmail.com" aria-label="Email">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
    '      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2 8 5 8-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    '    </svg>',
    '  </a>',
    '  <a href="https://www.linkedin.com/in/ramarajtt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
    '      <path d="M7 10v7M7 7.5v.01M11 10v7m0-4.2c0-1.7 1.1-2.8 2.7-2.8S16 11.1 16 13v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    '      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>',
    '    </svg>',
    '  </a>',
    '  <a href="https://github.com/jsramraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
    '      <path d="M9 19c-4.5 1.4-4.5-2.2-6-2.8m12 5.6v-3.5a3 3 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C6.5 3.2 5.5 3.5 5.5 3.5a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 10c0 4.6 2.7 5.7 5.3 6a3 3 0 0 0-.8 2.3v3.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    '    </svg>',
    '  </a>',
    '  <a href="https://stackoverflow.com/users/1051215/ramaraj-t" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">',
    '    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
    '      <path d="M7 16h10v4H7zM9 14h8M10 11.5h6M11.5 9l5 1.5M13 6.5l4 2.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
    '    </svg>',
    '  </a>',
    '</div>',
    '<p>© <span id="year"></span> Ramaraj Thangapandi</p>'
  ].join('\n');

  function inject() {
    var nav = document.querySelector('nav.topbar');
    if (nav) nav.innerHTML = NAV_HTML;

    var footer = document.querySelector('footer.footer');
    if (footer) footer.innerHTML = FOOTER_HTML;

    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
