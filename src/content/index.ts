// Content script – runs in the context of every web page

function init() {
  // Listen for messages from the extension popup or background
  chrome.runtime.onMessage.addListener(
    (
      message: { type: string; payload?: unknown },
      _sender,
      sendResponse: (response: unknown) => void
    ) => {
      if (message.type === "PING") {
        sendResponse({ type: "PONG", url: window.location.href });
      }
    }
  );
}

init();
