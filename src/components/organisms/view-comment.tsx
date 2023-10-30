import React from 'react'
import { Comment } from '../../datatypes/datatypes';
import './view-comment.css'
import { MemoizedDisplayMetadata } from '../molecules/display/display-metadata';
import { MemoizedBodyContent } from '../atoms/container/body-content';
import { MemoizedCardText } from '../atoms/container/text';
import { MemoizedLocalDate } from '../atoms/date/local-date';
import { MemoizedExpressionReaction } from '../molecules/comment/expression-reaction';


type TViewComment = {
    comment: Comment;
    className?: string;
    style?: React.CSSProperties;
    onUpdateWow: (commentId: string) => void;
    onUpdateAngry: (commentId: string) => void;
}
export function ViewComment({ comment, onUpdateWow, onUpdateAngry, className, style }: TViewComment) {

    return (
        <MemoizedBodyContent className={`view-comment ${className ? className : ''}`} style={style}>
            <MemoizedDisplayMetadata
                image={comment.author.image}
                alt={comment.author.firstname + comment.author.lastname}
                firstname={comment.author.firstname}
                lastname={comment.author.lastname}
                className='comment-data'
            />

            <MemoizedBodyContent>
                <MemoizedCardText text={comment.text} />
                <MemoizedLocalDate date={comment.createdDate} />
            </MemoizedBodyContent>

            <MemoizedExpressionReaction
                comment={comment}
                onCommentWow={onUpdateWow}
                onCommentAngry={onUpdateAngry}
            />

        </MemoizedBodyContent >
    )
}

export const MemoizedViewComment = React.memo(ViewComment)
