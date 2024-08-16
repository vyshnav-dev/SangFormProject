import React from 'react'
import { TextField } from '@mui/material'

export default function Input1({ label, type, value, onChange,inputProps,mandatory }) {
  return (
    <TextField
      margin="normal"
      size="small"
      id="search1"
      value={type === 'date' ? value || '' : value || ''}
      type={type}
      label={label}
      inputProps={inputProps}
      autoComplete="off"
      required={mandatory}
      autoFocus
      onChange={onChange}
      sx={{
        width: 250, // Adjust the width as needed
        "& .MuiInputBase-root": {
          height: 30, // Adjust the height of the input area
        },
        "& .MuiInputLabel-root": {
          transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
        },
        "& .MuiInputBase-input": {
          fontSize: "0.75rem", // Adjust the font size of the input text
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor", // Keeps the current border color
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor", // Optional: Keeps the border color on hover
        },
      }}
    />
  )
}


