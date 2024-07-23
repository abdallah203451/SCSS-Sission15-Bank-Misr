const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Define a task to compile SCSS to CSS
gulp.task("styles", function () {
  return gulp
    .src("src/scss/**/*.scss") // Source folder containing SCSS files
    .pipe(sass().on("error", sass.logError)) // Compile SCSS to CSS and log errors
    .pipe(gulp.dest("dist/css")); // Destination folder for compiled CSS files
});

// Watch task to automatically compile SCSS when changes are detected
gulp.task("watch", function () {
  gulp.watch("src/scss/**/*.scss", gulp.series("styles"));
});

// Default task when running `gulp` command
gulp.task("default", gulp.series("styles", "watch"));
