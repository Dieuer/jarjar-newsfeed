import React, { useState } from 'react'
import { MemoizedTextButton } from '../../atoms/button/text-button';
import { MemoizedTextarea } from '../../atoms/input/textarea';

type AddCommentProps = {
    onSubmit: (comment: string) => void;
    className?: string;
    style?: React.CSSProperties;
}
export function AddComment({ onSubmit, className, style }: AddCommentProps) {

    const [comment, setComment] = useState<string>('');
    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleUpdateSubmit = () => {
        onSubmit(comment)
        setComment('')
    }

    return (
        <div className={`add-comment ${className ? className : ''}`} style={style}>
            <MemoizedTextarea
                value={comment}
                placeholder='Comment something...'
                className='form-control'
                onChange={handleCommentChange}
            />

            <MemoizedTextButton
                onClick={handleUpdateSubmit}
                text="Add comment" className={className}
                disabled={!comment}
            />
        </div>
    )
}

export const MemoizedAddComment = React.memo(AddComment)