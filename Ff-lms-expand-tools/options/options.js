// データ復元
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('userTimetable', (result) => {
    const data = result.userTimetable;
    if (!data) return;

    const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
    const periods = [1, 2, 3, 4, 5, 6, 7];

    days.forEach(day => {
      periods.forEach(period => {
        const key = `${day}${period}`;
        if (data[key]) {
          document.getElementById(`${key}-name`).value = data[key].name || '';
          document.getElementById(`${key}-url`).value = data[key].url || '';
        }
      });
    });
  });
});

document.getElementById('save').addEventListener('click', () => {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const periods = [1, 2, 3, 4, 5, 6, 7];

  const timetableData = {};
  days.forEach(day => {
    periods.forEach(period => {
      const key = `${day}${period}`;
      timetableData[key] = {
        name: document.getElementById(`${key}-name`).value,
        url: document.getElementById(`${key}-url`).value
      };
    });
  });

  // 拡張機能ストレージ保存
  chrome.storage.local.set({ "userTimetable": timetableData }, () => {
    alert("時間割をPC内に保存しました！");
  });
});