import { useState } from 'react';

export const useExpressionReaction = (onUpdateLike: () => void) => {
    const [expression, setExpression] = useState<'like' | 'dislike' | null>(null);

    const handleExpression = () => {
        if (expression !== 'like') {
            onUpdateLike();
            setExpression('like');
        } else {
            setExpression(null);
        }
    };

    return {
        expression,
        handleExpression,
    };
};
