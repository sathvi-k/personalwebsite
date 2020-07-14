import $ from 'jquery';
import './style.scss';

let num = 0;
$('#main').html(`You've been on this page for ${num} second(s).`);

/* https://www.w3schools.com/jsref/met_win_setinterval.asp */
setInterval(() => {
  num += 1;
  $('#main').html(`You've been on this page for ${num} second(s).`);
}, 1000);
