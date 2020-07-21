window.addEventListener('load', function(){
    const timer = document.querySelector('#timer');
    let count = 0;

    const interval  = setInterval(() => {
        timer.textContent =  count + 1;
    }, 1000);
})