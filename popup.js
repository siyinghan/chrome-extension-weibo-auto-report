function startWRMM() {
  // Query the active tab, which will be only one tab, and inject the script in it.
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Reload the active tab.
    chrome.tabs.reload(tabs[0].id);
    // Run the script to report 侮辱谩骂.
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/wrmm.js"],
      });
    }, 1000);
  });
}

// Reload and report 带节奏, 宣扬仇恨, and 造谣爆料 orderly.
function startTogeher1() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/djz.js"],
      });
    }, 1000);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 3000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/xych.js"],
      });
    }, 4000);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 6000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/zybl.js"],
      });
    }, 7000);
  });
}

// Reload and report 宣扬仇恨, 造谣爆料 and 诱导不良行为 orderly.
function startTogeher2() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/xych.js"],
      });
    }, 1000);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 3000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/zybl.js"],
      });
    }, 4000);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 6000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ["scripts/ydblxw.js"],
      });
    }, 7000);
  });
}

document.querySelector("#wrmm").addEventListener("click", startWRMM);
document.querySelector("#together").addEventListener("click", startTogeher2);
