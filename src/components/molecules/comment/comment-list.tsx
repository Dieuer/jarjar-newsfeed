import React from 'react'
import { MemoizedAddComment } from './add-comment';
import { MemoizedViewComment } from '../../organisms/view-comment';
import { Comment } from '../../../datatypes/datatypes';
import { MemoizedBodyContent } from '../../atoms/container/body-content';

type CommentListProps = {
    comments: Comment[];
    onAddComment: (comment: string) => void;
    onCommentWow: (commentId: string) => void;
    onCommentAngry: (commentId: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export function CommentList({ onAddComment, onCommentWow, onCommentAngry, comments, className }: CommentListProps) {

    return (
        <MemoizedBodyContent className='comment-container'>
            <MemoizedAddComment onSubmit={onAddComment} />

            <div className={`comment-stream ${className ? className : ''}`}>
                {comments.map((comment) => (
                    <MemoizedViewComment
                        key={comment.id}
                        {...comment}
                        onCommentWow={() => onCommentWow(comment.id)}
                        onCommentAngry={() => onCommentAngry(comment.id)}
                    />
                ))}
            </div>
        </MemoizedBodyContent>
    )
}

export const MemoizedCommentList = React.memo(CommentList)