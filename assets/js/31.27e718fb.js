(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{403:function(s,t,a){"use strict";a.r(t);var n=a(42),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[s._v("#")]),s._v(" XSS")]),s._v(" "),a("p",[s._v("前篇提到的"),a("a",{attrs:{href:"/safety/web/csrf"}},[s._v("CSRF")]),s._v("是一种发生在"),a("strong",[s._v("第三方网站且针对COOKIE")]),s._v("的攻击方式")]),s._v(" "),a("p",[s._v("本篇介绍一种攻击范围更广, 危害更大的"),a("code",[s._v("Web")]),s._v("端攻击方式"),a("code",[s._v("XSS")])]),s._v(" "),a("p",[a("strong",[s._v("XSS")]),s._v("全称"),a("strong",[s._v("cross site script")]),s._v("跨站脚本攻击, 为了和"),a("strong",[s._v("CSS")]),s._v("区分开, 所以被简写为"),a("strong",[s._v("XSS")])]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("CSRF")]),s._v("只是在第三方网站上对用户的冒名顶替")]),s._v(" "),a("p",[a("strong",[s._v("XSS")]),s._v("确是在你的网站下植入脚本, 能做到什么完全看攻击者的想象力")]),s._v(" "),a("h2",{attrs:{id:"那些地方容易被xss🐓"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#那些地方容易被xss🐓"}},[s._v("#")]),s._v(" 那些地方容易被XSS🐓")]),s._v(" "),a("p",[s._v("一般来讲渲染"),a("strong",[s._v("用户输入")]),s._v("的地方都可能发生"),a("strong",[s._v("XSS")]),s._v("🐓")]),s._v(" "),a("p",[s._v("比如:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("评论区")])]),s._v(" "),a("li",[a("p",[s._v("富文本")])]),s._v(" "),a("li",[a("p",[s._v("...")])])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("输入和渲染并不一定是发生在同一个网站下")]),s._v(" "),a("p",[s._v("比如那种教学网站/问卷调查..., 用户A在系统A输入内容, 用户B在系统B显示内容")]),s._v(" "),a("p",[s._v("用户B也有被"),a("strong",[s._v("XSS")]),s._v("攻击的风险")])]),s._v(" "),a("p",[s._v("那我们应该如何预防"),a("strong",[s._v("XSS")]),s._v("呢? 别急, 在"),a("strong",[s._v("XSS")]),s._v("的攻/防战中, 我们要先弄清楚"),a("strong",[s._v("XSS")]),s._v("是如何🐓网站的, 这样我们才能找到合适的防御方法")]),s._v(" "),a("h2",{attrs:{id:"xss的攻击原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss的攻击原理"}},[s._v("#")]),s._v(" XSS的攻击原理")]),s._v(" "),a("p",[a("strong",[s._v("XSS")]),s._v("攻击就是攻击者在系统可输入区域输入一些字符串, 这些字符串被渲染到页面的时候被浏览器识别为"),a("strong",[s._v("javascript代码")]),s._v("而被执行")]),s._v(" "),a("p",[s._v("攻击会发生在那些能执行"),a("strong",[s._v("javaScript")]),s._v("代码的地方")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("<script><\/script> 脚本")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("onclick, onload, onerror 内联事件")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v('<a href="javascript:console.log(1);">点我, 你就上当了</a> 标签的属性')])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("href和src 属性外链了一个链接, 且其Content-Type为application/javascript")])])])]),s._v(" "),a("p",[s._v("所以当我们向上述内容中插入"),a("strong",[s._v("字符串")]),s._v("的时候一定要小心")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("strong",[s._v("XSS")]),s._v("攻击主要分为2个思路")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("创造新的包含攻击脚本的元素")])])]),s._v(" "),a("div",{staticClass:"language-pug line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-pug"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pug 模版引擎")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// localhost:3003\n  ?author=<script>alert('script XSS')<\/script>\n  &description=<img src=\"\" onerror=\"alert('内联事件 XSS')\">\n  &href=javascript:alert('href XSS')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token doctype"}},[s._v("doctype html")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("html"),a("span",{pre:!0,attrs:{class:"token attributes"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("lang")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'en'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("head")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("meta"),a("span",{pre:!0,attrs:{class:"token attributes"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf-8'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("meta"),a("span",{pre:!0,attrs:{class:"token attributes"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'viewport'")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("'width"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("device"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("initial-scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("body")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("h2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("作者: !{author}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("h3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("描述: !{description}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("a"),a("span",{pre:!0,attrs:{class:"token attributes"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("href")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("点我，你能看到href xss")]),s._v("\n  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// <script>alert('script XSS')<\/script> 生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// <img src="" onerror="alert(\'内联事件 XSS\')"> 生效')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// href=javascript:alert('href XSS') 生效")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[s._v("提前闭合元素的属性, 将攻击脚本插入到元素的可攻击区域内")])])]),s._v(" "),a("p",[s._v("🌰")])])}),[],!1,null,null,null);t.default=r.exports}}]);