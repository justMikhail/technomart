const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const del = require("del");

// Styles

const styles = () => {
  return gulp
    .src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso(
      {
        restructure: false
      }
    ))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());``
};

exports.styles = styles;

//copy

const copy = () => {
  return gulp
    .src(
      [
        "source/fonts/**/*.{woff,woff2}",
        "source/img/**",
        "source/js/**",
        "source/*.html",
      ],
      {
        base: "source",
      }
    )
    .pipe(gulp.dest("build"));
};

exports.copy = copy;

//clean

const clean = () => {
  return del("build");
};

exports.clean = clean;

//build

const build = gulp.series(clean, copy, styles);
exports.build = build;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

exports.server = server;

// HTML

const html = () => {
  return gulp
  .src("source/*.html")
  .pipe(gulp.dest("build/"));
};
exports.html = html;

// refresh

const refresh = (done) => {
  sync.reload();
  done();
};
exports.refresh = refresh;

// Watcher

const watcher = () => {
  gulp.watch("source/scss/**/*.{sass,scss}", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html, refresh));
  gulp.watch("source/img/**/*.{jpg,png}", gulp.series(clean, copy, refresh));
};

exports.default = gulp.series(build, styles, server, watcher);
