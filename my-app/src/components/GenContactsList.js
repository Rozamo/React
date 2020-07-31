import React from 'react';
import { connect } from 'react-redux';

function GenContactsList(props) {
    const contactsList = props.contactsList.map((value, index) =>
        <li key={index}>{value}</li>
        );
    return <ul>{contactsList}</ul>;
}
function mapStateToProps(state) {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(GenContactsList);