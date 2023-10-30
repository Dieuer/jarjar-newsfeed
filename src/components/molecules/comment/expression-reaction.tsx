import React from "react";
import { Comment } from '../../../datatypes/datatypes';
import { MemoizedIconButton } from "../../atoms/button/icon-button";
import { faFaceAngry, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { useExpressionReaction } from "../../../hooks/useExpressionReaction";


type TExpressionReaction = {
    comment: Comment;
    onCommentWow: (commentId: string) => void;
    onCommentAngry: (commentId: string) => void;
}
export function ExpressionReaction({ onCommentWow, onCommentAngry, comment }: TExpressionReaction) {
    const { reaction, handleWow, handleAngry } = useExpressionReaction(
        () => onCommentWow(comment.id),
        () => onCommentAngry(comment.id)
    );
    return (
        <>
            <MemoizedIconButton
                onClick={handleWow}
                className={`wow-button ${reaction === 'wow' ? 'wow' : ''}`}
                icon={faFaceSmile}
            />
            <MemoizedIconButton
                onClick={handleAngry}
                className={`angry-button ${reaction === 'angry' ? 'angry' : ''}`}
                icon={faFaceAngry}
            />
        </>
    );
}

export const MemoizedExpressionReaction = React.memo(ExpressionReaction);
