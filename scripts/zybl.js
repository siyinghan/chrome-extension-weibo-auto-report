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
