import React, { memo, useState } from 'react'

type TAddComment = {
    onSubmit: (comment: string) => void;
}
export function AddComment({ onSubmit }: TAddComment) {

    const [comment, setUpdate] = useState<string>('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUpdate(event.target.value);
    };

    const handleUpdateSubmit = () => {
        onSubmit(comment)
        setUpdate('')
    }

    return (
        <div>
            <textarea
                className='form-control'
                value={comment}
                onChange={handleCommentChange}
            >
            </textarea>

            <button
                className='btn btn-primary btn-sm pull-right'
                onClick={handleUpdateSubmit}
            >
                Save comment
            </button>
        </div>
    )
}

export const MemoizedAddComment = React.memo(AddComment)
