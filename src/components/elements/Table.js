import React from 'react'

const Table = ({ id, label, details }) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    {details.map((detail, i) =>
                        <th scope="col" key={i}>{detail.label}</th>
                    )}
                </tr>
            </thead>
        </table>
    )
}

export default Table
