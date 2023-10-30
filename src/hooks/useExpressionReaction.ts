import { useState } from 'react';

export const useExpressionReaction = (onCommentWow: () => void, onCommentAngry: () => void) => {
    const [reaction, setReaction] = useState<'wow' | 'angry' | null>(null);

    const handleWow = () => {
        if (reaction !== 'wow') {
            onCommentWow();
            setReaction('wow');
        } else {
            setReaction(null);
        }
    };

    const handleAngry = () => {
        if (reaction !== 'angry') {
            onCommentAngry();
            setReaction('angry');
        } else {
            setReaction(null);
        }
    };

    return {
        reaction,
        handleWow,
        handleAngry,
    };
};
