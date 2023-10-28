import React from "react";

export function Button({ onClick, text, className }) {
    return (
        <button className={`btn btn-primary btn-sm pull-right ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}

export const MemoizedButton = React.memo(Button)