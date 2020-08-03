import React, { useState } from 'react';

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
        if (action === '=') {
            setPrev_Num(0);
            setCurr_Num(num);
        }
        else 
            setCurr_Num(curr_num * 10 + num);
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
                }
            }
        }
        setAction(new_action);
    }
    return <div>
        <div>{curr_num}</div>
        <div>
            <button onClick={e => handleNumClick(e, 1)}>1</button>
            <button onClick={e => handleNumClick(e, 2)}>2</button>
        </div>
        <div>
            <button onClick={e => handleActionClick(e, '+')}>+</button>
            <button onClick={e => handleActionClick(e, '-')}>-</button>
            <button onClick={e => handleActionClick(e, '=')}>=</button>
        </div>
    </div>
}

export default Calculator;