const animate = document.querySelector('#img');
animate.addEventListener('mouseover', () => {
    document.body.classList.toggle('dark');
});
animate.addEventListener('mouseout', () => {
    document.body.classList.toggle('dark');
    document.querySelector('#img').classList.toggle('turn');
});