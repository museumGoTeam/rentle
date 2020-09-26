import React from 'react'
import TextField from '@material-ui/core/TextField'


type NumberInputProps = {
    variant?: "outlined" | "filled" | "standard",
    label: string, 
    name: string,
    value: string | number
    onChange: (value: number | string, name: string) => void
}

const NumberInput: React.FC<NumberInputProps> = ({variant = "outlined", label, name, value, onChange}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            onChange(e.target.value, name)
        } else {
            onChange(parseFloat(e.target.value), name)
        }
    }

    return (
        <TextField type="number"  variant="outlined" name={name} label={label} value={value} onChange={handleChange} />
    )
}

export default NumberInput
