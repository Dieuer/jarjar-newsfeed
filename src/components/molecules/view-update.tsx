import React from 'react'
import { MemoizedCommentList } from '../atoms/comment-list';

type Comment = {
  text: string;
}

type Update = {
  title: string;
  comments: Comment[];
}

type TViewUpdate = {
  update: Update;
  onAddComment: (comment: string) => void;
}

export function ViewUpdate({ update, onAddComment }: TViewUpdate) {

  return (

    <div className='card'>
      <div className='card-body'>
        <blockquote> {update.title}</blockquote>
      </div>

      <div className='card-footer'>
        <MemoizedCommentList onComment={onAddComment} comments={update.comments} />


      </div>

    </div>
  )
}

export const MemoizedViewUpdate = React.memo(ViewUpdate)