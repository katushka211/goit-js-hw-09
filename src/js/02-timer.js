import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let startDate = null;
let timerID = 0;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (selectedDates[0].getTime() < Date.now()) {
      startBtn.disabled = true;
      clearInterval(timerID);
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startDate = selectedDates[0].getTime();
      startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function startTimer() {
  timerID = setInterval(() => {
    const targetDate = startDate - new Date();
    const renderingTime = convertMs(targetDate);
    daysEl.textContent = addLeadingZero(renderingTime.days);
    hoursEl.textContent = addLeadingZero(renderingTime.hours);
    minutesEl.textContent = addLeadingZero(renderingTime.minutes);
    secondsEl.textContent = addLeadingZero(renderingTime.seconds);
    if (
      renderingTime.days === 0 &&
      renderingTime.hours === 0 &&
      renderingTime.minutes === 0 &&
      renderingTime.seconds === 0
    ) {
      clearInterval(timerID);
    }
  }, 1000);
}

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startTimer();
}
