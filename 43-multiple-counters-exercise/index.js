const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;

/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
1. As a user I should be able to add a new timer to the DOM by clicking on "Add Timer".
2. A timer should continuously count up and always show seconds and the first two integers of milliseconds
3. When I click "Reset", that timer should return to 0.
4. When I click "Stop", it should stop that timer.
5. When I click "X", the timer should stop and be removed from the DOM
6. I should be able to add NO MORE than 5 timers.
 */



const createTimerEl = (number) => {

  //Create div timers with all elements
  const newTimer = document.createElement("div");
  newTimer.classList.add("timer", `timer_${number}`);
  const divRemove = document.createElement("div");
  divRemove.classList.add("remove");
  newTimer.appendChild(divRemove);

  const h3 = document.createElement("h3");
  h3.innerText = 0;
  newTimer.appendChild(h3);

  const spanEl = document.createElement("span");
  spanEl.innerText = 0;
  h3.appendChild(spanEl);

  const divBtn = document.createElement("div");
  divBtn.classList.add("btn");
  newTimer.appendChild(divBtn);

  const btnReset = document.createElement("button");
  const btnStop = document.createElement("button");
  btnReset.classList.add("reset");
  btnStop.classList.add("stop");
  btnReset.innerText = "Reset";
  btnStop.innerText = "Stop";
  divBtn.appendChild(btnReset);
  divBtn.appendChild(btnStop);


  // start timer
  let countUp = 0;
  let interval = setInterval(() => {
    countUp += 1;
    let seconds = Math.floor(countUp / 100);
    let milliseconds = countUp % 100;
    (h3.innerHTML = `${seconds} <span>${milliseconds}</span>`), 100, newTimer;
  });

  // event listeners
  divRemove.addEventListener("click", () => {
    timersContainerEl.removeChild(newTimer);
  });

  btnStop.addEventListener("click", () => {
    clearInterval(interval);
  });

  btnReset.addEventListener("click", () => {
    countUp = 0;
  });

  return newTimer;
};



//add up to 5 div timers
addCounterEl.addEventListener("click", () => {
  if (timersCount < 5) {
    timersCount += 1;
    let addTimer = createTimerEl(timersCount);
    timersContainerEl.appendChild(addTimer);
  }
});
