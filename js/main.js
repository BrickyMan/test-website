let filterBtns = document.querySelectorAll('.filter-btn');

for (let b of filterBtns) {
    b.onclick = function() {
        document.querySelector('.filter-btn.current').classList.remove('current');
        b.classList.add('current');
        document.querySelector('.filter-btn.current').style.backgroundImage = `url(imgs/bgc.png)`
    }
}