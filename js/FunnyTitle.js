<!--浏览器搞笑标题-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://gitee.com/dong2645981073/picture-summary/raw/master//image/image-20211128171544646.png");
        document.title = '我相信你还会回来的！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://gitee.com/dong2645981073/picture-summary/raw/master//image/image-20211128171544646.png");
        document.title = '哈哈，我就知道！' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
