import React from "react"
import "./OperatorButton.css"

function OperatorButton(props){
    return(
        <div>
            <button className="operatorButton" onClick={props.handleClick} value={props.value}>{props.symbol}</button>
        </div>
    )
}
export default OperatorButton