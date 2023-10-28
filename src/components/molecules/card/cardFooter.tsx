import React, { useState } from "react";
import { MemoizedCommentList } from "../comment/comment-list";
import { Update } from '../../../datatypes/datatypes';
import { MemoizedReactUpdate } from "../update/react-update";
import './cardFooter.css'

type TCardFooter = {
    update: Update;
    onAddComment: (comment: string) => void
    onUpdateLike: () => void;
    onUpdateDislike: () => void;
}

function CardFooter({ update, onAddComment, onUpdateLike, onUpdateDislike }: TCardFooter) {

    const [toggleComment, setToggleComment] = useState<boolean>(false);

    const handleToggleShowComment = () => {
        setToggleComment(!toggleComment);
    }

    return (
        <div className='card-footer'>
            <button onClick={handleToggleShowComment}>Toggle Comments</button>

            <MemoizedReactUpdate onUpdateLike={onUpdateLike} onUpdateDislike={onUpdateDislike} update={update} />

            {toggleComment && <MemoizedCommentList onComment={onAddComment} comments={update.comments} />}

        </div>
    );
}

export const MemoizedCardFooter = React.memo(CardFooter);
