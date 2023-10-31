import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import './icon-button.css';

type IconButtonProps = {
    onClick: () => void;
    icon: IconProp;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export function IconButton({ onClick, icon, disabled, className, style }: IconButtonProps) {
    return (
        <button className={`icon-button ${className ? className : ''}`} onClick={onClick} disabled={disabled} style={style}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export const MemoizedIconButton = React.memo(IconButton);