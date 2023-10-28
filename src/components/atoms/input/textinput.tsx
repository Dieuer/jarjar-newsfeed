import React from "react";

export function TextInput({ value, onChange, placeholder, className }) {
    return (
        <input
            type="text" 
            className={`form-control ${className}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export const MemoizedTextInput = React.memo(TextInput);
