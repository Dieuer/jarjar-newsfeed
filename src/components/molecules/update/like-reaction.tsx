import React from "react";
import { MemoizedIconButton } from "../../atoms/button/icon-button";
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useLikeReaction } from "../../../hooks/useLikeReaction";

type LikeReactionProps = {
    updateId: string;
    onUpdateLike: (updateId: string) => void;
    onUpdateDislike: (updateId: string) => void;
}

export function LikeReaction({ onUpdateLike, onUpdateDislike, updateId }: LikeReactionProps) {
    const { reaction, handleLike, handleDislike } = useLikeReaction(
        () => onUpdateLike(updateId),
        () => onUpdateDislike(updateId)
    );

    return (
        <>
            <MemoizedIconButton
                onClick={handleLike}
                className={`like-button ${reaction === 'like' ? 'liked' : ''}`}
                icon={faThumbsUp}
            />
            <MemoizedIconButton
                onClick={handleDislike}
                className={`dislike-button ${reaction === 'dislike' ? 'disliked' : ''}`}
                icon={faThumbsDown}
            />
        </>
    );
}

export const MemoizedLikeReaction = React.memo(LikeReaction);
