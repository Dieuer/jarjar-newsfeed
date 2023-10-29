import React from 'react'
import { Update } from '../../datatypes/datatypes';
import { MemoizedDisplayFooter } from '../molecules/display/display-footer';
import { MemoizedDisplayBody } from '../molecules/display/display-body';

import './view-update.css'
import { MemoizedContainer } from '../atoms/container/container';
import { MemoizedCardTitle } from '../atoms/container/title';
import { MemoizedCardText } from '../atoms/container/text';
import { MemoizedDisplayMetadata } from '../molecules/display/display-metadata';

type TViewUpdate = {
  update: Update;
  onAddComment: (comment: string) => void;
  onUpdateLike: (updateId: string) => void;
  onUpdateDislike: (updateId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ViewUpdate({ update, onAddComment, onUpdateLike, onUpdateDislike, className, style }: TViewUpdate) {

  return (
    <MemoizedContainer className={`view-update ${className ? className : ''}`} style={style}>

      <MemoizedDisplayMetadata
        image={update.author.image}
        alt={update.author.firstname + update.author.lastname}
        firstname={update.author.firstname}
        lastname={update.author.lastname}
        className='update-data'
      />

      <MemoizedCardTitle className='update-title' title={update.title} />

      <MemoizedDisplayBody
        text={update.text}
        date={update.createdDate}
      />

      <MemoizedDisplayFooter
        update={update}
        onAddComment={onAddComment}
        onUpdateLike={() => onUpdateLike(update.id)}
        onUpdateDislike={() => onUpdateDislike(update.id)}
        className='update-footer'
      />
    </MemoizedContainer>
  )
}

export const MemoizedViewUpdate = React.memo(ViewUpdate)