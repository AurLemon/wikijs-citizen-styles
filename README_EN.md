# wikijs-citizen-styles

[中文](README.md)

![Image 1](https://s2.loli.net/2025/04/15/U19BySrJWaEFkzY.png)
[Citizen](https://github.com/StarCitizenTools/mediawiki-skins-Citizen/)-style override stylesheet for Wiki.js.

Wiki.js is quite bright by default, and I do not really like its default blue + black styling.

The repository name includes Citizen because this stylesheet borrows some CSS ideas from [mediawiki-skins-Citizen](https://github.com/StarCitizenTools/mediawiki-skins-Citizen/).

## Usage

1. Open the Wiki.js administration panel and click the "Theme" menu on the left.

2. Open the downloaded `styles.css` file. Do **not** put it into "CSS Override" because its priority is not high enough. Instead, write a pair of HTML tags in "Head HTML Injection": `<style type="text/css"></style>`.

3. Copy the entire content of `styles.css` into the `style` tag, like `<style type="text/css">...CSS content goes here...</style>`.

## Build

- Clone this project with `git clone https://github.com/AurLemon/wikijs-citizen-styles.git`.

- The source file is `src/styles.scss`. After setting up the environment and package manager, run `pnpm run build-css`. The built file will be generated at `dist/styles.css`.

## FAQ

**Due to Wiki.js injection limitations, this injected stylesheet does not apply to the administration or login pages.**

To change the primary color, edit `--color-primary-override__h: 200; --color-primary-override__s: 55%; --color-primary-override__l: 48%;` under the `:root` selector in the source file. The theme color uses the HSL color system, and these three CSS variables represent hue, saturation, and lightness.

To change other colors, edit the other CSS variables under the `:root` selector. After editing, rebuild the CSS and apply it again following the usage instructions.

To customize fonts, it is recommended to put the font configuration separately in "CSS Injection". You only need to override the CSS variable `--cover-font-family`, but it must have the highest priority. Example:

```css
@font-face {
	font-family: Rubik
	src: url('https://exmaple.google.cn/Rubik') format('truetype')
}

:root {
	--cover-font-family: Rubik, sans-serif !important
}
```

To customize code block colors, put the following CSS after the original stylesheet. `::selection` controls the global selected text color, the `code[class*='language-']::selection` group controls selected text color inside code blocks, and the `.token.*` group controls code highlighting colors.

```css
/* Global selected text color */
::selection {
	background: rgba(255, 128, 192, 0.32);
}

/* Selected text color inside code blocks */
code[class*='language-']::selection,
code[class*='language-'] ::selection,
pre[class*='language-']::selection,
pre[class*='language-'] ::selection {
	background: rgba(255, 128, 192, 0.32);
}

/* Comments and document declarations */
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
	color: #787878;
}

/* Booleans, numbers, tag names, and deleted content */
.token.boolean,
.token.deleted,
.token.number,
.token.tag {
	color: #cf694a;
}

/* Keywords, constants, built-ins, properties, selectors, and symbols */
.token.builtin,
.token.constant,
.token.keyword,
.token.property,
.token.selector,
.token.symbol {
	color: #f9ee9a;
}

/* Strings, attribute values, URLs, variables, and inserted content */
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

/* CSS at-rules */
.token.atrule {
	color: #7386a5;
}

/* Regular expressions and important markers */
.token.important,
.token.regex {
	color: #e9c163;
}

/* HTML/XML tags, attribute names, and punctuation */
.language-markup .token.attr-name,
.language-markup .token.punctuation,
.language-markup .token.tag {
	color: #ad895c;
}
```
