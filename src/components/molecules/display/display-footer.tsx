import React, { useState } from "react";
import { Update } from "../../../datatypes/datatypes";
import { MemoizedFooterContent } from "../../atoms/container/footer-content";
import { MemoizedLikeReaction } from "../update/like-reaction";
import { MemoizedTextButton } from "../../atoms/button/text-button";
import { MemoizedCommentList } from "../comment/comment-list";

import './display-footer.css';

type TDisplayFooter = {
    update: Update;
    onAddComment: (comment: string) => void;
    onUpdateLike: (updateId: string) => void;
    onUpdateDislike: (updateId: string) => void;
    className?: string;
    style?: React.CSSProperties;
}

export function DisplayFooter({ update, onAddComment, onUpdateLike, onUpdateDislike, className, style }: TDisplayFooter) {

    const [toggleComment, setToggleComment] = useState<boolean>(false);

    const handleToggleShowComment = () => {
        setToggleComment(!toggleComment);
    }
    return (
        <MemoizedFooterContent className={`display-footer ${className ? className : ''}`} style={style}>
            <MemoizedTextButton onClick={handleToggleShowComment} text={"View comments"} />
            <MemoizedLikeReaction onUpdateLike={onUpdateLike} onUpdateDislike={onUpdateDislike} update={update} />

            {toggleComment && <MemoizedCommentList onComment={onAddComment} comments={update.comments} />}
        </MemoizedFooterContent >
    );
}

export const MemoizedDisplayFooter = React.memo(DisplayFooter);