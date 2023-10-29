import React from "react";

type TContainerProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function Container({ children, className, style }: TContainerProps) {
    return (
        <div className={`container ${className ? className : ''}`} style={style}>
            {children}
        </div>
    );
}

export const MemoizedContainer = React.memo(Container);
