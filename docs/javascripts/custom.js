// Make menu back more readable
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.md-nav__title[for^="__nav"]').forEach(title => {
    const textSpan = title.querySelector('span:last-child');
    if (textSpan && !textSpan.textContent.includes('Terug')) {
      textSpan.textContent = '← Terug naar menu';
    }
  });
});

// Make header title clickable
document.addEventListener('DOMContentLoaded', function() {
  const headerTitle = document.querySelector('.md-header__topic .md-ellipsis');
  if (headerTitle && headerTitle.textContent.includes('HH. Martelaren van Gorcum')) {
    headerTitle.style.cursor = 'pointer';
    headerTitle.addEventListener('click', function() {
      window.location.href = '/';
    });
  }
});
