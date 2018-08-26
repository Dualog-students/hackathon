const countDownClock = (eventDate) => {
  let d = document;
  let daysElement = d.querySelector('.days');
  let hoursElement = d.querySelector('.hours');
  let minutesElement = d.querySelector('.minutes');
  let secondsElement = d.querySelector('.seconds');
  let seconds = Math.abs(Date.now() - eventDate)

  return timer(seconds);

  function timer(seconds) {
    let now = Date.now();
    let then = now + seconds;

    let countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft <= 0) {
        clearInterval(countdown);
        secondsElement.textContent = 0;
        return;
      };
      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    daysElement.textContent = Math.floor(seconds / 86400);
    hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
    minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
    secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
  }
}