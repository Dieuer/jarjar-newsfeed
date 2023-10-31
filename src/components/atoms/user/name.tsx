import React from "react";

type UserNameProps = {
    firstname: string;
    lastname: string;
    className?: string;
    style?: React.CSSProperties;
}

export function UserName({ firstname, lastname, className, style }: UserNameProps) {
    return (
        <p className={`user-name ${className ? className : ''}`} style={style}>{firstname} {lastname}</p>
    );
}

export const MemoizedUserName = React.memo(UserName);
