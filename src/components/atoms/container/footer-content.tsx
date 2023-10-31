import React from "react";

type FooterContentProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export function FooterContent({ children, className, style }: FooterContentProps) {
    return (
        <div className={`container-footer ${className ? className : ''}`} style={style}>
            {children}
        </div>
    );
}

export const MemoizedFooterContent = React.memo(FooterContent);
