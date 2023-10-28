import React, { useState } from "react";
import { Update } from '../../../datatypes/datatypes';
import { MemoizedReactionButton } from "../../atoms/button/reactionButton";

import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

type TCardFooter = {
    update: Update;
    onUpdateLike: (updateId: string) => void;
    onUpdateDislike: (updateId: string) => void;
}

function ReactUpdate({ onUpdateLike, onUpdateDislike, update }: TCardFooter) {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);

    const handleLikeButtonClick = () => {
        if (!isLiked) {
            onUpdateLike(update.id);
            setIsLiked(true);
            setIsDisliked(false);
        } else {
            setIsLiked(false);
        }
    };

    const handleDislikeButtonClick = () => {
        if (!isDisliked) {
            onUpdateDislike(update.id);
            setIsDisliked(true);
            setIsLiked(false);
        } else {
            setIsDisliked(false);
        }
    };

    return (
        <>
            <MemoizedReactionButton
                onClick={handleLikeButtonClick}
                className={`like-button ${isLiked ? 'liked' : ''}`}
                icon={faThumbsUp}
            />
            <MemoizedReactionButton
                onClick={handleDislikeButtonClick}
                className={`dislike-button ${isDisliked ? 'disliked' : ''}`}
                icon={faThumbsDown}
            />
        </>
    );
}

export const MemoizedReactUpdate = React.memo(ReactUpdate);
