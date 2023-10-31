import React from "react";

type CardFooterProps = {
    title: string;
    className?: string;
    style?: React.CSSProperties;
}

export function CardTitle({ title, className, style }: CardFooterProps) {
    return (
        <div className={`title ${className ? className : ''}`} style={style}>
            {title}
        </div>
    );
}

export const MemoizedCardTitle = React.memo(CardTitle);
