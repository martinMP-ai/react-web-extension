import React, { useEffect, useState } from "react";

const Popup: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    chrome.storage.local.get("count", (result) => {
      if (result.count !== undefined) {
        setCount(result.count as number);
      }
    });
  }, []);

  const increment = () => {
    const next = count + 1;
    setCount(next);
    chrome.storage.local.set({ count: next });
  };

  const reset = () => {
    setCount(0);
    chrome.storage.local.set({ count: 0 });
  };

  return (
    <div className="popup">
      <header className="popup-header">
        <img src="/icons/icon-48.png" alt="Extension icon" className="popup-icon" />
        <h1>React Extension</h1>
      </header>
      <main className="popup-body">
        <p className="counter-label">Click counter</p>
        <p className="counter-value">{count}</p>
        <div className="popup-actions">
          <button className="btn btn-primary" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>
      </main>
      <footer className="popup-footer">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            chrome.runtime.openOptionsPage();
          }}
        >
          Settings
        </a>
      </footer>
    </div>
  );
};

export default Popup;
