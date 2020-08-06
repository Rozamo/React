import React, { useState } from 'react';
import './Calculator.css';

var started = false;
function Calculator() {
    const [isNegative, setIsNegative] = useState(0);
    const [M, setM] = useState(0);
    const [dec, setDec] = useState(-1);
    const [prev_num, setPrev_Num] = useState(0);
    const [curr_num, setCurr_Num] = useState(0);
    const [action, setAction] = useState('=');
    function swap() {
        var temp = prev_num;
        setPrev_Num(curr_num);
        setCurr_Num(temp);
    }
    function orhandleNumClick(e, num) {
        if (action === '=' && !started) {
            setPrev_Num(0);
            setCurr_Num(isNegative ? -num : num);
            started = true;
        }
        else 
            setCurr_Num(isNegative ? curr_num * 10 - num : curr_num * 10 + num);
    }
    function countDecimals(value) {
        if (Math.floor(value) !== value)
            return value.toString().split(".")[1].length || 0;
        return 0;
    }
    function handleNumClick(e, num) {
        if (action === '=' && !started) {
            setPrev_Num(0);
            setCurr_Num(isNegative ? -num : num);
            started = true;
        }
        else {
            if (dec >= 0) {
                setDec(dec + 1);
                var dnum = isNegative ? curr_num - num * Math.pow(10, -(dec + 1)) : curr_num + num * Math.pow(10, -(dec + 1));
                setCurr_Num(Number(dnum.toFixed(dec + 1)));
            }
            else 
                setCurr_Num(isNegative ? curr_num * 10 - num : curr_num * 10 + num);
        }
    }
    function handleClear(e, new_action) {
        if (new_action === 'C') {
            setDec(-1);
            setIsNegative(false);
            setCurr_Num(0);
        }
        else if (dec === 0)
            setDec(-1);
        else if (dec >= 1) {
            var dnum = Math.trunc(curr_num * Math.pow(10, (dec - 1))) * Math.pow(10, -dec + 1);
            var ddnum = dnum.toFixed(dec - 1);
            setCurr_Num(Number(ddnum));
            setDec(dec - 1);
            console.log(ddnum, dnum);
        }
        else 
            setCurr_Num(Math.floor(curr_num / 10));
    }
    function handleMClick(e) {
        if (curr_num === 0) {
            setCurr_Num(M);
        }
        else if (curr_num !== 0)
            setM(curr_num);
    }
    function handleActionClick(e, new_action) {
        if (action === '=') {
            if (new_action !== '=')
                swap();
        }
        else {
            if (new_action !== '=') {
                switch(action) {
                    case '+':
                        setPrev_Num(prev_num + curr_num);
                        setCurr_Num(0);
                        break;
                    case '-':
                        setPrev_Num(prev_num - curr_num);
                        setCurr_Num(0);
                        break;
                    case 'x':
                        if (countDecimals(prev_num) === 0 && countDecimals(curr_num) === 0)
                            setPrev_Num(prev_num * curr_num);
                        else 
                            setCurr_Num(Number((prev_num * curr_num).toFixed(Math.max(countDecimals(prev_num), countDecimals(curr_num)))));
                        setCurr_Num(0);
                        break;
                    case '÷':
                        setPrev_Num(prev_num / curr_num);
                        setCurr_Num(0);
                        break;
                }
            }
            else {
                switch(action) {
                    case '+':
                        setCurr_Num(prev_num + curr_num);
                        setPrev_Num(0);
                        break;
                    case '-':
                        setCurr_Num(prev_num - curr_num);
                        setPrev_Num(0);
                        break;
                    case 'x':
                        if (countDecimals(prev_num) === 0 && countDecimals(curr_num) === 0)
                            setCurr_Num(prev_num * curr_num);
                        else
                            setCurr_Num(Number((prev_num * curr_num).toFixed(Math.max(countDecimals(prev_num), countDecimals(curr_num)))));
                        setPrev_Num(0);
                        break;
                    case '÷':
                        setCurr_Num(prev_num / curr_num);
                        setPrev_Num(0);
                        break;
                }
                started = false;
            }
        }
        setAction(new_action);
        setIsNegative(false);
        setDec(-1);
    }
    return <div className="container">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br> 
        <input readOnly="readOnly" className="result" value={dec === 0 ? curr_num + "." : (curr_num === 0 ? (isNegative ? "-" : curr_num) : curr_num)}/>
        <table className="buttons">
            <tbody>
                <tr>
                    <td><button type="button" onClick={e => handleClear(e, 'C')}>C</button></td>
                    <td><button type="button" onClick={e => handleClear(e, '<')}>&#8678;</button></td>
                    <td><button type="button" onClick={e => handleActionClick(e, '=')}>=</button></td>
                    <td><button type="button" onClick={e => handleActionClick(e, '÷')}>÷</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><button type="button" onClick={e => handleNumClick(e, 7)}>7</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 8)}>8</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 9)}>9</button></td>
                    <td><button type="button" onClick={e => handleActionClick(e, 'x')}>&#215;</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><button type="button" onClick={e => handleNumClick(e, 4)}>4</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 5)}>5</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 6)}>6</button></td>
                    <td><button type="button" onClick={e => handleActionClick(e, '-')}>&#8722;</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><button type="button" onClick={e => handleNumClick(e, 1)}>1</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 2)}>2</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 3)}>3</button></td>
                    <td><button type="button" onClick={e => handleActionClick(e, '+')}>+</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><button type="button" onClick={() => {setCurr_Num(0); setDec(0);}}>&#8901;</button></td>
                    <td><button type="button" onClick={e => handleNumClick(e, 0)}>0</button></td>
                    <td><button type="button" onClick={() => {setIsNegative(1 - isNegative);}}>-</button></td>
                    <td><button type="button" className="major" onClick={e => handleMClick(e)}>{M === 0 ? "M" : M}</button></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default Calculator;