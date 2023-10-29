import React, { memo, useState } from 'react'
import { MemoizedTextButton } from '../../atoms/button/text-button';
import { MemoizedTextarea } from '../../atoms/input/textarea';

type TAddComment = {
    onSubmit: (comment: string) => void;
    className?: string;
}
export function AddComment({ onSubmit, className }: TAddComment) {

    const [comment, setUpdate] = useState<string>('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUpdate(event.target.value);
    };

    const handleUpdateSubmit = () => {
        onSubmit(comment)
        setUpdate('')
    }

    return (
        <div className={`add-comment ${className ? className : ''}`}>
            <MemoizedTextarea
                value={comment}
                placeholder='Comment something...'
                className='form-control'
                onChange={handleCommentChange}
            />

            <MemoizedTextButton onClick={handleUpdateSubmit} text="Add comment" className={className} />
        </div>
    )
}

export const MemoizedAddComment = React.memo(AddComment)