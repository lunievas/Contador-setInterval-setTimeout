let start =  document.querySelector('#start');



window.addEventListener('load', function(){
    const timer = document.querySelector('#timer');

    
    start.addEventListener('click', inicioContagem);

    // let count = 0;

    // const interval  = setInterval(() => {            //repete a execução 

    //         timer.textContent =  ++count;

    //         if(count === 10){
    //             clearInterval(interval);       //mandando parar quando chegar nos 10 com o clearInterval
    //             return;
    //         }

    //         if(count %5 ===0 ){
    //             setTimeout(() => {
    //                 timer.textContent = count + ',5';        //adicionando o meio nos numeros multiplos de 5
    //             }, 500);
    //         }
    // }, 1000);


})

function inicioContagem(event){
    let count = 0;

    const interval  = setInterval(() => {            //repete a execução 

            timer.textContent =  ++count;

            if(count === 10){
                clearInterval(interval);       //mandando parar quando chegar nos 10 com o clearInterval
                return;
            }

            if(count %5 ===0 ){
                setTimeout(() => {
                    timer.textContent = count + ',5';        //adicionando o meio nos numeros multiplos de 5
                }, 500);
            }
    }, 1000);
}

