# SCSS to CSS compiler

**tags:** Gulp, BrowserSync, SCSS, PostCSS, Autoprefixer, CSSNamo

## Features

- Compile SCSS to CSS with [Gulp 4](https://gulpjs.com/)
- Optimized with PostCSS [Autoprefixer](https://github.com/postcss/autoprefixer) and [CSSNano](https://cssnano.co)
- Faster by syncronising file changes and interactions across multiple devices with [BrowserSync](https://browsersync.io/)

## Usage

- `npm run dev` Start compiler with BrowserSync watcher.
- `npm run build` Production ready styles.

## Customisation

- Edit PostCSS options in `postCssOptions` object in `gulpFile.js`.
- Supported browsers for Autoprefixes are defined in `browserslist` object in `package.json`.

## Articles
- https://gulpjs.com/docs/en/getting-started/quick-start
- https://sass-lang.com/guide
- https://github.com/postcss/postcss
- https://cssnano.co/docs/introduction
- https://github.com/browserslist/browserslist
- https://browsersync.io/docs
