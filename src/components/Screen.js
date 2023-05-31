import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);
  
  const checkLengthAndValue = (value) => {
    const strValue = value.toString();

    if (value > 999999999 || value < 0) {
      return "ERROR***";
    }
    if (strValue.length > 9) {
      return strValue.substring(0, 9);
    }
    return strValue;
  }

  const displayValue = calc.num ? checkLengthAndValue(calc.num) : checkLengthAndValue(calc.res);

  return (
    <Textfit className="screen" max={70} mode="single">{displayValue}</Textfit>
  )
}

export default Screen;
