import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import './icon-button.css';

type TIconButtonProps = {
    onClick: () => void;
    icon: IconProp;
    className?: string;
    style?: React.CSSProperties;
}

export function IconButton({ onClick, icon, className, style }: TIconButtonProps) {
    return (
        <button className={`icon-button ${className ? className : ''}`} onClick={onClick} style={style}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export const MemoizedIconButton = React.memo(IconButton);