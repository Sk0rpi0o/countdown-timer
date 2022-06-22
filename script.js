// ending date minus current date for countdown

const newWebsite = '31 Oct 2022'

function countdown() {
  const newWebsiteDate = new Date(newWebsite);
  const currentDate = new Date();

  const seconds = (newWebsiteDate - currentDate) / 1000;

  const days = Math.floor(seconds / 3600 / 24);

  console.log(days);
}
// inital call
countdown();

setInterval(countdown, 1000);

