import React, { useState } from "react";
import "./styles.css";

var changeAmount = [2000, 500, 100, 20, 10, 5, 1];
var notes = new Array(7);

export default function App() {
  var [bill, setBill] = useState("");
  var [cashGiven, setCashGiven] = useState("");
  var [final, setFinal] = useState([]);
  var [exceptions, setExceptions] = useState("");

  function billAmount(event) {
    bill = event.target.value;
    setBill(bill);
  }
  function givenAmount(event) {
    cashGiven = event.target.value;
    setCashGiven(cashGiven);
  }

  return (
    <div className="App">
      <main>
        <div>
          <input onChange={billAmount} className="bil-amt" />
          <h2>Bill Amount: {bill}</h2>
          <div id="myDIV">
            <input onChange={givenAmount} className="bil-amt" />
            <h2>Amount given :{cashGiven} </h2>
          </div>
          <div>
            <button
              onClick={() => {
                notes = new Array(7);
                setFinal(new Array(7));
                if (cashGiven - bill <= 0) {
                  exceptions = "Enter Properly";
                  setExceptions(exceptions);
                  return;
                }
                var amount = cashGiven - bill;
                for (var i = 0; i <= changeAmount.length; i++) {
                  if (amount / changeAmount[i] >= 1) {
                    notes[i] = Math.floor(amount / changeAmount[i]);
                    amount = amount % changeAmount[i];
                    setFinal((notes) => [...notes], notes[i]);
                    setFinal((final) => [...final], final[i]);
                  }
                  setExceptions("You should pay " + (cashGiven - bill) + "rs");
                }
              }}
            >
              Calculate
            </button>
            <table id="tables">
              <tr>
                <th>Note</th>
                <th>2000</th>
                <th>500</th>
                <th>100</th>
                <th>50</th>
                <th>20</th>
                <th>10</th>
                <th>1</th>
              </tr>
              <tr>
                <th>No.of Notes</th>
                <th>{notes[0]}</th>
                <th>{notes[1]}</th>
                <th>{notes[2]}</th>
                <th>{notes[3]}</th>
                <th>{notes[4]}</th>
                <th>{notes[5]}</th>
                <th>{notes[6]}</th>
              </tr>
              <h1>{final[0]}</h1>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
