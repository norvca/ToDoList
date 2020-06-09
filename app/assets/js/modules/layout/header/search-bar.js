// 加载各模块
import helperFunction from '../../utils/helper-function';
import {backendDB as db} from '../../utils/db-interface';

// 搜索栏模块
class SearchBar {
  constructor() {
    this.searchBox = document.querySelector(
      '.site-header__search-box__content',
    );
    this.addBtn = document.querySelector('.icon__add');
    this.input = helperFunction.get_input_element();
    this.inActColor = helperFunction.inActColor;
  }

  // 开启查找任务功能
  openSearchTask(e) {
    console.log(this);
    if (e.target.classList.contains('icon__search')) {
      this.inActColor(e.target);
      this.inActColor(this.input);
      this.inActColor(this.searchBox);
      this.input.focus();
      this.input.value = '';

      if (!this.input.classList.contains('act-color')) {
        db.sortByTaskType(this.typeValue);
      }
    }
  }

  // 查找任务功能
  searchTask(e) {
    if (e.target.classList.contains('act-color')) {
      db.searchTask(this.value);
    }
  }

  // 添加任务功能
  addTask1() {
    if (!this.input.value) {
      return;
    } else {
      db.addTask();
      db.sortByTaskType(this.typeValue);
      this.input.value = '';
    }
  }

  // 按回车键添加任务功能
  addTask2(event = window.event) {
    const key = event.which || event.keyCode || event.charCode;

    // 焦点在搜索栏并按回车
    if (document.activeElement.value) {
      if (
        key == 13 &&
        document.activeElement.tagName.toUpperCase() === 'INPUT'
      ) {
        db.addTask();
        db.sortByTaskType(this.typeValue);
        this.input.value = '';
      }
    }
  }

  get typeValue() {
    return document.querySelector('.sidebar__act').getAttribute('taskType');
  }
}

const searchBar = new SearchBar();
export default searchBar;
