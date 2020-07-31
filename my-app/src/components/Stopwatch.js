import React from 'react';

function Stopwatch(props) {
    if (props.obj.isOn) {
        props.obj.counter++;
        return(
            <div>
                <h1>Time: {props.obj.counter} s</h1>
                <button onClick={() => {props.obj.isOn = false}}>Stop</button>
                <button onClick={() => {props.obj.counter = 0; props.obj.isOn = false}}>Reset</button>
            </div>
        );
    }
    else 
    {
        return(
            <div>
                <h1>Time: {props.obj.counter} s</h1>
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
