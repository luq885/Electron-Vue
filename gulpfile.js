'use strict';
const gulp = require('gulp');
const webpack = require('gulp-webpack');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const run = require('gulp-run');
const electron = require('gulp-electron');
const cleanCSS = require('gulp-clean-css');
const fs = require('fs');
const del = require('del');

const sources = {
    index: './index.html',
    package: './package.json',
    css: './assets/css/*.css',
    image: './assets/images/*.*',
    icon: './icons/*.*',
    main: './main.js',
    fonts: './assets/fonts/*.*',
};

gulp.task('package-mac', ['set-prod-node-env', 'build'], () => {
    run('./node_modules/.bin/electron-packager ./build/dist/ $npm_package_productName --out=./build/Release --overwrite --prune --asar --arch=all --platform=darwin --icon=./assets/icons/icon.icns --version=$npm_package_electronVersion --app-version=$npm_package_version').exec();
});

gulp.task('makesetup-mac', ['package-mac'], () => {
    setTimeout(() => {
        run('hdiutil create -format UDZO -srcfolder ./build/Release/Electronvue-darwin-x64/electronvue.app /Volumes/RamDisk/electronvue.dmg').exec();
    },2000);
});

gulp.task('package-win', ['set-prod-node-env', 'build'], () => {
    const packageJson = require('./build/dist/package.json');
    gulp.src('')
        .pipe(electron({
            src: 'build/dist',
            packageJson: packageJson,
            release: 'build/Release',
            cache: 'build/cache',
            version: 'v1.4.1',
            rebuild: false,
            packaging: false,
            asar: true,
            platforms: ['win32-ia32'],
            platformResources: {
                darwin: {
                    'version-string': packageJson.version,
                    'file-version': packageJson.version,
                    'product-version': packageJson.version,
                    'icon': './icons/icon.ico'
                },
            }
        }))
        .pipe(gulp.dest(''));
});

gulp.task('clean', () => {
    del.sync(['build/dist/**', 'build/Release/**', 'build/setup/**']);
});


gulp.task('set-dev-node-env', () => {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', () => {
    return process.env.NODE_ENV = 'production';
});

gulp.task('run-dev', ['set-dev-node-env'], () => {
    run('./node_modules/.bin/electron .').exec();
});

gulp.task('run-prod', ['set-prod-node-env', 'build'], () => {
    run('./node_modules/.bin/electron ./build/dist/').exec();
});

gulp.task('prepare-main', () => {
    gulp.src(sources.main)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('prepare-image', () => {
    gulp.src(sources.image)
        .pipe(gulp.dest('build/dist/assets/images/'));
});

gulp.task('prepare-css', () => {
    gulp.src(sources.css)
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/dist/assets/css/'));
    gulp.src(sources.fonts)
        .pipe(gulp.dest('build/dist/assets/fonts/'));
});

gulp.task('prepare-html', () => {
    gulp.src(sources.index)
        .pipe(replace('<script>require(\'./src/index\')</script>', '<script src="./bundle.js"></script>'))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('prepare-package', () => {
    gulp.src(sources.package)
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('webpack', () => {
    return gulp.src('src/index.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('update-version', () => {
    let fileContent = fs.readFileSync(sources.package, 'utf8');
    let reg = /"version": "(\d.\d.\d)",/g;
    let mathes = reg.exec(fileContent);
    let ver = parseInt(mathes[1].replace(/\./g, '')) + 1;
    let verNumber = Array(3 > ('' + ver).length ? (3 - ('' + ver).length + 1) : 0).join(0) + ver;
    let newVer = mathes[0].replace(mathes[1], verNumber[0] + '.' + verNumber[1] + '.' + verNumber.substr(2, verNumber.length - 1));
    gulp.src(sources.package)
        .pipe(replace(mathes[0], newVer))
        .pipe(gulp.dest('./bulids/dist/'))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['webpack', 'prepare-css', 'prepare-main', 'prepare-image', 'prepare-html', 'prepare-package']);