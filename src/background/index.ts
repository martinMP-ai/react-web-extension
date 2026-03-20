// Background service worker for the extension

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    // Initialize default storage values on first install
    chrome.storage.local.set({ count: 0 });
    chrome.storage.sync.set({
      settings: { theme: "light", notifications: true },
    });
    console.log("Extension installed. Default settings initialized.");
  }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener(
  (
    message: { type: string; payload?: unknown },
    _sender,
    sendResponse: (response: unknown) => void
  ) => {
    if (message.type === "GET_STORAGE") {
      chrome.storage.local.get(null, (data) => {
        sendResponse({ success: true, data });
      });
      return true; // keep message channel open for async response
    }
  }
);
