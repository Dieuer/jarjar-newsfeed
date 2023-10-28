import React from 'react'
import { Update } from '../../../datatypes/datatypes';
import { MemoizedCardFooter } from '../card/cardFooter';
import { MemoizedCardBody } from '../card/cardBody';

import './view-update-card.css'

type TViewUpdate = {
  update: Update;
  onAddComment: (comment: string) => void;
  onUpdateLike: (updateId: string) => void;
  onUpdateDislike: (updateId: string) => void;
}

export function ViewUpdate({ update, onAddComment, onUpdateLike, onUpdateDislike }: TViewUpdate) {

  return (

    <div className='card'>
      <MemoizedCardBody update={update} />

      <MemoizedCardFooter
        update={update}
        onAddComment={onAddComment}
        onUpdateLike={() => onUpdateLike(update.id)}
        onUpdateDislike={() => onUpdateDislike(update.id)}
      />
    </div>
  )
}

export const MemoizedViewUpdate = React.memo(ViewUpdate)