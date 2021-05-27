import React from 'react'

const Input = ({ id, label }) => {
    return (
        <div>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">{label}</label>
                <input type="email" className="form-control" id={id} aria-describedby="emailHelp" />
            </div>
        </div>
    )
}

export default Input
