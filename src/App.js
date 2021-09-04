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

  function handleSubmit(e) {
    e.preventDefault();

    setDdmmyyyy(
      date.slice(8, 10) + date.slice(5, 7) + date.slice(0, 4) ===
        (date.slice(8, 10) + date.slice(5, 7) + date.slice(0, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    setMmddyyyy(
      date.slice(5, 7) + date.slice(8, 10) + date.slice(0, 4) ===
        (date.slice(5, 7) + date.slice(8, 10) + date.slice(0, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );
    setYyyymmdd(
      date.slice(0, 4) + date.slice(5, 7), date.slice(8, 10) ===
        (date.slice(0, 4) + date.slice(5, 7), date.slice(8, 10)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    setDdmmyy(
      date.slice(8, 10) + date.slice(5, 7) + date.slice(2, 4) ===
        (date.slice(8, 10) + date.slice(5, 7) + date.slice(2, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );
    setMmddyy(
      date.slice(5, 7) + date.slice(8, 10) + date.slice(2, 4) ===
        (date.slice(5, 7) + date.slice(8, 10) + date.slice(2, 4)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    setYymmdd(
      date.slice(2, 4) + date.slice(5, 7), date.slice(8, 10) ===
        (date.slice(2, 4) + date.slice(5, 7), date.slice(8, 10)).split('').reverse().join('') ? 'Pal' : 'Not'
    );

    if (ddmmyyyy === 'Pal' || mmddyyyy === 'Pal' || yyyymmdd === 'Pal' || ddmmyy === 'Pal' || mmddyy === 'Pal' || yymmdd === 'Pal') {
      setPalindrome('Palindrome');
    }
    else {
      setPalindrome('Not a palindrome');
    }

  }

  return (
    <div>
      <center>
        <h1>Palindrome Birthday </h1>
        <form>
          <label> Enter your birthday </label><br />
          <input required type="date" onChange={(e) => setDate(e.target.value)} /> <br />
          <button onClick={handleSubmit}> Show </button>
        </form>
        <div hidden={palindrome === undefined ? true : false}>
          {
            palindrome
          }
        </div>
      </center>
    </div>
  );
}

export default App;
