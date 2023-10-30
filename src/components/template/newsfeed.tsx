import React, { memo } from 'react';
import { MemoizedAddUpdate } from '../molecules/update/add-update';
import { MemoizedViewUpdate } from '../organisms/view-update';
import { Update } from '../../datatypes/datatypes';

import './newsfeed.css'

type TNewsFeedProps = {
  title: string;
  updates: Update[];
  onAddUpdate: (updateTitle: string, updatedText: string) => void;
  onAddComment: (commentText: string, updateId: string) => void;
  onLikeUpdate: (updateId: string) => void;
  onDislikeUpdate: (updateId: string) => void;
  onCommentWow: (commentId: string) => void;
  onCommentAngry: (commentId: string) => void;

}

export function NewsFeed({ title, updates, onAddUpdate, onLikeUpdate, onDislikeUpdate, onAddComment, onCommentWow, onCommentAngry }: TNewsFeedProps) {
  return (
    <div className={'update-container'}>

      <h1 className='update-title'> {title} - Newsfeed</h1>

      <MemoizedAddUpdate onSubmitUpdate={onAddUpdate} />

      <div className="update-stream">
        {updates.map((update) => (
          <MemoizedViewUpdate
            key={update.id}
            update={update}
            onAddComment={(comment) => onAddComment(comment, update.id)}
            onUpdateLike={onLikeUpdate}
            onUpdateDislike={onDislikeUpdate}
            onUpdateWow={onCommentWow}
            onUpdateAngry={onCommentAngry}
          />
        ))}
      </div>
    </div>
  );
}

export const MemoizedNewsFeed = React.memo(NewsFeed);
