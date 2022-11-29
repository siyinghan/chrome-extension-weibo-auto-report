document.querySelector("#wrmm").addEventListener("click", startWRMM);
document.querySelector("#together1").addEventListener("click", startTogeher1);
document.querySelector("#together2").addEventListener("click", startTogeher2);
document.querySelector("#together3").addEventListener("click", startTogeher3);
document.querySelector("#together4").addEventListener("click", startTogeher4);

function startWRMM() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: wrmm,
      });
    }, 1000);
  });
}

// Reload and report 带节奏, 宣扬仇恨, and 造谣爆料 orderly.
function startTogeher1() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: djz,
      });
    }, 1000);
  });
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 3000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: xych,
      });
    }, 4000);
  });
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 6000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: zybl,
      });
    }, 7000);
  });
}

// Reload and report 宣扬仇恨, 造谣爆料 and 邪教 orderly.
function startTogeher2() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: xych,
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
        func: zybl,
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
        func: xj,
      });
    }, 7000);
  });
}

// Reload and report 宣扬仇恨, 造谣爆料 and 诱导不良行为 orderly.
function startTogeher3() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: xych,
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
        func: zybl,
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
        func: ydblxw,
      });
    }, 7000);
  });
}

// Reload and report 带节奏, 宣扬仇恨, and 邪教 orderly.
function startTogeher4() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: djz,
      });
    }, 1000);
  });
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 3000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: xych,
      });
    }, 4000);
  });
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 6000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: xj,
      });
    }, 7000);
  });
}

// report 侮辱谩骂
const wrmm = () => {
  // click 人身攻击
  document.querySelector("[title='人身攻击']").click();
  // click 侮辱谩骂
  document.querySelector("[tag_id='604']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 带节奏
const djz = () => {
  // click 违规营销
  document.querySelector("[title='违规营销']").click();
  // click 标题党、带节奏
  document.querySelector("[tag_id='4601']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 宣扬仇恨
const xych = () => {
  // click 人身攻击
  document.querySelector("[title='人身攻击']").click();
  // click 侮辱谩骂
  document.querySelector("[tag_id='605']").click();
  // click 宣扬仇恨与歧视
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 造谣爆料
const zybl = () => {
  // click 饭圈违规
  document.querySelector("[title='饭圈违规']").click();
  // click 造谣爆料
  document.querySelector("[tag_id='4205']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 邪教
const xj = () => {
  // click 有害信息
  document.querySelector("[title='有害信息']").click();
  // click 邪教
  document.querySelector("[tag_id='807']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 诱导不良行为
const ydblxw = () => {
  // click 涉未成年人
  document.querySelector("[title='涉未成年人']").click();
  // click 诱导不良行为
  document.querySelector("[tag_id='4106']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};
