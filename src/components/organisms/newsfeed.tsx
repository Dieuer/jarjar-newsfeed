import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { MemoizedAddUpdate } from '../atoms/add-update';
import { MemoizedViewUpdate } from '../molecules/view-update';

type Comments = {
  text: string;
}

type Update = {
  title: string;
  comments: Comments[];
}

type TNewsFeedProps = {
  title: string;
  updates: Update[]
  onAddUpdate: (update: string) => void;
  onAddComment: (comment: string, updateIndex: number) => void;
  // TODO introduce correc t types and use comment.id
}
export function NewsFeed({ title, updates, onAddUpdate, onAddComment }: TNewsFeedProps) {

  return (

    <div className={'card-grid'}>
      <h1> {title} - Newsfeed</h1>
      <MemoizedAddUpdate onSubmit={onAddUpdate} />

      <br />
      {updates.map((update, index) => (
        <MemoizedViewUpdate
          key={index}
          update={update}
          onAddComment={(comment) => onAddComment(comment, index)}
        />
      ))}
    </div>
  )
}

export const MemoizedNewsFeed = React.memo(NewsFeed)