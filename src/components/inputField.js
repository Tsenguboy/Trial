import React from "react";

const Input = ({ onClick = {}, labelName = "", large = false, onChange = {}, value = '' }) => {
    if (large) {
        return(
            <div>
                <div className = "input">
                    <span>{labelName}</span>
                </div>
                <div>
                    <textarea className = 'inputLarge' value = {value} onChange={(e) => onChange(e)}/>
                </div>
            </div>
        )
    }
    return(
        <div>
            <div className = "input">
                <span>{labelName}</span>
            </div>
            <div>
                <input className = "inputSmall" value = {value} onChange={(e) => onChange(e)}/>
            </div>
        </div>
    )
}

export default Input