import React from "react";

type TextInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    className?: string;
    style?: React.CSSProperties;
}

export function TextInput({ value, onChange, placeholder, className }: TextInputProps) {
    return (
        <input
            type="text"
            className={` text-input form-control ${className ? className : ''}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export const MemoizedTextInput = React.memo(TextInput);