import React, { memo, useState } from 'react'
import { MemoizedAddComment } from './add-comment';
import { MemoizedViewComment } from '../molecules/view-comment';

type Comment = {
    text: string;
}

type TCommentList = {
    comments: Comment[];
    onComment: (comment: string) => void;
}
export function CommentList({ onComment, comments }: TCommentList) {

    return (
        <div className='jar-jar'>
            <MemoizedAddComment onSubmit={onComment} />
            <ul>
                {comments.map((comment, index) => (
                    <MemoizedViewComment key={index} comment={comment} />
                ))}
            </ul>
        </div>
    )
}

export const MemoizedCommentList = React.memo(CommentList)
