(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{68:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"花式渲染目标元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#花式渲染目标元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 花式渲染目标元素")]),a("h2",{attrs:{id:"vue-js是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-js是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue.js是什么")]),a("p",[t._v("摘自官方文档：")]),a("blockquote",[a("p",[t._v("Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。")])]),a("h2",{attrs:{id:"对比其他框架？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比其他框架？","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比其他框架？")]),a("p",[t._v("一般提到一个框架时，大家都喜欢跟其他框架作对比，以说服读者去使用它，但是这里就不做对比了，是不是很失望？每个人都有每个人的好，何况是由人创造出来的框架呢，单凭 "),a("a",{attrs:{href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuejs")]),t._v(" 在github上8W+的star，那也值得你去尝试一回，不是吗？")]),a("p",[t._v("当然如果你有框架选择恐惧症，那么不妨相信我一回，直接跟着我亲自上手体验吧~")]),a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步","aria-hidden":"true"}},[t._v("#")]),t._v(" 起步")]),a("p",[t._v("其实使用 Vuejs 很简单，直接像引入 "),a("code",[t._v("jquery")]),t._v(" 方式一样，引入源码标签就行，如下：")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 这里直接引入cdn源码，当然你也可把它下载下来，直接引入 --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("每个Vue应用都是通过 "),a("code",[t._v("Vue")]),t._v(" 函数创建一个新的 "),a("code",[t._v("Vue实例")]),t._v(" 开始的。")]),a("p",[t._v("接下来，我们来创建一个最基本的应用，实现在页面中输出 "),a("code",[t._v("Hello Vue.js!")]),t._v("。新建一个html文件代码如下：")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("You Don't Know Vuejs - Chapter 1"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 这里直接引入cdn源码，当然你也可把它下载下来，直接引入 --\x3e")]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/vue"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}}),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>Hello Vue.js!</h1>"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("使用浏览器打开刚创建的 "),a("code",[t._v("index.html")]),t._v(" ，页面会输出一个大大的 "),a("code",[t._v("h1")]),t._v(" 标签，内容就是我们期待的 "),a("code",[t._v("Hello Vue.js!")]),t._v("，怎么样是不是很简单。Vue实例在创建的时候需要传入一个对象作为参数，这个对象有很多属性，包括: DOM渲染相关属性（el、template...），数据相关属性（data、props、computed、methods、watch...），生命周期钩子属性（created、mounted...）...等很多属性，具体可以参考 "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方API文档")]),t._v("，这里刚好用到了 "),a("code",[t._v("el - Vue实例需要挂在的目标DOM元素")]),t._v("，"),a("code",[t._v("template - 替换挂在元素的内容模板")]),t._v(" 。也就是当我们创建Vue实例的时候，它会找到 "),a("code",[t._v("el")]),t._v(" 提供的元素 "),a("code",[t._v("div#app")]),t._v("（这里app可以取任意你喜欢的名称，也可以使用类名，但是为了确保不发生冲突和唯一性，最好使用ID名称），然后使用 "),a("code",[t._v("template")]),t._v(" 属性的内容将其替换。")]),a("h2",{attrs:{id:"数据绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据绑定")]),a("p",[t._v("当然实际开发中我们的模板不可能是硬编码的方式替换，并且也不可能保持一成不变，既然Vuejs声称是数据驱动视图（MVVM）的响应式框架，我们当然要体验一番了。接下来我们来体验下数据绑定和模板语法。")]),a("p",[t._v("在创建Vuejs实例是我们提到过的 "),a("code",[t._v("data")]),t._v(" 属性就是用来进行数据对象绑定的，我们将上面初始化代码修改如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>{{ msg }}</h1>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("然后刷新页面，发现实现效果是一样的。这里的 "),a("code",[t._v("data")]),t._v(" 为一个返回数据对象的函数，当Vue实例创建的时候，会执行该函数，将在实例上添加 "),a("code",[t._v("$data")]),t._v(" 属性，并在编译模板 "),a("code",[t._v("template")]),t._v(" 的时候，将所有双大括号（Mustache语法）的内容替换为我们定义的属性值。")]),a("blockquote",[a("p",[t._v("注意：当创建Vue实例时，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。")])]),a("h2",{attrs:{id:"too-young-too-simple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#too-young-too-simple","aria-hidden":"true"}},[t._v("#")]),t._v(" Too young too simple?")]),a("p",[t._v("好了，看到这里我想大家都学会如何使用Vuejs了，有人会说了，纳尼？一脸茫然，还没开始就结束了。是的没错，基础知识我们就讲到这里了，因为我不可能将vuejs官方文档都重写一遍，那样太浪费大家时间了，而且官方文档写的实在是太好了，推荐每个人都必须去读一遍。那么问题来了：那么你凭什么这么辛苦跑来读我的文章......说好的 "),a("code",[t._v("You Don't Know Vuejs")]),t._v(" 呢？")]),a("p",[t._v("那么本文就正式开始吧......")]),a("p",[t._v("ORZ......这个开场白确实有点长，不过还是有必要的，毕竟要考虑到小白们的感受，大家体谅下。")]),a("h2",{attrs:{id:"花式渲染目标元素-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#花式渲染目标元素-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 花式渲染目标元素")]),a("p",[t._v("上面介绍了最基本的用法，也是最常见的方式，其实Vue对象上还好提供很多种方法，如下：")]),a("p",[t._v("1."),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/instance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue")])]),a("p",[t._v("直接创建Vue实例，这个方法很简单，代码如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>{{ msg }}</h1>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("2."),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-extend",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.extend")])]),a("p",[t._v("Vue.extend(options) 方式是使用Vue构造器的一个“子类”，其参数同Vue(options)一模一样，唯一的不同是没有 "),a("code",[t._v("el")]),t._v(" 属性来指定挂载的DOM元素，所以这里需要通过 "),a("code",[t._v("$mount()")]),t._v(" 方法，来手动实现挂载。将以上代码修改如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("extend")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>{{ msg }}</h1>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("app")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("注意这里 "),a("code",[t._v("Vue.extend")]),t._v(" 方式是生成了一个 "),a("code",[t._v("Vue")]),t._v(" 子类，所以需要 "),a("code",[t._v("new")]),t._v(" 关键字来重新创建，然后手动挂载。")]),a("p",[t._v("3."),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-component",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.component")])]),a("p",[t._v("Vue.component(id, [definition]) 方式是注册一个名称为 "),a("code",[t._v("id")]),t._v(" 的全局组件，然后我们可以通过使用该组件来，实现目标元素渲染。其中 "),a("code",[t._v("definition")]),t._v(" 参数同 "),a("code",[t._v("Vue.extend")]),t._v(" 中的参数一模一样，方法一样，需要使用 "),a("code",[t._v("$mount()")]),t._v(" 方法手动挂在。修改代码如下")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'helloworld'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>{{ msg }}</h1>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("app")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$mount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("既然 "),a("code",[t._v("Vue.component")]),t._v(" 是帮我们注册了一个全局组件，那么我们当然是可以通过使用它来渲染了。修改如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 1. 注册组件")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'helloworld'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>{{ msg }}</h1>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 2. 通过创建Vue实例来使用")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#app4'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<helloworld/>"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("需要注意的是，仅仅注册组件式不够的，我们还要通过创建一个Vue实例，才能使用该组件。")]),a("p",[t._v("4."),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-directive",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.directive")])]),a("p",[t._v("在Vue中可以通过 "),a("code",[t._v("Vue.directive(id, [definition])")]),t._v(" 来自定义一个指令，并且指令的使用是通过在目标元素中添加 "),a("code",[t._v("v-指令id")]),t._v("属性来实现的。修改代码如下：")]),a("p",[t._v("在 "),a("code",[t._v("div#app")]),t._v(" 元素添加指令，如下：")]),a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("v-helloworld")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msg"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("然后修改js代码：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("directive")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"helloworld"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bind"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" binding"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    el"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"<h1>"')]),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" binding"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token string"}},[t._v('"</h1>"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("5."),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-compile",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.compile")])]),a("p",[a("code",[t._v("Vue.compile(template)")]),t._v(" 参数也就是方法1中的 "),a("code",[t._v("template")]),t._v(" 模板字符串属性，然后通过替换 Vue实例的 "),a("code",[t._v("render")]),t._v(" 函数，来实现渲染，代码如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tpl "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Vue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("compile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'<h1>{{ msg }}</h1>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  render"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tpl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("render\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("其实此方法本质上跟方法1是一样的，只是方法1中通过 "),a("code",[t._v("template")]),t._v(" 属性来定义模板，Vue实例在创建的过程中也会调用 "),a("code",[t._v("render")]),t._v(" 函数，然后会默认使用 "),a("code",[t._v("template")]),t._v(" 的模板值来渲染，而方法5则手动指定了渲染模板。")]),a("p",[t._v("当然，你也可以直接通过修改 "),a("code",[t._v("render")]),t._v(" 函数，来定制化输出内容，这就是接下来要讲到的方法6。")]),a("p",[t._v("6."),a("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#render",target:"_blank",rel:"noopener noreferrer"}},[t._v("render")])]),a("p",[t._v("Vue实例在创建的过程中也会调用 "),a("code",[t._v("render")]),t._v(" 函数，"),a("code",[t._v("render")]),t._v(" 函数默认会传递一个参数，这里我取名为 "),a("code",[t._v("createElement")]),t._v("， 我们可以通过 "),a("code",[t._v("createElement")]),t._v(" 来动态创建一个 "),a("a",{attrs:{href:"https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("VNode")]),t._v("，以此来渲染目标元素。代码如下：")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"#app6"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hello Vue.js!"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  render"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createElement"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'h1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),a("p",[t._v("花式渲染目标元素介绍就到这里吧，虽然上面书写的是6中方式，实则实现了7种方法，当然如果你有不同的方式或者觉得有不对的地方，欢迎评论或者发邮件回复~")]),a("p",[a("a",{attrs:{href:"https://github.com/yugasun/You-May-Not-Know-Vuejs/blob/master/chapter1/1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码在此")])]),a("h2",{attrs:{id:"专题目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#专题目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 专题目录")]),a("p",[a("a",{attrs:{href:"https://github.com/yugasun/You-May-Not-Know-Vuejs#%E6%96%87%E7%AB%A0%E7%9B%B4%E9%80%9A%E8%BD%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("You-May-Not-Know-Vuejs")])])])}],!1,null,null,null);s.default=e.exports}}]);