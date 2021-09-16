import React, { useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState();

  const [ddmmyyyy, setDdmmyyyy] = useState();
  const [mmddyyyy, setMmddyyyy] = useState();
  const [yyyymmdd, setYyyymmdd] = useState();
  const [ddmmyy, setDdmmyy] = useState();
  const [mmddyy, setMmddyy] = useState();
  const [yymmdd, setYymmdd] = useState();
  const [palindrome, setPalindrome] = useState();
  const [days, setDays] = useState();
  const [nextday, setNextday] = useState();
  const [nextmonth, setNextmonth] = useState();
  const [nextyear, setNextyear] = useState();

  function getDate(d) {
    var date = {
      day: parseInt(d.slice(8, 10)),
      month: d.slice(5, 7),
      year: d.slice(0, 4)
    }
    return date;
  }

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function isStringPalindrome(str) {
    return str === reverseString(str);
  }

  function getDateAsString(date) {
    var dateStr = { day: '', month: '', year: '' };

    if (date.day < 10) {
      dateStr.day = '0' + date.day;
    }
    else {
      dateStr.day = date.day.toString();
    }

    if (date.month < 10) {
      dateStr.month = '0' + date.month;
    }
    else {
      dateStr.month = date.month.toString();
    }

    dateStr.year = date.year.toString();
    return dateStr;
  }

  function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }

  function checkPalindromeForAllDateFormats(date) {
    var dateFormatList = getDateInAllFormats(date);
    var palindromeList = [];

    for (var i = 0; i < dateFormatList.length; i++) {
      var result = isStringPalindrome(dateFormatList[i]);
      palindromeList.push(result);
    }
    return palindromeList;
  }

  function isLeapYear(year) {

    if (year % 400 === 0)
      return true;

    if (year % 100 === 0)
      return false;

    if (year % 4 === 0)
      return true;

    return false;
  }

  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month = 3;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month = 3;
        }
      }
    }
    else {
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }

    if (month > 12) {
      month = 1;
      year++;
    }

    return {
      day: day,
      month: month,
      year: year
    }
  }


  function getNextPalindromeDate(date) {

    var nextDate = getNextDate(date);
    var ctr = 0;

    while (1) {
      ctr++;
      var dateStr = getDateAsString(nextDate);
      var resultList = checkPalindromeForAllDateFormats(dateStr);

      for (let i = 0; i < resultList.length; i++) {
        if (resultList[i]) {
          return [ctr, nextDate];
        }
      }
      nextDate = getNextDate(nextDate);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (date == undefined) {
      alert("Please enter a valid input for date.");
      return 0;
    }
    var today = new Date();
    today = today.getFullYear(); + '-' + String(today.getMonth() + 1).padStart(2, '0'); + '-' + String(today.getDate()).padStart(2, '0');
    console.log('today = ', today);
    console.log('sel = ', date);
    if (date > today) {
      alert('Please do not select your birthday as a date in the future.');
      return 0;
    }
    var tddmmyyyy = date.slice(8, 10) + date.slice(5, 7) + date.slice(0, 4) ===
      (date.slice(8, 10) + date.slice(5, 7) + date.slice(0, 4)).split('').reverse().join('') ? 'Pal' : 'Not'

    var tmmddyyyy = (
      date.slice(5, 7) + date.slice(8, 10) + date.slice(0, 4) ===
        (date.slice(5, 7) + date.slice(8, 10) + date.slice(0, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );
    var tyyyymmdd = (
      date.slice(0, 4) + date.slice(5, 7), date.slice(8, 10) ===
        (date.slice(0, 4) + date.slice(5, 7), date.slice(8, 10)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    var tddmmyy = (
      date.slice(8, 10) + date.slice(5, 7) + date.slice(2, 4) ===
        (date.slice(8, 10) + date.slice(5, 7) + date.slice(2, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );
    var tmmddyy = (
      date.slice(5, 7) + date.slice(8, 10) + date.slice(2, 4) ===
        (date.slice(5, 7) + date.slice(8, 10) + date.slice(2, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    var tyymmdd = (
      date.slice(2, 4) + date.slice(5, 7), date.slice(8, 10) ===
        (date.slice(2, 4) + date.slice(5, 7), date.slice(8, 10)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    if (tddmmyyyy === 'Pal' || tmmddyyyy === 'Pal' || tyyyymmdd === 'Pal' || tddmmyy === 'Pal' || tmmddyy === 'Pal' || tyymmdd === 'Pal') {
      setPalindrome("It's a palindrome!");

    }
    else {
      setPalindrome('Your birth date is not a palindrome.');
    }

    setDays(getNextPalindromeDate(getDate(date))[0]);
    setNextday(getNextPalindromeDate(getDate(date))[1].day);
    setNextmonth(getNextPalindromeDate(getDate(date))[1].month);
    setNextyear(getNextPalindromeDate(getDate(date))[1].year);

  }

  return (
    <div className="container">
      <div className="ipContent">
        <h1>Palindrome Birthday </h1>
        <form>
          <label> Enter your birthday </label> :
          <input required type="date" onChange={(e) => setDate(e.target.value)} /> <br />
          <button onClick={handleSubmit}> Show </button>
        </form>
      </div>
      <div className="opContent">
        <div hidden={palindrome === undefined ? true : false}>
          {
            palindrome
          }
        </div>
        <div hidden={palindrome == "It's a palindrome!" ? true : false}>
          <div hidden={nextday == undefined ? true : false}>
            <br />The next palindrome date would be on <b>{nextday}/{nextmonth}/{nextyear}</b>. <br /><br />
          </div>
          <div hidden={days == undefined ? true : false}>
            This date is away from your birthday by<b> {
              days
            } </b>days.
          </div>

        </div>
        <div hidden={palindrome == "It's a palindrome!" ? false : true}>
          <br />Fun fact : “Birthday Paradox” is the likelihood that out of 23 people, there is a 50/50 chance that two of them will have the same birthday. This probability goes up to 99% for a group of 57 people!
        </div>
      </div>
    </div>
  );
}

export default App;
