import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ReactionButton({ onClick, icon, className }) {
    return (
        <button className={`${className}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export const MemoizedReactionButton = React.memo(ReactionButton);
