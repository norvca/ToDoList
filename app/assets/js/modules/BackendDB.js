// 定义接口
var backendDB = (function() {
  // 加载数据库模块
  var db = require("./PouchDB");
  // 或者 var db = require("./IndexedDB");

  // 添加任务
  var addTask = function(randomContent, ramdomLevel) {
    db.addTask(randomContent, ramdomLevel);
  };

  // 渲染任务到页面
  var showTask = function(indexType, value) {
    db.showTask(indexType, value);
  };

  // 搜索任务
  var searchTask = function(value) {
    db.searchTask(value);
  };

  // 修改任务
  var modifyTask = function(idNum , attr, value) {
    db.modifyTask(idNum , attr, value);
  };

  // 展示任务详情
  var showDetail = function(idNum) {
    db.showDetail(idNum);
  };

  // 删除全部任务
  var deleteAllTasks = function() {
    db.deleteAllTasks();
  }

  return {
    addTask,
    showTask,
    searchTask,
    modifyTask,
    showDetail,
    deleteAllTasks
  }
})();

module.exports = backendDB;