import React from "react";
import { connect } from "react-redux";

import { actionDec, actionInc } from "../actions/count";

const Counter = ({ actionInc, number, actionDec }) => {
    return (
        <div>
            <button onClick={actionInc}>Inc</button>
            <span>{number}</span>
            <button onClick={actionDec}>Dec</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    number: state.countState.count
});

const mapDispatchToProps = {
    actionInc: actionInc,
    actionDec
};

export const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);
