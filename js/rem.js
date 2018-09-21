//实现根据屏幕宽度改变根元素字体大小的js代码
rem();

function rem() {
    setHtmlFontSize();

    function setHtmlFontSize() {
        //改成document.documentElement 因为Body还没出来
        var windowWidth = document.documentElement.offsetWidth;
        if(windowWidth > 640){
            windowWidth = 640;
        }
        var htmlFontSize = windowWidth / 10;
        //获取html设置当前计算的字体大小 带单位
        document.querySelector('html').style.fontSize = htmlFontSize + 'px';
    }
    window.addEventListener('resize', setHtmlFontSize);
}
