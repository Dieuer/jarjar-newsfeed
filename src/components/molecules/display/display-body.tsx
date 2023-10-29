import React from "react";
import { MemoizedCardText } from "../../atoms/container/text";
import { MemoizedLocalDate } from "../../atoms/date/local-date";
import { MemoizedBodyContent } from "../../atoms/container/body-content";

type TDisplayBodyProps = {
    text: string;
    date: Date;
    className?: string;
    style?: React.CSSProperties;
}

export function DisplayBody({
    text,
    date,
    className,
    style,
}: TDisplayBodyProps) {
    return (
        <MemoizedBodyContent className={`display-body-content ${className ? className : ''}`} style={style}>
            <MemoizedCardText text={text} />
            <MemoizedLocalDate date={date} />
        </MemoizedBodyContent>
    );
}

export const MemoizedDisplayBody = React.memo(DisplayBody);
