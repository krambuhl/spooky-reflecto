export default createImporter = (parse, transform = a => a) => source => ({
  parse,
  transform,
  src() {
    return gulp.src(source);
  }
});
