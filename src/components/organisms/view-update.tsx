import React, { useState } from 'react'
import { Update } from '../../datatypes/datatypes';

import './view-update.css'
import { MemoizedContainer } from '../atoms/container/container';
import { MemoizedCardTitle } from '../atoms/container/title';
import { MemoizedCardText } from '../atoms/container/text';
import { MemoizedDisplayMetadata } from '../molecules/display/display-metadata';
import { MemoizedTextButton } from '../atoms/button/text-button';
import { MemoizedLikeReaction } from '../molecules/update/like-reaction';
import { MemoizedCommentList } from '../molecules/comment/comment-list';
import { MemoizedLocalDate } from '../atoms/date/local-date';
import { MemoizedBodyContent } from '../atoms/container/body-content';

type TViewUpdate = {
  update: Update;
  onAddComment: (comment: string) => void;
  onUpdateLike: (updateId: string) => void;
  onUpdateDislike: (updateId: string) => void;
  onUpdateWow: (commentId: string) => void;
  onUpdateAngry: (commentId: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ViewUpdate({ update, onAddComment, onUpdateLike, onUpdateDislike, onUpdateWow, onUpdateAngry, className, style }: TViewUpdate) {

  const [toggleComment, setToggleComment] = useState<boolean>(false);

  const handleToggleShowComment = () => {
    setToggleComment(!toggleComment);
  }

  return (
    <MemoizedContainer className={`view-update ${className ? className : ''}`} style={style}>

      <MemoizedDisplayMetadata
        image={update.author.image}
        alt={update.author.firstname + update.author.lastname}
        firstname={update.author.firstname}
        lastname={update.author.lastname}
        className='update-data'
      >
        <MemoizedLocalDate date={update.createdDate} />
      </MemoizedDisplayMetadata>

      <MemoizedBodyContent>
        <MemoizedCardTitle className='update-title' title={update.title} />
        <MemoizedCardText text={update.text} />
      </MemoizedBodyContent>

      <MemoizedTextButton onClick={handleToggleShowComment} text={"View comments"} />
      <MemoizedLikeReaction onUpdateLike={onUpdateLike} onUpdateDislike={onUpdateDislike} update={update} />

      {toggleComment && <MemoizedCommentList onAddComment={onAddComment} comments={update.comments} onCommentWow={onUpdateWow} onCommentAngry={onUpdateAngry} />}
    </MemoizedContainer >
  )
}

export const MemoizedViewUpdate = React.memo(ViewUpdate)