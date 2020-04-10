let count = 0;

let timer = setInterval((msg) => {

    console.log(msg, new Date());

    count++;

    if(count == 10) {

        clearInterval(timer);
    }

}, 1000, "1초 간격");



    