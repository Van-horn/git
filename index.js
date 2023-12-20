const up = document.getElementById('up');
window.addEventListener('scroll', function () {
    if (this.pageYOffset <= 400) {
        up.style.display = 'none';
    } else {
        up.style.display = 'flex';
    }

    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    });
});
