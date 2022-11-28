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
