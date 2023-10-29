import React from "react";

type TFooterContentProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function FooterContent({ children, className, style }: TFooterContentProps) {
    return (
        <div className={`container-footer ${className ? className : ''}`} style={style}>
            {children}
        </div>
    );
}

export const MemoizedFooterContent = React.memo(FooterContent);
