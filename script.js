const buttonAudio = new Audio("/audio/click.wav");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttonAudio.play();
  });
});

let homeScore = document.querySelector("#score-home");
let guestScore = document.querySelector("#score-guest");
let homeFoul = document.querySelector("#foul-el-home");
let guestFoul = document.querySelector("#foul-el-guest");
let hometimeOut = document.querySelector("#timeout-el-home");
let guesttimeOut = document.querySelector("#timeout-el-guest");

let period = document.querySelector("#period-el");
let timer_countdown = document.querySelector("#timer-el");

//INITIALISING COUNTERS
home_counter = 0;
guest_counter = 0;
foul_home_counter = 0;
foul_guest_counter = 0;
timeOut_home_counter = 0;
timeOut_guest_counter = 0;
period_counter = 0;

// ADDING 1 POINT HOME
function add1PointHome() {
    home_counter += 1;
    homeScore.textContent = home_counter;
}

// ADDING 2 POINTS HOME
function add2PointsHome() {
    home_counter += 2;
    homeScore.textContent = home_counter;
}

// ADDING 3 POINTS HOME
function add3PointsHome() {
    home_counter += 3;
    homeScore.textContent = home_counter;
}

// ADDING 1 POINT GUEST
function add1PointGuest() {
    guest_counter += 1;
    guestScore.textContent = guest_counter;
}

// ADDING 2 POINTS GUEST
function add2PointsGuest() {
    guest_counter += 2;
    guestScore.textContent = guest_counter;
}

// ADDING 3 POINTS GUEST
function add3PointsGuest() {
    guest_counter += 3;
    guestScore.textContent = guest_counter;
}

//ADDING FOUL HOME
function addFoulHome() {
    foul_home_counter += 1;
    homeFoul.textContent = foul_home_counter;
}

//ADDING FOUL GUEST
function addFoulGuest() {
    foul_guest_counter += 1;
    guestFoul.textContent = foul_guest_counter;
}

// ADDING TIME OUT HOME
function addTimeoutHome() {
    timeOut_home_counter += 1;
    hometimeOut.textContent = timeOut_home_counter;
}

//ADDING TIME OUT GUEST
function addTimeoutGuest() {
    timeOut_guest_counter += 1;
    guesttimeOut.textContent = timeOut_guest_counter;
}

//ADDING PERIOD
function addPeriod() {
    period_counter += 1;
    period.textContent = period_counter;
}

//SETTING UP TIMER
let startingTime = 10;
let time = startingTime * 60; //in seconds
let timerPaused = true;

//TIMER DISPLAY FUNCTION
function displayTime(time) {
    const minute = Math.floor(time/60)
    const seconds = Math.floor(time % 60);
    timer_countdown.textContent = `${minute<10 ? '0': ''}${minute}:${seconds<10 ? '0': ''}${seconds}`
}

const countDown = setInterval(() => {
    if (!timerPaused) {
        time--;
        displayTime(time)

        if(time <= 0 || time <1) {
            clearInterval(countDown);
        }
    }
},1000)

//START TIMER FUNCTION
function timerStart() {
    timerPaused = false;
}
//PAUSE TIMER FUNCTION
function timerPause() {
    timerPaused = true;
}

// RESET TIMER FUNCTION
function timerReset() {
    timer_countdown.textContent = '10:00';
    time = startingTime * 60;
    timerPaused = true;
}
// NEW GAME
function newGame() {
    home_counter = 0;
    guest_counter = 0;
    foul_home_counter = 0;
    foul_guest_counter = 0;
    timeOut_home_counter = 0;
    timeOut_guest_counter = 0;
    period_counter = 0;

    homeScore.textContent = home_counter;
    guestScore.textContent = guest_counter;
    homeFoul.textContent = foul_home_counter;
    guestFoul.textContent = foul_guest_counter;
    hometimeOut.textContent = timeOut_home_counter;
    guesttimeOut.textContent = timeOut_guest_counter;
    period.textContent = period_counter;

    timer_countdown.textContent = '10:00';
    time = startingTime * 60;
    timerPaused = true;
}