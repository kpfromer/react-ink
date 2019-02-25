const gulp = require('gulp');
const babel = require('gulp-babel');

const babelOptions = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
}


const build = () =>
  gulp.src('src/**/*.js')
  .pipe(babel(babelOptions))
  .pipe(gulp.dest('dist'));

module.exports = {
  build
}