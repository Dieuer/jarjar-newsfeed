import React from "react";

type UserImageProps = {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
}

export function UserImage({ src, alt, className, style }: UserImageProps) {
    return (
        <img src={src} alt={alt} className={`user-image ${className ? className : ''}`} style={style} />
    );
}

export const MemoizedUserImage = React.memo(UserImage);
