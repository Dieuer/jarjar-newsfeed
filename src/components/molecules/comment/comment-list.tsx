import React from 'react'
import { MemoizedAddComment } from './add-comment';
import { MemoizedViewComment } from '../../organisms/view-comment';
import { Comment } from '../../../datatypes/datatypes';
import { MemoizedBodyContent } from '../../atoms/container/body-content';

type TCommentList = {
    comments: Comment[];
    onAddComment: (comment: string) => void;
    onCommentWow: (commentId: string) => void;
    onCommentAngry: (commentId: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export function CommentList({ onAddComment, onCommentWow, onCommentAngry, comments, className }: TCommentList) {

    return (

        <MemoizedBodyContent className='comment-container'>
            <MemoizedAddComment onSubmit={onAddComment} />

            <div className={`comment-stream ${className ? className : ''}`}>
                {comments.map((comment, index) => (
                    <MemoizedViewComment
                        key={index}
                        comment={comment}
                        onUpdateWow={() => onCommentWow(comment.id)}
                        onUpdateAngry={() => onCommentAngry(comment.id)}
                    />
                ))}
            </div>
        </MemoizedBodyContent>
    )
}

export const MemoizedCommentList = React.memo(CommentList)