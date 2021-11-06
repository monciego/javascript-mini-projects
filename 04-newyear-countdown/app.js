const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// get the year (new year)
const newyearCountDate = () => {
  // let today = new Date("January 02, 2022 00:00:00");
  let today = new Date();
  let deadline = "January 1 " + (today.getFullYear() + 1) + " 00:00:00";

  if (today.getMonth() === 0 && today.getDate() === 1) {
    deadline = "January 1 " + today.getFullYear() + " 00:00:00";
    document.querySelector(".countdown-title").innerHTML = "HAPPY NEW YEAR";
  } else {
    deadline = "January 1 " + (today.getFullYear() + 1) + " 00:00:00";
    document.querySelector(".countdown-title").innerHTML = "NEW YEAR COUNTDOWN";
  }

  let countDate = new Date(deadline).getTime();

  const now = new Date().getTime();
  const gap = countDate - now;

  // the time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // update the html
  days.innerText = textDay;
  hours.innerText = textHour;
  minutes.innerText = textMinute;
  seconds.innerText = textSecond;
};

// run
newyearCountDate();

setInterval(newyearCountDate, 1000);
