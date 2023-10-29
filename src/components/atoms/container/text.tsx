import React from "react";

type TCardFooterProps = {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export function CardText({ text, className, style }: TCardFooterProps) {
    return (
        <div className={`container-text ${className ? className : ''}`} style={style}>
            {text}
        </div>
    );
}

export const MemoizedCardText = React.memo(CardText);
