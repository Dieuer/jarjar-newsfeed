import React from 'react'
import { User } from '../../datatypes/datatypes';
import './view-comment.css'
import { MemoizedDisplayMetadata } from '../molecules/display/display-metadata';
import { MemoizedBodyContent } from '../atoms/container/body-content';
import { MemoizedCardText } from '../atoms/container/text';
import { MemoizedLocalDate } from '../atoms/date/local-date';
import { MemoizedExpressionReaction } from '../molecules/comment/expression-reaction';


type ViewCommentProps = {
    id: string;
    author: User
    text: string;
    createdDate: Date;
    className?: string;
    style?: React.CSSProperties;
    onCommentWow: (commentId: string) => void;
    onCommentAngry: (commentId: string) => void;
}
export function ViewComment({ id, author, text, createdDate, onCommentWow, onCommentAngry, className, style }: ViewCommentProps) {

    return (
        <MemoizedBodyContent className={`view-comment ${className ? className : ''}`} style={style}>
            <MemoizedDisplayMetadata
                image={author.image}
                alt={author.firstname + author.lastname}
                firstname={author.firstname}
                lastname={author.lastname}
                className='comment-data'
            />

            <MemoizedBodyContent>
                <MemoizedCardText text={text} />
                <MemoizedLocalDate date={createdDate} />
            </MemoizedBodyContent>

            <MemoizedExpressionReaction
                commentId={id}
                onCommentWow={onCommentWow}
                onCommentAngry={onCommentAngry}
            />

        </MemoizedBodyContent >
    )
}

export const MemoizedViewComment = React.memo(ViewComment)
