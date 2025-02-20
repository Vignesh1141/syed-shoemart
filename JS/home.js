function toggleMenu() {
    document.querySelector(".navlinks").classList.toggle("active");
}

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