import React from "react";

type TUserNameProps = {
    date: Date;
    className?: string;
    style?: React.CSSProperties;
}

export function LocalDate({ date, className, style }: TUserNameProps) {
    return (
        <p className={`local-date ${className ? className : ''}`} style={style}>
            {date.toLocaleString()}
        </p>
    );
}

export const MemoizedLocalDate = React.memo(LocalDate);
