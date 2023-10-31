import React from "react";
import { MemoizedIconButton } from "../../atoms/button/icon-button";
import { faFaceAngry, faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { useExpressionReaction } from "../../../hooks/useExpressionReaction";

type ExpressionReactionProps = {
    commentId: string;
    onCommentWow: (commentId: string) => void;
    onCommentAngry: (commentId: string) => void;
}
export function ExpressionReaction({ onCommentWow, onCommentAngry, commentId }: ExpressionReactionProps) {
    const { reaction, handleWow, handleAngry } = useExpressionReaction(
        () => onCommentWow(commentId),
        () => onCommentAngry(commentId)
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
