import React, { memo } from 'react';
import { MemoizedAddUpdate } from '../molecules/update/add-update';
import { MemoizedViewUpdate } from '../molecules/update/view-update-card';
import { Update } from '../../datatypes/datatypes';

import './newsfeedCard.css'

type TNewsFeedProps = {
  title: string;
  updates: Update[];
  onAddUpdate: (updateTitle: string, updatedText: string) => void;
  onAddComment: (commentText: string, updateId: string) => void;
  onLikeUpdate: (updateId: string) => void;
  onDislikeUpdate: (updateId: string) => void;
}

export function NewsFeedCard({ title, updates, onAddUpdate, onLikeUpdate, onDislikeUpdate, onAddComment }: TNewsFeedProps) {
  return (
    <div className={'feed-container'}>
      <h1 className='feed-title'> {title} - Newsfeed</h1>

      <MemoizedAddUpdate onSubmitUpdate={onAddUpdate} />

      <div className="card-container">
        {updates.map((update) => (
          <MemoizedViewUpdate
            key={update.id}
            update={update}
            onAddComment={(comment) => onAddComment(comment, update.id)}
            onUpdateLike={onLikeUpdate}
            onUpdateDislike={onDislikeUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export const MemoizedNewsFeedCard = React.memo(NewsFeedCard);
