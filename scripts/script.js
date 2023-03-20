'use strict';

// selecting elements

const dateEl = document.getElementById('date');

const yearsEl = document.getElementById('year');
const monthEl = document.getElementById('months');

const daysEl = document.getElementById('days');

// global variables
let today = 0;
// let birthDay = 0;

let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// functions

// leap year function

function leapYear(year) {
  // console.log(year)
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    console.log(`its leapyeat`);
    month[1] = 29;
  } else {
    month[1] = 28;
  }
}

// display function
function displayResult(date, month, year) {
  yearsEl.textContent = year;
  monthEl.textContent = month;
  daysEl.textContent = date;
}

const calculateAge = () => {
  if (dateEl.value === '') {
    alert(`enter valid input`);
  } else {
    let today = new Date();
    let inputDate = new Date(dateEl.value);

    let birthYear, birthMonth, birthDate;

    // creating birthday detail object

    let birthDetail = {
      birthYear: inputDate.getFullYear(),
      birthMonth: inputDate.getMonth() + 1,
      birthDate: inputDate.getDate(),
    };

    // getting current date year month

    let currentYear = today.getFullYear();

    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    // check if year is leap or not?

    leapYear(currentYear);

    // console.log(leapYear);

    if (
      birthDetail.birthYear > currentYear ||
      (birthDetail.birthMonth > currentMonth &&
        birthDetail.birthYear == currentYear) ||
      (birthDetail.birthDate > currentDate &&
        birthDetail.birthMonth == currentMonth &&
        birthDetail.birthYear == currentYear)
    ) {
      alert('Not Born Yet');
      displayResult('-', '-', '-');
      return;
    }
    birthYear = currentYear - birthDetail.birthYear;

    console.log(birthYear);

    if (currentMonth >= birthDetail.birthMonth) {
      birthMonth = currentMonth - birthDetail.birthMonth;
      console.log(birthMonth);

      // console.log(birthMonth);
    } else {
      console.log(`hii`);
      birthYear--;
      birthMonth = 12 + currentMonth - birthDetail.birthMonth;
      console.log(birthMonth);
    }

    if (currentDate >= birthDetail.birthDate) {
      birthDate = currentDate - birthDetail.birthDate;
      console.log(birthDate);
    } else {
      birthMonth--;
      let days = month[currentMonth - 2];
      birthDate = days + currentDate - birthDetail.birthDate;
      console.log(`date${birthDate}`);

      if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;

        console.log(birthMonth);
      }
    }

    displayResult(birthDate, birthMonth, birthYear);
  }
};
