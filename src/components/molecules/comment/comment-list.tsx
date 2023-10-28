import React from 'react'
import { MemoizedAddComment } from './add-comment';
import { MemoizedViewComment } from './view-comment';
import { Comment } from '../../../datatypes/datatypes';

type TCommentList = {
    comments: Comment[];
    onComment: (comment: string) => void;
    className?: string;
}
export function CommentList({ onComment, comments, className }: TCommentList) {

    return (
        <div className={className}>

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
