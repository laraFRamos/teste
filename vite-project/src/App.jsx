import React, { useState } from "react";

function Calculator() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [operator, setOperator] = useState("");
  const [res, setRes] = useState("");

  function addNumber(number) {
    if (res !== "" && operator === "") {
      erase();
    }

    if (operator === "") {
      setN1((prevN1) => prevN1 + number);
    } else if (operator !== "" && n2 === "") {
      setN2(number);
    } else {
      setN2((prevN2) => prevN2 + number);
    }
  }

  function erase() {
    setN1("");
    setN2("");
    setOperator("");
    setRes("");
  }

  function addOperator(operatorSelected) {
    if (n1 !== "") {
      setOperator(operatorSelected);
    }
  }

  function calculate(event) {
    event.preventDefault();

    if (n1 !== "" && n2 !== "" && operator !== "") {
      let result;
      switch (operator) {
        case "+":
          result = parseInt(n1) + parseInt(n2);
          break;

        case "-":
          result = parseInt(n1) - parseInt(n2);
          break;

        case "*":
          result = parseInt(n1) * parseInt(n2);
          break;

        case "/":
          result = parseInt(n1) / parseInt(n2);
          break;

        case "^":
          result = Math.pow(parseInt(n1), parseInt(n2));
          break;

        default:
          break;
      }

      setRes(result.toFixed(2));
      setN1("" + result);
      setN2("");
      setOperator("");
    }
  }

  return (
    <div>
      <h2>Calculator</h2>
      <form onSubmit={calculate}>
        <input type="text" id="display" value={res} disabled />
        <br />
        <button onClick={() => addNumber("1")}>1</button>
        <button onClick={() => addNumber("2")}>2</button>
        <button onClick={() => addNumber("3")}>3</button>
        <br />
        <button onClick={() => addNumber("4")}>4</button>
        <button onClick={() => addNumber("5")}>5</button>
        <button onClick={() => addNumber("6")}>6</button>
        <br />
        <button onClick={() => addNumber("7")}>7</button>
        <button onClick={() => addNumber("8")}>8</button>
        <button onClick={() => addNumber("9")}>9</button>
        <br />
        <button onClick={() => addNumber("0")}>0</button>
        <br />
        <button onClick={() => addOperator("+")}>+</button>
        <button onClick={() => addOperator("-")}>-</button>
        <button onClick={() => addOperator("*")}>*</button>
        <br />
        <button onClick={() => addOperator("/")}>/</button>
        <button onClick={() => addOperator("^")}>^</button>
        <br />
        <button type="submit">Calculate</button>
        <button type="button" onClick={erase}>Clear</button>
      </form>
    </div>
  );
}

export default Calculator;
