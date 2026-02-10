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

// Function must be declared before usage
function setLiturgicalColors(season) {
  const colors = liturgicalColors[season];
  if (!colors) return;
  document.body.style.setProperty('--primary-color', colors.primary);
  document.body.style.setProperty('--secondary-color', colors.secondary);
  document.body.style.setProperty('--text-color', colors.text);
}

// Your colors map
const liturgicalColors = {
  "ordinary-time": {
    primary: "#2E7D32",
    secondary: "#194424",
    text: "#FFFFFF"
  },
  "lent": {
    primary: "#5A2A82",
    secondary: "#3E1C5A",
    text: "#FFFFFF"
  },
  "laetare-sunday": {
    primary: "#C97B84",
    secondary: "#A05A63",
    text: "#FFFFFF"
  },
  "palm-sunday": {
    primary: "#B11226",
    secondary: "#700B16",
    text: "#FFFFFF"
  },
  "maundy-thursday": {
    primary: "#CCCCCC",
    secondary: "#FFFFFF",
    text: "#000000"
  },
  "good-friday": {
    primary: "#B11226",
    secondary: "#700B16",
    text: "#FFFFFF"
  },
  "easter": {
    primary: "#CCCCCC",
    secondary: "#FFFFFF",
    text: "#000000"
  },
  "pentecost": {
    primary: "#B11226",
    secondary: "#700B16",
    text: "#FFFFFF"
  },
  "advent": {
    primary: "#5A2A82",
    secondary: "#3E1C5A",
    text: "#FFFFFF"
  },
  "christmas": {
    primary: "#CCCCCC",
    secondary: "#FFFFFF",
    text: "#000000"
  },
  "epiphany": {
    primary: "#CCCCCC",
    secondary: "#FFFFFF",
    text: "#000000"
  }
};

// Season ranges
const seasonRanges = [
  // Epiphany
  { season: "epiphany", start: "2026-01-06", end: "2026-01-06" },
  // Ordinary Time (Part 1)
  { season: "ordinary-time", start: "2026-01-07", end: "2026-02-17" },
  // Lent
  { season: "lent", start: "2026-02-18", end: "2026-04-04" },
  // Laetare Sunday
  { season: "laetare-sunday", start: "2026-03-08", end: "2026-03-08" },
  // Palm Sunday
  { season: "palm-sunday", start: "2026-03-29", end: "2026-03-29" },
  // Maundy Thursday
  { season: "maundy-thursday", start: "2026-04-02", end: "2026-04-02" },
  // Good Friday
  { season: "good-friday", start: "2026-04-03", end: "2026-04-03" },
  // Easter Season
  { season: "easter", start: "2026-04-04", end: "2026-05-23" },
  // Pentecost
  { season: "pentecost", start: "2026-05-24", end: "2026-05-24" },
  // Ordinary Time (Part 2)
  { season: "ordinary-time", start: "2026-05-25", end: "2026-11-28" },
  // Advent
  { season: "advent", start: "2026-11-29", end: "2026-12-24" },
  // Christmas
  { season: "christmas", start: "2026-12-25", end: "2027-01-05" }
];


// Determine today's season
function getTodaySeason() {
  const today = new Date();
  for (const range of seasonRanges) {
    const start = new Date(range.start);
    const end = new Date(range.end);
    if (today >= start && today <= end) {
      return range.season;
    }
  }
  return null;
}

// Set colors automatically
const todaySeason = getTodaySeason();
if (todaySeason) setLiturgicalColors(todaySeason);
