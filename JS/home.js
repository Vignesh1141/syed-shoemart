/* Navbar for all Pages */
function toggleMenu() {
    document.querySelector(".navlinks").classList.toggle("active");
}

/* Home-Page Gallery Slider */
function toggleRow() {
    const row1 = document.querySelector('.row1');
    const row2 = document.querySelector('.row2');

    if(row1.classList.contains('active')){
        row1.classList.remove('active');
        row2.classList.add('active');
    }
    else {
        row2.classList.remove('active');
        row1.classList.add('active');
    }
}

/* Slippers-Page and Shoes-Page Heart selection */
document.querySelectorAll('.pro-heart').forEach(heart => {
    heart.addEventListener('click', function() {
        this.querySelector('i').classList.toggle('active');
    });
});