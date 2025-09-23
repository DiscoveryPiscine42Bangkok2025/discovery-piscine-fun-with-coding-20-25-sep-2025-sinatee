let button = document.getElementById('myButton')
button.addEventListener('click', function() {
    let color = '#' + (Math.floor(Math.random() * 16777215)).toString(16);
    document.body.style.backgroundColor = color;
})