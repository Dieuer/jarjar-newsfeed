import React from 'react'
import { MemoizedAddComment } from './add-comment';
import { MemoizedViewComment } from '../../organisms/view-comment';
import { Comment } from '../../../datatypes/datatypes';
import { MemoizedBodyContent } from '../../atoms/container/body-content';

type TCommentList = {
    comments: Comment[];
    onComment: (comment: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export function CommentList({ onComment, comments, className }: TCommentList) {

    return (

        <MemoizedBodyContent className='comment-container'>
            <MemoizedAddComment onSubmit={onComment} />

            <div className={`comment-stream ${className ? className : ''}`}>
                {comments.map((comment, index) => (
                    <MemoizedViewComment key={index} comment={comment} />
                ))}
            </div>
        </MemoizedBodyContent>
    )
}

export const MemoizedCommentList = React.memo(CommentList)