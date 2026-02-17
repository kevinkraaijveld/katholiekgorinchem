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
document.documentElement.style.setProperty('--primary-color', colors.primary);
document.documentElement.style.setProperty('--secondary-color', colors.secondary);
document.documentElement.style.setProperty('--text-color', colors.text);
}

// Your colors map
const liturgicalColors = {
  green: {
    primary: "#2E7D32",
    secondary: "#194424",
    text: "#FFFFFF"
  },
  purple: {
    primary: "#5A2A82",
    secondary: "#3E1C5A",
    text: "#FFFFFF"
  },
  rose: {
    primary: "#C97B84",
    secondary: "#A05A63",
    text: "#FFFFFF"
  },
  red: {
    primary: "#B11226",
    secondary: "#700B16",
    text: "#FFFFFF"
  },
  white: {
    primary: "#CCCCCC",
    secondary: "#FFFFFF",
    text: "#000000"
  }
};


const liturgicalCalendar = [
  { color: "green", start: "2026-01-01", end: "2026-01-05" },
  { color: "white", start: "2026-01-06", end: "2026-01-06" },
  { color: "green", start: "2026-01-07", end: "2026-02-17" },
  { color: "purple", start: "2026-02-18", end: "2026-03-14" },
  { color: "rose", start: "2026-03-15", end: "2026-03-15" },
  { color: "purple", start: "2026-03-16", end: "2026-03-18" },
  { color: "white", start: "2026-03-19", end: "2026-03-19" },
  { color: "purple", start: "2026-03-20", end: "2026-03-24" },
  { color: "white", start: "2026-03-25", end: "2026-03-25" },
  { color: "purple", start: "2026-03-26", end: "2026-03-28" },
  { color: "red", start: "2026-03-29", end: "2026-03-29" },
  { color: "purple", start: "2026-03-30", end: "2026-04-01" },
  { color: "white", start: "2026-04-02", end: "2026-04-02" },
  { color: "red", start: "2026-04-03", end: "2026-04-03" },
  { color: "white", start: "2026-04-04", end: "2026-05-23" },
  { color: "red", start: "2026-05-24", end: "2026-05-24" },
  { color: "white", start: "2026-05-25", end: "2026-05-25" },
  { color: "green", start: "2026-05-26", end: "2026-08-05" },
  { color: "white", start: "2026-08-06", end: "2026-08-06" },
  { color: "green", start: "2026-08-07", end: "2026-08-14" },
  { color: "white", start: "2026-08-15", end: "2026-08-15" },
  { color: "green", start: "2026-08-16", end: "2026-08-21" },
  { color: "white", start: "2026-08-22", end: "2026-08-22" },
  { color: "green", start: "2026-08-23", end: "2026-09-07" },
  { color: "white", start: "2026-09-08", end: "2026-09-08" },
  { color: "green", start: "2026-09-09", end: "2026-09-14" },
  { color: "white", start: "2026-09-15", end: "2026-09-15" },
  { color: "green", start: "2026-09-16", end: "2026-09-28" },
  { color: "white", start: "2026-09-29", end: "2026-09-29" },
  { color: "green", start: "2026-09-30", end: "2026-09-30" },
  { color: "white", start: "2026-10-01", end: "2026-10-02" },
  { color: "green", start: "2026-10-03", end: "2026-10-06" },
  { color: "white", start: "2026-10-07", end: "2026-10-07" },
  { color: "green", start: "2026-10-08", end: "2026-10-21" },
  { color: "white", start: "2026-10-22", end: "2026-10-22" },
  { color: "green", start: "2026-10-23", end: "2026-10-31" },
  { color: "white", start: "2026-11-01", end: "2026-11-01" },
  { color: "purple", start: "2026-11-02", end: "2026-11-02" },
  { color: "green", start: "2026-11-03", end: "2026-11-05" },
  { color: "white", start: "2026-11-06", end: "2026-11-06" },
  { color: "green", start: "2026-11-07", end: "2026-11-08" },
  { color: "white", start: "2026-11-09", end: "2026-11-09" },
  { color: "green", start: "2026-11-10", end: "2026-11-21" },
  { color: "white", start: "2026-11-22", end: "2026-11-22" },
  { color: "green", start: "2026-11-23", end: "2026-11-28" },
  { color: "purple", start: "2026-11-29", end: "2026-12-12" },
  { color: "rose", start: "2026-12-13", end: "2026-12-13" },
  { color: "purple", start: "2026-12-14", end: "2026-12-24" },
  { color: "white", start: "2026-12-25", end: "2026-12-25" },
  { color: "red", start: "2026-12-26", end: "2026-12-26" },
  { color: "white", start: "2026-12-27", end: "2026-12-31" }
];

function parseDateLocal(dateString) {
  const [y, m, d] = dateString.split("-");
  return new Date(y, m - 1, d);
}

function getTodayColor() {
  const today = new Date();
  today.setHours(0,0,0,0);

  console.log("[Color] Today:", today);

  for (const entry of liturgicalCalendar) {
    const start = parseDateLocal(entry.start);
    const end = parseDateLocal(entry.end);
    end.setHours(23, 59, 59, 999);

    console.log("[Color] Checking:", entry.color, start, end);

    if (today >= start && today <= end) {
      console.log("[Color] Match:", entry.color);
      return entry.color;
    }
  }

  console.log("[Color] No match");
  return null;
}

// Set colors automatically
const todayColor = getTodayColor();
if (todayColor) setLiturgicalColors(todayColor);
