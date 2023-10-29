import React, { memo, useState } from 'react'
import { Comment } from '../../datatypes/datatypes';


import './view-comment.css'
import { MemoizedDisplayMetadata } from '../molecules/display/display-metadata';
import { MemoizedDisplayBody } from '../molecules/display/display-body';
import { MemoizedBodyContent } from '../atoms/container/body-content';


type TViewComment = {
    comment: Comment;
    className?: string;
    style?: React.CSSProperties;
}
export function ViewComment({ comment, className, style }: TViewComment) {

    return (
        <MemoizedBodyContent className={`view-comment ${className ? className : ''}`} style={style}>
            <MemoizedDisplayMetadata
                image={comment.author.image}
                alt={comment.author.firstname + comment.author.lastname}
                firstname={comment.author.firstname}
                lastname={comment.author.lastname}
                className='comment-data'
            />

            <MemoizedDisplayBody
                text={comment.text}
                date={comment.createdDate}
            />

        </MemoizedBodyContent >



    )
}


export const MemoizedViewComment = React.memo(ViewComment)
