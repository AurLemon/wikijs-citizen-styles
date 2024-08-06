# wikijs-citizen-styles
[Citizen](https://github.com/StarCitizenTools/mediawiki-skins-Citizen/)（一个 MediaWiki 皮肤） 风格的 Wiki.js 覆盖样式表。

反正挺白的，Wiki.js 默认样式的蓝+黑不是很喜欢。

## 用法
1. 打开 Wiki.js 的后台。点击左侧的“主题”菜单。

2. **不要**放在“CSS 覆盖”中。在“正文HTML注入”中写入一对 HTML 标签```<style type="text/css"></style>```。

3. 打开下载下来的```styles.css```文件，将文件内的所有内容复制到```style```标签之中。也就是```<style type="text/css">...CSS内容放在这里面...</style>```之间。

## 编译
* 使用```git clone https://github.com/AurLemon/wikijs-citizen-styles.git```获取项目。

* 项目文件位于```src/styles.scss```之中。在配置好运行环境和包管理器的情况下，使用```npm run build-css```打包即可。打包后的文件位于```dist/styles.css```。

* 如果想修改主题色，可修改项目文件中```:root```选择器下的```--color-primary-override__h: 200; --color-primary-override__s: 55%; -color-primary-override__l: 48%;```。这三个 CSS 变量分别是主题色的色相、饱和度、亮度。主题色是使用 HSL 颜色系统。

* 如果还想修改其他颜色，对```:root```选择器下的其它 CSS 变量操作即可。修改完后编译，再参照“用法”的表述应用即可！