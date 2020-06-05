import "./styles.css";
const clock = document.querySelector(".js-clock");

const DAY_MILLISECONDS = 86400000;
const HOUR_MILLISECONDS = 3600000;
const MIN_MILLISECONDS = 60000;
const SEC_MILLISECONDS = 1000;

function paintKoreaDday(day, hour, minutes, second) {
  let convertKoreanHour = hour + 9;

  if (convertKoreanHour >= 24) {
    hour = convertKoreanHour - 24;
    day += 1;
  }
  clock.innerText = `${day}d ${hour < 10 ? `0${hour}` : hour}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${second < 10 ? `0${second}` : second}s`;
}

function UTCXmas(xmasDdayUTC) {
  let timeRemain = xmasDdayUTC;

  const day = Math.floor(timeRemain / DAY_MILLISECONDS);
  timeRemain -= day * DAY_MILLISECONDS;
  const hour = Math.floor(timeRemain / HOUR_MILLISECONDS); //korean UTC
  timeRemain -= hour * HOUR_MILLISECONDS;
  const minutes = Math.floor(timeRemain / MIN_MILLISECONDS);
  timeRemain -= minutes * MIN_MILLISECONDS;
  const second = Math.floor(timeRemain / SEC_MILLISECONDS);
  paintKoreaDday(day, hour, minutes, second);
}

function getTime(date) {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();

  const xmasDdayUTC = xmasDay - today - 32400000;
  UTCXmas(xmasDdayUTC);
}

function init() {
  setInterval(getTime, 1000);
}
init();
