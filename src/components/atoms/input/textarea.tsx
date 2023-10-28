import React from "react";

export function Textarea({ value, onChange, placeholder, className }) {
    return (
        <textarea
            className={`form-control ${className}`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}></textarea>
    );
}

export const MemoizedTextarea = React.memo(Textarea)