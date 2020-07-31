import React, {Component, useState} from 'react';

// Froms
function Forms() {
  const [num, setNum] = useState(0);
  const [sum, setSum] = useState(0);
  function handleChange(e) {
    setNum(e.target.value);
  }
  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }
  return <form onSubmit={handleSubmit}>
    <input type="number" value={num} onChange={handleChange}/>
    <button type="submit" value="Add">Click</button>
    <p>Sum is {sum}</p>
  </form>;
}
class Form extends Component {
    render() { return <Forms/>; }
}
export default Form;

// Froms
// function Form() {
//   const [num, setNum] = useState(0);
//   const [sum, setSum] = useState(0);
//   function handleChange(e) {
//     setNum(e.target.value);
//   }
//   function handleSubmit(e) {
//     setSum(sum + Number(num));
//     e.preventDefault();
//   }
//   return <form onSubmit={handleSubmit}>
//     <input type="number" value={num} onChange={handleChange}/>
//     <button type="submit" value="Add">Click</button>
//     <p>Sum is {sum}</p>
//   </form>;
// }
// ReactDOM.render(
//   <Form/>,document.getElementById('root')
// );