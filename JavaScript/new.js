let startTime = Math.floor(new Date('2022-05-03T15:40:30') / 1000);
function startTimeCounter() {
    let now = Math.floor(Date.now() / 1000); // get the time now
    let diff = now - startTime; // diff in seconds between now and start
    document.getElementById("seconds").innerHTML = `${diff} seconds!`; // update the element where the timer will appear
    let t = setTimeout(startTimeCounter, 500); // set a timeout to update the timer
    }
startTimeCounter();

document.getElementById("year").innerHTML = new Date().getFullYear()