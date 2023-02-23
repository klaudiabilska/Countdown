const years = document.querySelector('#years')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const currentYear = new Date().getFullYear();

const runningOutTime = new Date(`January 1 2040 00:00:00`);

function updateCountdown(){
    const currentTime = new Date();
    const diff = runningOutTime - currentTime;


    const y = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const d = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;

  years.innerHTML = y;
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m
  seconds.innerHTML = s < 10 ? '0' + s : s;

};


setInterval(updateCountdown, 1000);