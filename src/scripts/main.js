const switchTheme = document.getElementById('switch');

switchTheme.addEventListener('click', function(){
    const getBody = document.querySelector('body')
    getBody.classList.toggle('light-theme')
})