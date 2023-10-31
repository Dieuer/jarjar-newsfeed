import React from "react";

type CardFooterProps = {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export function CardText({ text, className, style }: CardFooterProps) {
    return (
        <div className={`container-text ${className ? className : ''}`} style={style}>
            {text}
        </div>
    );
}

export const MemoizedCardText = React.memo(CardText);
