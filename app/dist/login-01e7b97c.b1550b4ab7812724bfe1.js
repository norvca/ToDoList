(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{176:function(n,e,o){"use strict";var r=o(8),t=o(61).every,i=o(48),s=o(24),c=i("every"),l=s("every");r({target:"Array",proto:!0,forced:!c||!l},{every:function(n){return t(this,n,arguments.length>1?arguments[1]:void 0)}})},177:function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},178:function(n,e,o){"use strict";var r=o(8),t=o(179).trim;r({target:"String",proto:!0,forced:o(180)("trim")},{trim:function(){return t(this)}})},179:function(n,e,o){var r=o(23),t="["+o(177)+"]",i=RegExp("^"+t+t+"*"),s=RegExp(t+t+"*$"),c=function(n){return function(e){var o=String(r(e));return 1&n&&(o=o.replace(i,"")),2&n&&(o=o.replace(s,"")),o}};n.exports={start:c(1),end:c(2),trim:c(3)}},180:function(n,e,o){var r=o(2),t=o(177);n.exports=function(n){return r((function(){return!!t[n]()||"​᠎"!="​᠎"[n]()||t[n].name!==n}))}},181:function(n,e,o){"use strict";o.r(e),o.d(e,"exit",(function(){return S})),o.d(e,"createPopup",(function(){return v}));o(59),o(60),o(82);var r='<div class="login fade">\n                      <div class="login__box">\n                        '.concat('<div class="login__signin">\n      <p class="login__signin__welcome">欢迎登陆PureTodo!</p>\n      <form class="login__signin__form form">\n        <div class="form-control">\n          <input\n            class="username login__signin__input"\n            name="username"\n            type="text"\n            placeholder="用户名"\n          />\n          <p></p>\n        </div>\n        <div class="form-control">\n          <input\n            class="password login__signin__input"\n            name="password"\n            type="password"\n            placeholder="密码"\n          />\n          <p></p>\n        </div>\n        <button class=\'login__signin__button\' type="submit">登录</button>\n      </form>\n      <div class="login__bottom">\n        <a class="login__exit login__signin__exit" href="# ">退出</a>\n        <span>|</span>\n        <a class="login__changeState" href="# ">注册新账号</a>\n      </div>\n    </div>',"\n                        ").concat('<div class="login__signup hidden">\n      <p class="login__signup__welcome">欢迎注册新账户!</p>\n      <form class="login__signup__form form">\n        <div class="form-control">\n          <input\n            class="username login__signup__input"\n            name="username"\n            type="text"\n            placeholder="用户名"\n          />\n          <p></p>\n        </div>\n        <div class="form-control">\n          <input\n            class="email login__signup__input"\n            name="email"\n            type="text"\n            placeholder="邮箱"\n          />\n          <p></p>\n        </div>\n        \n        <div class="form-control">\n          <input\n            class="password login__signup__input"\n            name="password"\n            type="password"\n            placeholder="密码"\n          />\n          <p></p>\n        </div>\n\n        <div class="form-control">\n          <input\n            class="confirmPassword login__signup__input"\n            name="confirmPassword"\n            type="password"\n            placeholder="确认密码"\n          />\n          <p></p>\n        </div>\n\n        <button class=\'login__signup__button\' type="submit">注册</button>\n      </form>\n      <div class="login__bottom">\n        <a class="login__exit login__signup__exit" href="# ">退出</a>\n        <span>|</span>\n        <a class="login__changeState" href="# ">返回登陆栏</a>\n      </div>\n    </div>',"\n                      </div>\n                    </div>"),t=(o(176),o(122),o(81),o(83)),i=o.n(t);o(178);function s(n){n.forEach((function(n){""===n.value.trim()?u(n,"".concat(n.placeholder,"不能为空")):_(n)}))}function c(n,e,o){var r=n.value.trim().length;r<e?u(n,"".concat(n.placeholder,"长度至少为").concat(e,"个字符")):r>o?u(n,"".concat(n.placeholder,"长度不超过").concat(o,"个字符")):_(n)}function l(n){/^[a-zA-Z]+[a-zA-Z0-9]*$/.test(n.value.trim())||u(n,"".concat(n.placeholder,"开头必须为字母，全称只能包含字母、数字"))}function a(n){/^([a-zA-Z0-9]+[a-zA-Z0-9~!@#$%^&*()_+-=])*$/.test(n.value.trim())||u(n,"".concat(n.placeholder,"开头必须为字母或数字，全称只能包含字母、数字、和常见字符"))}function u(n,e){var o=n.parentElement;o.classList.contains("form-error")||(o.className="form-control form-error",o.querySelector("p").innerText=e)}function _(n){var e=n.parentElement;e.className="form-control",e.querySelector("p").innerText=""}var d=o(111),g=o(120),m=o(46);function p(n){n.preventDefault();var e=document.querySelector(".login__signin__form .username"),o=document.querySelector(".login__signin__form .password");(function(n,e){var o=document.querySelectorAll(".login__signin .form-control"),r=Array.from(o);return s([n,e]),c(n,3,10),c(e,6,25),l(n),a(e),r.every((function(n){return!n.classList.contains("form-error")}))})(e,o)&&function(n,e){i.a.post(m.a.signinUrl,{username:n,password:e}).then((function(e){var o,r,t=e.data.token,i=Object(d.a)(n);o="登录成功！",(r=document.querySelector(".login__signin .login__signin__welcome")).innerText=o,r.classList.remove("error"),S(),function(n,e,o){localStorage.setItem("CouchDB-auth",o),localStorage.setItem("User-name",n),localStorage.setItem("DB-name",e)}(n,i,t),Object(g.a)(n,t),console.log("Sync success!")})).catch((function(n){var e,o;e="用户名或密码错误！",(o=document.querySelector(".login__signin .login__signin__welcome")).innerText=e,o.classList.add("error"),console.log(n.response)}))}(e.value,o.value)}function f(n){n.preventDefault();var e=document.querySelector(".login__signup__form"),o=e.querySelector(".username"),r=e.querySelector(".password"),t=e.querySelector(".confirmPassword"),d=e.querySelector(".email");(function(n,e,o,r){var t=document.querySelectorAll(".login__signup .form-control"),i=Array.from(t);return s([n,e,o,r]),c(n,3,10),c(e,6,25),function(n){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.value.trim())?_(n):u(n,"请输入正确的".concat(n.placeholder,"格式"))}(r),function(n,e){n.value!==e.value&&u(e,"两次输入的密码不一致")}(e,o),l(n),a(e),i.every((function(n){return!n.classList.contains("form-error")}))})(o,r,t,d)&&function(n,e,o){i.a.post(m.a.registerUrl,{username:n,password:e,email:o}).then((function(n){var e,o;e="注册成功！",(o=document.querySelector(".login__signup .login__signup__welcome")).innerText=e,o.classList.remove("error"),S(),console.log(n.data)})).catch((function(n){var e,o;e="用户名已存在！",(o=document.querySelector(".login__signup .login__signup__welcome")).innerText=e,o.classList.add("error"),console.log(n.response.data)}))}(o.value,r.value,d.value)}function v(){var n,e,o,t,i,s,c,l,a;document.body.insertAdjacentHTML("beforeend",r),n=document.querySelector(".login__signin"),e=document.querySelector(".login__signup"),o=document.querySelectorAll(".form-control"),t=document.querySelector(".login__signin__welcome"),o.forEach((function(n){var e=n.querySelector("input"),o=n.querySelector("p");e.value="",n.classList.remove("form-error"),o.innerText=""})),n.classList.remove("hidden"),e.classList.add("hidden"),t.innerText="欢迎登陆PureTodo!",t.classList.remove("error"),i=document.querySelector(".login__box"),s=document.querySelector(".login__signin__form"),c=document.querySelector(".login__signup__form"),l=document.querySelector(".login__signin__exit"),a=document.querySelector(".login__signup__exit"),s.addEventListener("submit",p),c.addEventListener("submit",f),i.addEventListener("click",y),l.addEventListener("click",S),a.addEventListener("click",S)}function y(n){var e=document.querySelector(".login__signin"),o=document.querySelector(".login__signup");n.target.classList.contains("login__changeState")&&(e.classList.toggle("hidden"),o.classList.toggle("hidden"))}function S(){document.querySelector(".login").remove()}}}]);