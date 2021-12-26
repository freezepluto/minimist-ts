// module.exports =
// import { getArgs } from "util";
const util = require("./util");
// 模块“"util"”没有导出的成员“getArgs”。ts(2305)
// 我导出了的 这是啥 ts导入导出我还不会
function minimist_ts(args: string[] = []) {
  //第一件事情。从有下划线开始的数据取数据，排除第一个和第二个数据
  //   console.log(args);
  args = util.getArgs(args);
  console.log(args);
  //   2021.12.26  01:01 遇到困难了，不知道这个是啥情况
  // 此表达式不可调用。
  //   类型 "typeof import("util")" 没有调用签名。

  //用commonjs的方式做导入导出就可以。module.exports require的路径需要是相对路径
}
minimist_ts([
  "D:\\NODE\\node.exe",
  "D:\\workSpace\\node\\nodemon\\processarg.js",
  "--v=123",
]);
