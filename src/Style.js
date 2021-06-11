import styled from "styled-components";

export const CalculatorTitle = styled.h1`
  margin: 0;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 2.8rem;
  color: #fafafa;
`;
export const CalculatorTotal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #252525;
  margin: 0 auto;
`;
export const Calculator = styled.div`
  width: 410px;
  height: 400px;
  background-color: #0b032d;
  margin: 0 auto;
  position: relative;
  border-radius: 8px;
`;
export const Calculation = styled.input.attrs({
  type: "text",
  style: { "text-align": "right" },
})`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
  border: transparent solid;
  border-radius: 8px;
  outline: none;
  font-size: 60px;
  margin: 10px;
  height: 60px;
  width: 380px;
`;
export const CalculationForm = styled.form``;
export const CalculationButton = styled.button`
  display: none;
`;
export const Result = styled.input.attrs({
  type: "number",
})`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
  outline: none;
  border: transparent solid;
  border-radius: 8px;
  text-align: right;
  font-size: 60px;
  margin: 10px;
  height: 60px;
  width: 380px;
`;
export const Keypad = styled.div`
  background-color: #0b032d;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Keys = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
  border: none;
  font-size: 1.8rem;
  font-weight: 500px;
  outline: none;
  border-radius: 8px;
  margin: 6px 5px;
  height: 75px;
  width: 75px;
  background-color: ${(props) => (props.warning ? "red" : "white")};
  color: ${(props) => (props.warning ? "white" : "black")};
`;
