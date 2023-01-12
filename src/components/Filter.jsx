import React, {useState} from "react";

const Filter = ({onFilterTrigger}) => {
    const filteredHandler = (e) => {
        onFilterTrigger(e.target.value)
    }

    return (
        <div>
            filter shown with: <input type="text" name="search" onChange={filteredHandler} />
        </div>
    )
}

export default Filter