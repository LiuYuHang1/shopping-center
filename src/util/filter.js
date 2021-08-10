let formatTime = (value) => {
  var newStr = value.substring(0, 10);
  //   console.log(newStr);
  return newStr;
};
let format = (value) => {
  var newStr = value.substring(0, 7);
  //   console.log(newStr);
  return newStr;
};
//在组件中直接调用即可，如 {{item.matchUseTime | formatDate | formatTime}}
export default {
  formatTime,
  format,
};
