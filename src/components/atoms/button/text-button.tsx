import React from "react";

import './text-button.css'

type CardBodyProps = {
    onClick: () => void;
    text: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export function TextButton({ onClick, text, disabled, className, style }: CardBodyProps) {
    return (
        <button className={`text-button ${className ? className : ''}`} onClick={onClick} style={style} disabled={disabled}>
            {text}
        </button>
    );
}

export const MemoizedTextButton = React.memo(TextButton)