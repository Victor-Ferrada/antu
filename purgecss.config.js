module.exports = {
  content: ['./**/*.html'],
  css: ['./css/*.css'],
  output: './dist/',
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}