(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(e,t,l){"use strict";l.r(t),l.d(t,"deleteAllPopup",(function(){return u}));l(37);var n=l(0);function o(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}var u=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"deleteAllTasks",(function(){n.a.deleteAllTasks(),t.deletePopup()})),p(this,"regretDeleteTasks",(function(){t.deletePopup()})),this.db=n.a,this.deleteAllHTML="<div class=\"deleteAll-popup fade\">\n                            <div class='deleteAll-popup__box'>\n                              <p class='deleteAll-popup__aware'>删除全部数据</p>\n                              <div class='deleteAll-popup__delete'>\n                                <button class='button deleteAll-popup__btn deleteAll-popup__btn-yes'>是的</button>\n                                <button class='button deleteAll-popup__btn deleteAll-popup__btn-no'>再想想</button>\n                              </div>\n                            </div>\n                           </div>"}var t,l,u;return t=e,(l=[{key:"createPopup",value:function(){document.body.insertAdjacentHTML("beforeend",this.deleteAllHTML),this.popupHandler()}},{key:"popupHandler",value:function(){this.confirmDelete=document.querySelector(".deleteAll-popup__btn-yes"),this.regretDelete=document.querySelector(".deleteAll-popup__btn-no"),this.confirmDelete.addEventListener("click",this.deleteAllTasks),this.regretDelete.addEventListener("click",this.regretDeleteTasks)}},{key:"deletePopup",value:function(){this.modal=document.querySelector(".deleteAll-popup"),this.modal.remove()}}])&&o(t.prototype,l),u&&o(t,u),e}())}}]);