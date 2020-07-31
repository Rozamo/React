import React, {Component} from 'react';

// Sending many props at once
function Item(props) {
  return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> ${props.price}
  </div>;
}
class ManyProps extends Component {
    render () {
        return <div>
                <Item name="Cheese" price="4.99" />
                <Item name="Bread" price="1.5" />
                <Item name="Ice cream" price="24" />
              </div>;
    }
}
export default ManyProps;

// Goes to index.js
// Sending many props at once
// function Item(props) {
//   return (<div className="item">
//     <b>Name:</b> {props.name} <br />
//     <b>Price:</b> ${props.price}
//   </div>);
// }
// ReactDOM.render(
//   <div>
//     <Item name="Cheese" price="4.99" />
//     <Item name="Bread" price="1.5" />
//     <Item name="Ice cream" price="24" />
//   </div>, 
//   document.getElementById('root')
// );