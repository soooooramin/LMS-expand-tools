const lmsJumpButton = document.createElement('button');

lmsJumpButton.textContent = '📚 LMSを開く';

lmsJumpButton.style.position = 'fixed';
lmsJumpButton.style.bottom = '20px';
lmsJumpButton.style.right = '20px';
lmsJumpButton.style.padding = '15px 20px';
lmsJumpButton.style.backgroundColor = '#0d3151';
lmsJumpButton.style.color = 'white';
lmsJumpButton.style.border = 'none';
lmsJumpButton.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
lmsJumpButton.style.cursor = 'pointer';
lmsJumpButton.style.zIndex = '9999';

lmsJumpButton.addEventListener('click', () => {
  browser.runtime.sendMessage({ action: 'openTab', url: browser.runtime.getURL('index/index.html') });
});

document.body.appendChild(lmsJumpButton);