import React from "react";

const PersonForm = ({handleSubmit, handleChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input type="text" onChange={handleChange} name="name" />
            </div>
            <div>
                phone: <input type="text" onChange={handleChange} name="phone" />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm