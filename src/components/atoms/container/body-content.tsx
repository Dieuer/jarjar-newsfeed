import React from "react";

type TBodyContentProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function BodyContent({ children, className, style }: TBodyContentProps) {
    return (
        <div className={`container-body ${className ? className : ''}`} style={style}>
            {children}
        </div>
    );
}

export const MemoizedBodyContent = React.memo(BodyContent)


