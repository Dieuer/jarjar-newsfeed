import React from "react";
import { MemoizedUserImage } from "../../atoms/user/image";
import { MemoizedUserName } from "../../atoms/user/name";

type DisplayMetatdataProps = {
    children?: React.ReactNode;
    image: string;
    alt: string;
    firstname: string;
    lastname: string;
    className?: string;
    style?: React.CSSProperties;

}

export function DisplayMetatdata({ children, image, alt, firstname, lastname, className, style }: DisplayMetatdataProps) {

    return (

        <div className={`metadata ${className ? className : ''}`} style={style} >
            <MemoizedUserImage className={`user-image ${className ? className : ''}`} src={image} alt={alt} style={style} />
            <div className={`user-data ${className ? className : ''}`}>
                <MemoizedUserName firstname={firstname} lastname={lastname} />
                {children}
            </div>
        </div>
    )
}

export const MemoizedDisplayMetadata = React.memo(DisplayMetatdata)

