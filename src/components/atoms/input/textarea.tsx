import React from "react";

type TTextArea = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
}

export function Textarea({ value, onChange, placeholder, className, style }: TTextArea) {
    return (
        <textarea
            className={`text-area form-control ${className ? className : ''}`} style={style}
            value={value}
            placeholder={placeholder}
            onChange={onChange}>
        </textarea>
    );
}

export const MemoizedTextarea = React.memo(Textarea)
