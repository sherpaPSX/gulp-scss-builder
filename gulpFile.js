const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const log = require("fancy-log");
const clean = require("gulp-clean");
const cssnano = require("cssnano");

const sassSourceFile = "assets/scss/styles.scss";
const publicFolder = "dist";
const assetsFolder = "assets";

// Clean assets
function clear() {
  return src(`${publicFolder}/*`, {
    read: false,
  }).pipe(clean());
}

const postCssOptions = [
  autoprefixer({
    grid: "autoplace",
  }),
  cssnano(),
];
// CSS functions
function styles() {
  return src(sassSourceFile, { allowEmpty: true })
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(
      sass().on("error", function (err) {
        log.error(err.message);
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(dest(publicFolder))
    .pipe(browserSync.stream());
}

// CSS functions
function stylesProd() {
  return src(sassSourceFile, { allowEmpty: true })
    .pipe(sass())
    .pipe(
      sass().on("error", function (err) {
        log.error(err.message);
      })
    )
    .pipe(postcss(postCssOptions))
    .pipe(dest(publicFolder));
}

// Watch files
function watchFiles() {
  watch(`${assetsFolder}/scss/**/*.scss`, styles);
  watch("./*.html").on("change", browserSync.reload);
}

// BrowserSync
function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3000,
  });
}

exports.dev = parallel(watchFiles, serve);
exports.default = series(clear, styles);
exports.build = series(clear, stylesProd);
