import React, { useEffect, useState } from "react";

interface Settings {
  theme: "light" | "dark";
  notifications: boolean;
}

const defaultSettings: Settings = {
  theme: "light",
  notifications: true,
};

const Options: React.FC = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    chrome.storage.sync.get("settings", (result) => {
      if (result.settings) {
        setSettings(result.settings as Settings);
      }
    });
  }, []);

  const handleSave = () => {
    chrome.storage.sync.set({ settings }, () => {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    });
  };

  return (
    <div className="options-container">
      <header className="options-header">
        <img src="/icons/icon-48.png" alt="Extension icon" className="options-icon" />
        <h1>Extension Settings</h1>
      </header>

      <main className="options-body">
        <section className="settings-section">
          <h2>Appearance</h2>
          <div className="setting-row">
            <label htmlFor="theme">Theme</label>
            <select
              id="theme"
              value={settings.theme}
              onChange={(e) =>
                setSettings((s) => ({
                  ...s,
                  theme: e.target.value as "light" | "dark",
                }))
              }
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <h2>Notifications</h2>
          <div className="setting-row">
            <label htmlFor="notifications">Enable notifications</label>
            <input
              id="notifications"
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) =>
                setSettings((s) => ({ ...s, notifications: e.target.checked }))
              }
            />
          </div>
        </section>

        <div className="options-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            Save Settings
          </button>
          {saved && <span className="saved-message">✓ Saved!</span>}
        </div>
      </main>
    </div>
  );
};

export default Options;
