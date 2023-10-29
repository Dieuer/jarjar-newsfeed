import React from "react";

import './text-button.css'

type TCardBodyProps = {
    onClick: () => void;
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export function TextButton({ onClick, text, className, style }: TCardBodyProps) {
    return (
        <button className={`text-button ${className ? className : ''}`} onClick={onClick} style={style}>
            {text}
        </button>
    );
}

export const MemoizedTextButton = React.memo(TextButton)