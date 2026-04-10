chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'openTab') {
    try {
      const parsed = new URL(message.url);
      const isExtensionUrl = parsed.protocol === 'chrome-extension:';
      const isSafeUrl = parsed.protocol === 'https:' || parsed.protocol === 'http:';
      if (isExtensionUrl || isSafeUrl) {
        chrome.tabs.create({ url: message.url });
      }
    } catch {
      // 不正なURLは無視
    }
  }
});
