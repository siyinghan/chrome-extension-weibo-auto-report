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
