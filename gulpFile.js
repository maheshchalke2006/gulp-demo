var gulp = require('gulp');



gulp.task('default',function(){
    console.log('Gulp configuration done');
});

gulp.task('customeTask',function(){
    console.log('Gulp configuration done');
});

gulp.task('build',function(){
    return gulp.src('./index.html').pipe(gulp.dest('./output'));

});

gulp.task("ci",function(){
    return gulp.watch("./*.html", ['build']);
});

var html = require('gulp-htmlmin');
gulp.task('html',function(){
    return gulp.src("./*.html")
    .pipe(html({
        removeComments: true,
    }))
    .pipe(gulp.dest("./output"));
})

var uglify = require('gulp-uglify');
gulp.task('js',function(){
    return gulp.src("./*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./output"));
})