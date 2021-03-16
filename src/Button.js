import React from "react"

function Button(props){
    return(
        <div>
            <button onClick={props.handleClick} value={props.value}>{props.symbol}</button>
        </div>
    )
}

export default Button