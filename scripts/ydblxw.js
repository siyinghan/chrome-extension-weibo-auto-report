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
