let homeScore = document.querySelector("#score-home");
let guestScore = document.querySelector("#score-guest");
let homeFoul = document.querySelector("#foul-el-home");
let guestFoul = document.querySelector("#foul-el-guest");
let hometimeOut = document.querySelector("#timeout-el-home");
let guesttimeOut = document.querySelector("#timeout-el-guest");

let period = document.querySelector("#period-el");
let timer = document.querySelector("#timer-el");

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

//START TIMER

//PAUSE TIMER

// RESET TIMER

// NEW GAME