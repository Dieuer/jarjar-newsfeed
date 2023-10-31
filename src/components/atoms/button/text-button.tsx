import React from "react";

import './text-button.css'

type CardBodyProps = {
    onClick: () => void;
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export function TextButton({ onClick, text, className, style }: CardBodyProps) {
    return (
        <button className={`text-button ${className ? className : ''}`} onClick={onClick} style={style}>
            {text}
        </button>
    );
}

export const MemoizedTextButton = React.memo(TextButton)