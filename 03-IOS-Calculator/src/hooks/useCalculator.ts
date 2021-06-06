import {useState, useRef} from 'react';
import {operators} from '../models';

export const useCalculator = () => {
  const [prevResult, setPrevResult] = useState<string>('');
  const [result, setResult] = useState('0');
  const operation = useRef<string>();

  const clean = () => {
    setResult('0');
    setPrevResult('');
  };

  const setResultAsPrevResult = () => {
    setPrevResult(result);
    setResult('0');
  };

  const del = () =>
    setResult(result => {
      if (result.length === 1) return '0';

      if (result.length === 2 && result[0] === '-') return '0';

      return result.slice(0, -1);
    });

  const addNumber = (char: string) =>
    setResult(result => {
      if (result === '0') return char;

      return result + char;
    });

  const addPoint = () =>
    setResult(result => {
      if (result.includes('.')) return result;

      return result + '.';
    });

  const addZero = () =>
    setResult(result => {
      if (result === '0') return result;

      return result + '0';
    });

  const switchSign = () =>
    setResult(result => {
      if (result[0] === '-') return result.replace('-', '');

      return '-' + result;
    });

  const calculate = () => {
    const firstNum = parseFloat(prevResult);
    const secondNum = parseFloat(result);

    switch (operation.current) {
      case operators.sum:
        return firstNum + secondNum;
      case operators.substraction:
        return firstNum - secondNum;
      case operators.multiplication:
        return firstNum * secondNum;
      case operators.division:
        return firstNum / secondNum;
    }
  };

  const initOperation = (op: string) => {
    if (prevResult) {
      setPrevResult(calculate()!.toString());
      setResult('0');
    } else setResultAsPrevResult();

    operation.current = op;
  };

  const equal = () => {
    setResult((calculate()! || 0).toString());
    setPrevResult('');
  };

  return {
    equal,
    initOperation,
    switchSign,
    addZero,
    addPoint,
    del,
    prevResult,
    addNumber,
    clean,
    result
  };
};
