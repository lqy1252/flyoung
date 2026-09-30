/* 品牌官网 —— 主逻辑：读取 data.js 的配置并填充页面
   （这个文件不需要改，改 data.js 即可） */
(function () {
  "use strict";

  function $(s) { return document.querySelector(s); }

  function setImg(sel, src) {
    var el = $(sel);
    if (el && src) { el.src = src; }
  }

  function init() {
    if (SITE && SITE.name) document.title = SITE.name;

    var logoText = $("#logoText");
    if (logoText) logoText.textContent = (SITE && SITE.name) || "";

    setImg("#logoImg", SITE && SITE.logo);
    setImg("#heroImg", SITE && SITE.hero);
    setImg("#productImg", SITE && SITE.product);
    setImg("#featureImg", SITE && SITE.feature);
    setImg("#detailImg", SITE && SITE.detail);

    var ft = $("#footerText");
    if (ft) ft.textContent = (SITE && SITE.footer) || "";

    // 返回顶部
    var backTop = $("#backTop");
    if (backTop) {
      window.addEventListener("scroll", function () {
        backTop.classList.toggle("show", window.scrollY > 400);
      });
      backTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // 移动端菜单
    var toggle = $(".nav-toggle"), nav = $(".nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
