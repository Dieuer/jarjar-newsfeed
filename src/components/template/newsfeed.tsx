import React from 'react';
import { MemoizedAddUpdate } from '../molecules/update/add-update';
import { MemoizedViewUpdate } from '../organisms/view-update';
import { Update } from '../../datatypes/datatypes';

import './newsfeed.css'

type NewsFeedProps = {
  title: string;
  updates: Update[];
  onAddUpdate: (updateTitle: string, updatedText: string) => void;
  onUpdateAction: (updateId: string, action: "like" | "dislike" | "comment" | "wow" | "angry", value?: string) => void;
}

export function NewsFeed({ title, updates, onAddUpdate, onUpdateAction }: NewsFeedProps) {
  return (
    <div className={'update-container'}>

      <h1 className='update-title'> {title} - Newsfeed</h1>

      <MemoizedAddUpdate onSubmitUpdate={onAddUpdate} />

      <div className="update-stream">
        {updates.map((update) => (
          <MemoizedViewUpdate
            key={update.id}
            {...update}
            onUpdateAction={(action, value) => onUpdateAction(update.id, action, value)}
          />
        ))}
      </div>
    </div>
  );
}

export const MemoizedNewsFeed = React.memo(NewsFeed);
