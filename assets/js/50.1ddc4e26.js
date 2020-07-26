(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{418:function(t,a,e){"use strict";e.r(a);var s=e(26),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"图片裁剪-imageclipper-研发中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片裁剪-imageclipper-研发中"}},[t._v("#")]),t._v(" "),e("H2Icon"),t._v(" 图片裁剪 ImageClipper(研发中)")],1),t._v(" "),e("blockquote",[e("p",[t._v("图片裁剪组件。")])]),t._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("根据下图所示，"),e("code",[t._v("ImageClipper")]),t._v("分为三个区域："),e("code",[t._v("ImageContent")]),t._v("、"),e("code",[t._v("ClipperContent")]),t._v("、"),e("code",[t._v("ToolsContent")]),t._v("。")]),t._v(" "),e("p",[t._v("该组件默认撑满整个屏幕，您可以通过 "),e("code",[t._v("l-class")]),t._v(" 外部样式类进行定制。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("ImageContent")]),t._v("—— 图片内容区域：被裁剪的图片可以在此区域任意移动、缩放和旋转等操作")]),t._v(" "),e("li",[e("code",[t._v("ClipperContent")]),t._v("—— 裁剪内容区域：此区域可以放大缩小，裁剪只会保留该区域的内容")]),t._v(" "),e("li",[e("code",[t._v("ToolsContent")]),t._v("—— Tools区域：在此区域，"),e("strong",[t._v("您可以任意定制您想要的功能")]),t._v("，如图所示，可以放一些功能性的按钮，"),e("strong",[t._v("当然，您也可以随意放其他内容，随心所欲")]),t._v("，我们会默认内置一些功能，此区域默认功能需引用子组件 "),e("code",[t._v("ImageClipperTools")])])]),t._v(" "),e("p",[t._v("以上三个名词分别对应的部分如下图所示：\n"),e("img-wrapper",[e("a",{attrs:{"data-fancybox":"",href:"/screenshots/image-clipper/image-clipper.png"}},[e("img",{attrs:{src:"/screenshots/image-clipper/image-clipper.png"}})])])],1),t._v(" "),e("h2",{attrs:{id:"基础使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),e("h3",{attrs:{id:"代码演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wxml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-clipper")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-url")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{图片路径}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-clipper-tools")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-image-clipper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("img-wrapper",[e("a",{attrs:{"data-fancybox":"",href:"/screenshots/image-clipper/demo1.png"}},[e("img",{attrs:{src:"/screenshots/image-clipper/demo1.png"}})])]),t._v(" "),e("h2",{attrs:{id:"页面选择图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面选择图片"}},[t._v("#")]),t._v(" 页面选择图片")]),t._v(" "),e("h3",{attrs:{id:"代码演示-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-2"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wxml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("bind:")]),t._v("lintap")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("upload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("large"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("选择图片"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-clipper")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-url")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{imageUrl}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindlinclip")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("linclip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-clipper-tools")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-image-clipper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    imageUrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("linclip")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" targetImageUrl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'生成的图片链接为：'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetImageUrl"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("upload")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sizeType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'original'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compressed'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      sourceType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'album'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'camera'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tempFilePaths "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePaths"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          imageUrl"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tempFilePaths"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          show"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("img-wrapper",[e("a",{attrs:{"data-fancybox":"",href:"/screenshots/image-clipper/demo2.png"}},[e("img",{attrs:{src:"/screenshots/image-clipper/demo2.png"}})])]),t._v(" "),e("h2",{attrs:{id:"自定义工具栏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义工具栏"}},[t._v("#")]),t._v(" 自定义工具栏")]),t._v(" "),e("h3",{attrs:{id:"代码演示-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示-3"}},[t._v("#")]),t._v(" 代码演示")]),t._v(" "),e("div",{staticClass:"language-wxml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wxml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-clipper")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("show")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("image-url")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{imageUrl}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("l-image-clipper-tools")]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lock-width")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lock-height")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lock-ratio")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disable-scale")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("disable-rotate")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("limit-move")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{{true}}"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("l-image-clipper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("img-wrapper",[e("a",{attrs:{"data-fancybox":"",href:"/screenshots/image-clipper/demo3.png"}},[e("img",{attrs:{src:"/screenshots/image-clipper/demo3.png"}})])]),t._v(" "),e("h2",{attrs:{id:"组件属性（imageclipper-attributes）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件属性（imageclipper-attributes）"}},[t._v("#")]),t._v(" 组件属性（ImageClipper Attributes）")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置组件展示隐藏")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("image-url")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片路径")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("生成图片类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("base64")]),t._v(" "),e("code",[t._v("url")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("url")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("quality")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("生成图片质量")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0~1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框宽度，单位为 "),e("code",[t._v("rpx")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("400")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框高度，单位为 "),e("code",[t._v("rpx")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("400")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min-width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最小宽度，单位为 "),e("code",[t._v("rpx")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min-height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最小高度，单位为 "),e("code",[t._v("rpx")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max-width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最大宽度，单位为 "),e("code",[t._v("rpx")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max-height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("裁剪框最大高度，单位为 "),e("code",[t._v("rpx")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lock-width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否锁定裁剪框宽度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lock-height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否锁定裁剪框高度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lock-ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否锁定裁剪框比例")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("scale-ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("生成图片相对于裁剪框的比例")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("min-ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片最小缩放比")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0.5")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("max-ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片最大缩放比")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disable-scale")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止缩放")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disable-rotate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否禁止旋转")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("limit-move")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否限制移动范围")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])]),t._v(" "),e("h2",{attrs:{id:"工具栏组件属性（imageclippertools-attributes）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工具栏组件属性（imageclippertools-attributes）"}},[t._v("#")]),t._v(" 工具栏组件属性（ImageClipperTools Attributes）")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("check-image")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示选择图片按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("check-image-icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("选择图片按钮图标url地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-along")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示顺时针旋转按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-along-icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("顺时针旋转按钮图标url地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-inverse")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示逆时针旋转按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-inverse-icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("逆时针旋转按钮图标url地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sure")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示确定按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sure-icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("确定按钮图标url地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("close")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示关闭按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("close-icon")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("关闭按钮图标url地址")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lock-width")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示锁定裁剪框宽度按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lock-height")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示锁定裁剪框高度按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("lock-ratio")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示锁定裁剪框比例按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("disable-scale")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示禁止缩放按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("limit-move")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示限制移动范围按钮")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("rotate-angle")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("旋转按钮每次旋转的角度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("90")])])])]),t._v(" "),e("h2",{attrs:{id:"组件外部样式类（imageclipper-externalclasses）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件外部样式类（imageclipper-externalclasses）"}},[t._v("#")]),t._v(" 组件外部样式类（ImageClipper ExternalClasses）")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("外部样式类名")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("l-class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最底层元素（组件总容器）外部样式类")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("---")])])])]),t._v(" "),e("h2",{attrs:{id:"组件事件（imageclipper-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件事件（imageclipper-events"}},[t._v("#")]),t._v(" 组件事件（ImageClipper Events)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("返回值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linimageready")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片加载完成式触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("width")]),t._v("：图片宽度 "),e("br"),t._v(" "),e("code",[t._v("height")]),t._v("：图片高度"),e("br"),e("code",[t._v("path")]),t._v("：图片本地路径"),e("br"),e("code",[t._v("orientation")]),t._v("：拍照时设备方向"),e("br"),e("code",[t._v("type")]),t._v("：图片格式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linrotate")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片旋转时触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("currentDeg")]),t._v("：当前旋转的角度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linsizechange")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片大小改变时触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("imageWidth")]),t._v("：当前图片宽度"),e("br"),e("code",[t._v("imageHeight")]),t._v("：当前图片高度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("bind:linclip")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("图片裁剪完成后触发")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("url")]),t._v("：生成的图片url"),e("br"),e("code",[t._v("base64")]),t._v("：生成的图片base64"),e("br"),e("code",[t._v("width")]),t._v("：生成的图片宽度"),e("br"),e("code",[t._v("height")]),t._v("：生成的图片高度")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])]),t._v(" "),e("RightMenu")],1)}),[],!1,null,null,null);a.default=n.exports}}]);