import React from 'react'
import { Update } from '../../../datatypes/datatypes';
import { MemoizedCardFooter } from '../card/cardFooter';
import { MemoizedCardBody } from '../card/cardBody';

type TViewUpdate = {
  update: Update;
  onAddComment: (comment: string) => void;
  onUpdateLike: () => void;
  onUpdateDislike: () => void;
}


export function ViewUpdate({ update, onAddComment, onUpdateLike, onUpdateDislike }: TViewUpdate) {

  return (

    <div className='card'>

      <MemoizedCardBody
        update={update}
      />

      <MemoizedCardFooter
        update={update}
        onAddComment={onAddComment}
        onUpdateLike={() => onUpdateLike}
        onUpdateDislike={() => onUpdateDislike}
      />
    </div>
  )
}

export const MemoizedViewUpdate = React.memo(ViewUpdate)