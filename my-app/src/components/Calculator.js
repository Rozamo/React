import React, { useState } from 'react';

var started = false;
function Calculator() {
    const [prev_num, setPrev_Num] = useState(0);
    const [curr_num, setCurr_Num] = useState(0);
    const [action, setAction] = useState('=');
    function swap() {
        var temp = prev_num;
        setPrev_Num(curr_num);
        setCurr_Num(temp);
    }
    function handleNumClick(e, num) {
        if (action === '=' && !started) {
            setPrev_Num(0);
            setCurr_Num(num);
            started = true;
        }
        else 
            setCurr_Num(curr_num * 10 + num);
    }
    function handleClear(e, new_action) {
        if (new_action === 'C')
            setCurr_Num(0);
        else 
            setCurr_Num(Math.floor(curr_num / 10));
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
                        setPrev_Num(prev_num * curr_num);
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
                        setCurr_Num(prev_num * curr_num);
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
    }
    return <div>
        <div>{curr_num}</div>
        <div>
            <button onClick={e => handleClear(e, 'C')}>C</button>
            <button onClick={e => handleClear(e, '<')}>&#60;</button>
            <button onClick={e => handleActionClick(e, '=')}>=</button>
            <button onClick={e => handleActionClick(e, '÷')}>÷</button>
        </div>
        <div>
            <button onClick={e => handleNumClick(e, 7)}>7</button>
            <button onClick={e => handleNumClick(e, 8)}>8</button>
            <button onClick={e => handleNumClick(e, 9)}>9</button>
            <button onClick={e => handleActionClick(e, 'x')}>x</button>
        </div>
        <div>
            <button onClick={e => handleNumClick(e, 4)}>4</button>
            <button onClick={e => handleNumClick(e, 5)}>5</button>
            <button onClick={e => handleNumClick(e, 6)}>6</button>
            <button onClick={e => handleActionClick(e, '-')}>-</button>
        </div>
        <div>
            <button onClick={e => handleNumClick(e, 1)}>1</button>
            <button onClick={e => handleNumClick(e, 2)}>2</button>
            <button onClick={e => handleNumClick(e, 3)}>3</button>
            <button onClick={e => handleActionClick(e, '+')}>+</button>
        </div>
        <div>
            <button onClick={e => handleNumClick(e, 0)}>0</button>
        </div>
    </div>
}

export default Calculator;