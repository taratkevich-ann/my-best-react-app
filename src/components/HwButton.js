import React from 'react'
import {connect} from 'react-redux'

import {actionRedBg, actionGreenBg, actionBlueBg} from "../actions/hwButton";

const HwButton = ({actionRedBg, actionGreenBg, actionBlueBg, background}) => {
    return (
        <div>
            <h2>Homework buttons</h2>
            <button onClick={actionRedBg} style={{background: background, width: '100px'}}>Red</button>
            <button onClick={actionGreenBg} style={{background: background, width: '100px'}}>Green</button>
            <button onClick={actionBlueBg} style={{background: background, width: '100px'}}>Blue</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    background: state.buttonState.background
})

const mapDispatchToProps = {
    actionRedBg,
    actionBlueBg,
    actionGreenBg
}

export const HwButtonContainer = connect(mapStateToProps, mapDispatchToProps)(HwButton)