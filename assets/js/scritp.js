// 滚动条向下移动10px， image向上移动1px
function transformBgImage (scrollY, element) {
    // const element = document.querySelector('.top-bg');
    const rate = -1 * scrollY / 5;
    //     transform: translate3d(0px, 67.5px, 0px);
    element.style.transform = `translate3d(0px, ${rate}px, 0px)`; // 应用平移y方向效果

}



window.addEventListener('DOMContentLoaded', (event) => {
    const navBar = document.querySelector('.nav-bar-wrap .navigate-bar');
    const content = document.querySelector('.nav-bar-wrap');
    const element = document.querySelector('.top-bg');

    const scrollPosition = 7; // 指定的滚动位置

    window.addEventListener('scroll', () => {

        transformBgImage(window.scrollY, element);


        if (window.scrollY >= scrollPosition) {
            content.classList.add('at-scroll-position57');
            navBar.style['z-index'] = 400;

        } else {
            content.classList.remove('at-scroll-position57');
            navBar.style['z-index'] = 100
        }
    });
});