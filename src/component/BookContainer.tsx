import React, {useState} from 'react'
import {buyBook} from '../redux';
import {connect} from 'react-redux';

function BookContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1 id='titleBook'>Book Component</h1>
            <h2 id='noOfBook'>Number of Books : {props.numberOfBooks}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={() => props.buyBook(number)}>Buy {number} Book</button>
        </div> 
    )
}

const mapStateOfProps = (state) => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        buyBook: function(number) {
            dispatch(buyBook(number));
        }
    }
}
export default connect(mapStateOfProps, mapDispatchtoProps)(BookContainer);