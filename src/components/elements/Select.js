import React from 'react'

const Select = ({ id, label, options }) => {
    return (
        <>
            <label for="exampleInputEmail1" className="form-label">{label}</label>
            <select className="form-select" aria-label="Default select example" id={id}>
                <option >Click me!</option>
                {options.length > 0 && options.map((op, i) =>
                    <option value={op} key={i}>{op}</option>
                )}
            </select>
        </>
    )
}

export default Select
