const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri'];
const PERIODS = [1, 2, 3, 4, 5, 6, 7];

function isSafeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function createCell(entry) {
  const td = document.createElement('td');
  if (entry && entry.name) {
    if (isSafeUrl(entry.url)) {
      const a = document.createElement('a');
      a.href = entry.url;
      a.textContent = entry.name;
      td.appendChild(a);
    } else {
      td.textContent = entry.name;
    }
  }
  return td;
}

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('userTimetable', (result) => {
    const data = result.userTimetable || {};
    const tbody = document.getElementById('timetable-body');

    PERIODS.forEach(period => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = `${period}限`;
      tr.appendChild(th);

      DAYS.forEach(day => {
        tr.appendChild(createCell(data[`${day}${period}`]));
      });

      tbody.appendChild(tr);
    });
  });
});
