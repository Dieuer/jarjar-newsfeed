import React from "react";

type TCardFooterProps = {
    title: string;
    className?: string;
    style?: React.CSSProperties;
}

export function CardTitle({ title, className, style }: TCardFooterProps) {
    return (
        <div className={`title ${className ? className : ''}`} style={style}>
            {title}
        </div>
    );
}

export const MemoizedCardTitle = React.memo(CardTitle);
