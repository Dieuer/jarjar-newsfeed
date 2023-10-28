import React, { memo, useState } from 'react'

type Comment = {
    text: string;
}

type TCommentList = {
    comment: Comment;
}
export function ViewComment({ comment }: TCommentList) {

    return (
        <li className='view-comment small'>
            {comment.text}
        </li>
    )
}

export const MemoizedViewComment = React.memo(ViewComment)
