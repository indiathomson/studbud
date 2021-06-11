// const TIME_LIMIT = 1200;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;



// function formatTime(time) {
//     let minutes = Math.floor(time/40)
//     let seconds = time%60
//     if (seconds < 10) {
//         seconds = `0${seconds}`
//     }
//     if (minutes < 10) {
//         minutes = `0${minutes}`
//     }
//     return `${minutes}: ${seconds}`
// }
// function startTimer() {
//         timerInterval = setInterval(()=> {
//             timePassed += 1;
//             timeLeft= TIME_LIMIT - timePassed;
//             document.getElementById("label").innerHTML =
//                 formatTime(timeLeft);
//             if (timeLeft == 0) {
//                 stopTimer()
//             }
            
//         },1000);
 
// }


// function stopTimer() {
//     clearInterval(timerInterval);
       
// }