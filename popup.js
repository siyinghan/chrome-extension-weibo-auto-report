document.querySelector("#like").addEventListener("click", startLike);
document.querySelector("#wrmm").addEventListener("click", startWRMM);
document.querySelector("#together1").addEventListener("click", startTogeher1);
document.querySelector("#together2").addEventListener("click", startTogeher2);

function startLike() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: like,
    });
  });
}

const like = () => {
  const like = document.querySelectorAll(".woo-like-iconWrap");
  for (let i = 1; i < like.length; i++) {
    like[i].click();
  }
};

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

// Reload and report 宣扬仇恨, 带节奏, 邪教, and 不良价值 orderly.
function startTogeher1() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: xych,
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
        func: djz,
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
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    setTimeout(() => {
      chrome.tabs.reload(tabs[0].id);
    }, 9000);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: bljzdx,
      });
    }, 10000);
  });
}

// Reload and report 低俗信息 and 色情图文 orderly.
function startTogeher2() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    setTimeout(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: dsxx,
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
        func: sqtw,
      });
    }, 4000);
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

// report 不良价值导向
const bljzdx = () => {
  // click 不良价值导向
  document.querySelector("[title='不良价值导向']").click();
  // click 不良价值导向
  document.querySelector("[tag_id='4501']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 涉黄信息 -> 低俗信息
const dsxx = () => {
  // click 涉黄信息
  document.querySelector("[title='涉黄信息']").click();
  // click 低俗信息
  document.querySelector("[tag_id='202']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};

// report 涉黄信息 -> 色情图文
const sqtw = () => {
  // click 涉黄信息
  document.querySelector("[title='涉黄信息']").click();
  // click 色情图文
  document.querySelector("[tag_id='204']").click();
  // click 我已阅读
  document
    .querySelector("[node-type='readRoleNode']")
    .children[0].children[2].click();
  // click 提交 after 0.5s
  setTimeout(() => {
    document.querySelector("[node-type='subBtn']").click();
  }, 500);
};
