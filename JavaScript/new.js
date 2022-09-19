let startTime = Math.floor(new Date('May 3, 2022 8:15:30') / 1000);
function startTimeCounter() {
    let now = Math.floor(Date.now() / 1000); // get the time now
     let diff = now - startTime; // diff in seconds between now and start
     let m = Math.floor(diff / 60); // get minutes value (quotient of diff)
    let s = Math.floor(diff % 60); // get seconds value (remainder of diff)
     m = checkTime(m); // add a leading zero if it's single digit
     s = checkTime(s); // add a leading zero if it's single digit
     let total = m + s;
    document.getElementById("seconds").innerHTML = total; // update the element where the timer will appear
     let t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
     }
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
     return i;
    }
startTimeCounter();

document.getElementById("year").innerHTML = new Date().getFullYear()