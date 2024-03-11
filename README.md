# tailwindcss-accent

A Tailwind CSS plugin that provides `accent` color utilities using CSS custom properties based on the Tailwind CSS default color palette.

##### Example : https://ilsyaa.github.io/tw-accent-colors

## Installation

Install the plugin from npm:

```bash
npm i -D tw-accent
```

Then add the plugin to your tailwind.config.js file:

```js
module.exports = {
  plugins: [
    require('tw-accent')({
      colors: ['violet', 'sky', 'red'],
      root: 'red',
      cssVarsPrefix: 'tw', // result: --tw-accent-500
      attr: 'lazy-accent', // result: <html lazy-accent="red">...</html>
    }),
  ],
};
```

## Options

| Option            | Description                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| colors `REQUIRED` | Include specific colors. View the <a href="https://tailwindcss.com/docs/customizing-colors" target="_blank">available colors</a> section. |
| root              | Set color from colors option as `:root` accent color.                                                                                     |
| cssVarsPrefix     | Set prefix for css variables name. default to 'tw-ta' (e.g: --tw-ta-accent-200)                                                           |
| attr              | Set attribute name. default to 'lazy-accent' (e.g: `<html lazy-accent="red">...</html>`)                                                  |

> The cssVarsPrefix option can help prevent naming conflicts and make it easier for you to use accent CSS variables in your styles.

## Basic Usage

Add the lazy-accent attribute to your root/html element (or simply set the root plugin option).

```html
<html lazy-accent="red">
  <!--  -->
</html>
```

Now, instead of writing text-red-500, with this plugin you can write text-accent-500.

The accent color will follow the value of the nearest parent element's lazy-accent attribute, or the element itself.

Let the code speak:

```html
<!-- default to :root -->
<p class="text-accent-500">this text has a blue (:root) accent color.</p>

<div lazy-accent="violet">
  <!-- based on nearest parent element: violet. -->
  <p class="text-accent-500">this text has a violet accent color.</p>

  <!-- based on nearest parent element: violet. -->
  <p class="text-accent-500">
    this text has a violet

    <!-- overrides the parent's accent color to blue. -->
    <span lazy-accent="sky" class="text-accent-500">and sky</span>

    accent color!
  </p>
</div>
```

## License

MIT
