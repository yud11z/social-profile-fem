const btnAll = document.querySelectorAll('.btn');

// btnAll.forEach(btnEl => {
//     btnEl.addEventListener('click', () => {
//         btnEl.style.backgroundColor = 'hsl(75, 94%, 57%)';
//         btnEl.style.color = 'hsl(0, 0%, 20%)';
//         btnEl.style.transition = '.5s';
//     });
// });

btnAll.forEach(btnAlls => {
    btnAlls.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        btnAlls.classList.add('active');
    })
})

