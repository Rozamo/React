import React from 'react';

function Stopwatch(props) {
    if (props.obj.isOn) {
        props.obj.counter++;
        var hours = Math.floor(props.obj.counter / 3600);
        var mins = Math.floor((props.obj.counter - (hours * 3600)) / 60);
        var secs = (props.obj.counter - (hours * 3600)) % 60;
        return(
            <div>
                <h1>Time: {hours < 10 ? "0" + hours : hours}:{mins < 10 ? "0" + mins : mins}:{secs < 10 ? "0" + secs : secs} </h1>
                <button onClick={() => {props.obj.isOn = false}}>Stop</button>
                <button onClick={() => {props.obj.counter = 0; props.obj.isOn = false}}>Reset</button>
            </div>
        );
    }
    else 
    {
        hours = Math.floor(props.obj.counter / 3600);
        mins = Math.floor((props.obj.counter - (hours * 3600)) / 60);
        secs = (props.obj.counter - (hours * 3600)) % 60;
        return(
            <div>
                <h1>Time: {hours < 10 ? "0" + hours : hours}:{mins < 10 ? "0" + mins : mins}:{secs < 10 ? "0" + secs : secs} </h1>
                <button onClick={() => {props.obj.isOn = true}}>Start</button>
                <button onClick={() => {props.obj.counter = 0}}>Reset</button>
            </div>
        );
    }
}
export default Stopwatch;

// var counter = 0;
// var isOn = false;
// function show(){
//   function pp() {
//     if (isOn) {
//       counter++;
//       ReactDOM.render(
//         <div>
//           <h1>Time: {counter} s</h1>
//           <button onClick={() => {isOn = false}}>Stop</button>
//           <button onClick={() => {counter = 0; isOn = false}}>Reset</button>
//         </div>, 
//         document.getElementById('root')
//       );
//     }
//     else 
//     {
//       ReactDOM.render(
//         <div>
//           <h1>Time: {counter} s</h1>
//           <button onClick={() => {isOn = true}}>Start</button>
//           <button onClick={() => {counter = 0}}>Reset</button>
//         </div>, 
//         document.getElementById('root')
//       );
//     }
//   }
//   setInterval(pp, 1000);
// }
// show();
