import React from 'react'
import Input from './elements/Input'
import Select from './elements/Select';
import Table from './elements/Table'

const Elements = ({ field: { id, type, label, options, details } }) => {

    switch (type) {
        case 'integer':
            return (<Input
                id={id}
                label={label}
            />)
        case 'choice':
            return (<Select
                id={id}
                label={label}
                options={options}
            />)
        case 'string':
            return (<Input
                id={id}
                label={label}
            />)
        case 'list':
            return (<Table
                id={id}
                label={label}
                details={details}
            />)
        default:
            return null;
    }
}

export default Elements
