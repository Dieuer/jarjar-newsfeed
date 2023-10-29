import { useState } from 'react';

export const useLikeReaction = (onUpdateLike: () => void, onUpdateDislike: () => void) => {
    const [reaction, setReaction] = useState<'like' | 'dislike' | null>(null);

    const handleLike = () => {
        if (reaction !== 'like') {
            onUpdateLike();
            setReaction('like');
        } else {
            setReaction(null);
        }
    };

    const handleDislike = () => {
        if (reaction !== 'dislike') {
            onUpdateDislike();
            setReaction('dislike');
        } else {
            setReaction(null);
        }
    };

    return {
        reaction,
        handleLike,
        handleDislike,
    };
};
