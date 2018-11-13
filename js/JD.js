var html = document.querySelector('html');
changeRem();
window.addEventListener('resize', changeRem);
function changeRem() {
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 10 + 'px';
}


