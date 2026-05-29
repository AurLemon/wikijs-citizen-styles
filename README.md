# wikijs-citizen-styles

[English](README_EN.md)

![图片1.png](https://s2.loli.net/2025/04/15/U19BySrJWaEFkzY.png)
[Citizen](https://github.com/StarCitizenTools/mediawiki-skins-Citizen/)（一个 MediaWiki 皮肤） 风格的 Wiki.js 覆盖样式表。

反正挺白的，Wiki.js 默认样式的蓝 + 黑我感觉有点不是非常的好看。

（仓库名带个 Citizen 是因为从 [mediawiki-skins-Citizen](https://github.com/StarCitizenTools/mediawiki-skins-Citizen/) 借了点 CSS 样式……）

## 用法

1. 打开 Wiki.js 的后台，点击左侧的“主题”菜单。

2. 打开下载下来的`styles.css`文件，（**不要**放在“CSS 覆盖”中，优先级不够）在“正文HTML注入”中写入一对 HTML 标签`<style type="text/css"></style>`。

3. 将下载下来的`styles.css`内的所有内容复制到`style`标签之中。也就是`<style type="text/css">...CSS内容放在这里面...</style>`之间。

## 编译

- 使用`git clone https://github.com/AurLemon/wikijs-citizen-styles.git`获取项目。

- 项目文件位于`src/styles.scss`之中。在配置好运行环境和包管理器的情况下，使用`pnpm run build-css`打包即可。打包后的文件位于`dist/styles.css`。

## FAQ

**由于 Wiki.js 的注入限制，管理界面、登录界面不会应用这份注入样式。**

如果想修改主题色，可修改项目文件中`:root`选择器下的`--color-primary-override__h: 200; --color-primary-override__s: 55%; -color-primary-override__l: 48%;`。主题色使用的是 HSL 颜色系统，这三个 CSS 变量分别是主题色的色相、饱和度、亮度。

如果还想修改其他颜色，对`:root`选择器下的其它 CSS 变量操作即可。修改完后编译，再参照“用法”的表述应用即可。

如果想自定义字体，建议单独把字体配置放在“CSS 注入”中。直接覆盖 CSS 变量`--cover-font-family`即可，但需要最高优先级。示例如下：

```css
@font-face {
	font-family: Rubik
	src: url('https://exmaple.google.cn/Rubik') format('truetype')
}

:root {
	--cover-font-family: Rubik, sans-serif !important
}
```

如果想自定义代码块颜色，可以把下面的 CSS 放在原样式后面。`::selection` 控制全局选中文本颜色，`code[class*='language-']::selection` 这一组控制代码块内的选中文本颜色，`.token.*` 这一组控制代码高亮颜色。

```css
/* 全局选中文本颜色 */
::selection {
	background: rgba(255, 128, 192, 0.32);
}

/* 代码块内选中文本颜色 */
code[class*='language-']::selection,
code[class*='language-'] ::selection,
pre[class*='language-']::selection,
pre[class*='language-'] ::selection {
	background: rgba(255, 128, 192, 0.32);
}

/* 注释、文档声明 */
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
	color: #787878;
}

/* 布尔值、数字、标签名、删除内容 */
.token.boolean,
.token.deleted,
.token.number,
.token.tag {
	color: #cf694a;
}

/* 关键字、常量、内置符号、属性、选择器 */
.token.builtin,
.token.constant,
.token.keyword,
.token.property,
.token.selector,
.token.symbol {
	color: #f9ee9a;
}

/* 字符串、属性值、URL、变量、插入内容 */
.language-css .token.string,
.style .token.string,
.token.attr-name,
.token.attr-value,
.token.char,
.token.entity,
.token.inserted,
.token.operator,
.token.string,
.token.url,
.token.variable {
	color: #919e6b;
}

/* CSS @ 规则 */
.token.atrule {
	color: #7386a5;
}

/* 正则表达式、important 标记 */
.token.important,
.token.regex {
	color: #e9c163;
}

/* HTML/XML 标签、属性名、标点 */
.language-markup .token.attr-name,
.language-markup .token.punctuation,
.language-markup .token.tag {
	color: #ad895c;
}
```

## 一些计划..

打算优化一下体验！弄个在线生成/复制 CSS 的网站，设置好自己的需求以后直接复制走，放到 Wiki.js 后台里面就行了！~~年底前弄好~~ ~~今年六月中弄好吧~~ ~~今年四月底弄好吧~~
