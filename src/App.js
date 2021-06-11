import React, { useState, useEffect } from "react";
import {
  CalculatorTotal,
  Calculator,
  Calculation,
  Result,
  Keypad,
  Keys,
  CalculationForm,
  CalculatorTitle,
} from "./Style";

export default function App() {
  const [calc, setcalc] = useState("");
  const [result, setResult] = useState("0");
  if (result === undefined) {
    setResult("0");
  }
  const handleClick = (e) => {
    setcalc(calc.concat(e.target.name));
  };
  const handlekeyPress = (e) => {
    setcalc(calc.concat(e.key));
  };
  const clearAll = () => {
    setcalc("");
    setResult("0");
  };
  const backspace = () => {
    setcalc(calc.slice(0, -1));
  };
  const Calculateeval = () => {
    try {
      const evaluate = eval(calc);
      const strres = String(evaluate);
      setResult(strres);
    } catch (e) {
      setResult("E");
    }
  };
  useEffect(() => {
    if (calc.slice(-1) === "+") {
      return;
    } else if (calc.slice(-1) === "-") {
      return;
    } else if (calc.slice(-1) === "-") {
      return;
    } else if (calc.slice(-1) === "/") {
      return;
    } else if (calc.slice(-1) === "*") {
      return;
    } else {
      Calculateeval();
    }
  }, [calc]);
  return (
    <>
      <CalculatorTotal>
        <CalculatorTitle>Calculator</CalculatorTitle>
        <Calculator>
          <CalculationForm>
            <Calculation
              onChange={Calculateeval}
              value={calc}
              autoFocus="true"
            ></Calculation>
          </CalculationForm>
          <Result readOnly="true" value={result}></Result>
          <Keypad>
            <Keys name="9" onClick={handleClick} onKeyPress={handlekeyPress}>
              9
            </Keys>
            <Keys name="8" onClick={handleClick}>
              8
            </Keys>
            <Keys name="7" onClick={handleClick}>
              7
            </Keys>
            <Keys name="/" onClick={handleClick}>
              &divide;
            </Keys>
            <Keys name="6" onClick={handleClick}>
              6
            </Keys>
            <Keys name="5" onClick={handleClick}>
              5
            </Keys>
            <Keys name="4" onClick={handleClick}>
              4
            </Keys>
            <Keys name="*" onClick={handleClick}>
              &times;
            </Keys>
            <Keys name="3" onClick={handleClick}>
              3
            </Keys>
            <Keys name="2" onClick={handleClick}>
              2
            </Keys>
            <Keys name="1" onClick={handleClick}>
              1
            </Keys>
            <Keys name="-" onClick={handleClick}>
              &ndash;
            </Keys>
            <Keys onClick={clearAll} warning>
              AC
            </Keys>
            <Keys name="0" onClick={handleClick}>
              0
            </Keys>
            <Keys onClick={backspace} warning>
              C
            </Keys>
            <Keys name="+" onClick={handleClick}>
              +
            </Keys>
          </Keypad>
        </Calculator>
      </CalculatorTotal>
    </>
  );
}
