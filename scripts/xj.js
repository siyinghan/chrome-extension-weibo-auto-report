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
