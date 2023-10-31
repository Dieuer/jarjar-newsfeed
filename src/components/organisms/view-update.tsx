import React, { useState } from 'react'
import { User, Comment } from '../../datatypes/datatypes';

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

type ViewUpdateProps = {
  id: string;
  author: User;
  title: string;
  text: string;
  createdDate: Date;
  comments: Comment[];
  onUpdateAction: (action: "like" | "dislike" | "comment" | "wow" | "angry", value?: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export function ViewUpdate({ id, author, title, text, createdDate, comments, onUpdateAction, className, style }: ViewUpdateProps) {

  const [toggleComment, setToggleComment] = useState<boolean>(false);

  const handleToggleShowComment = () => {
    setToggleComment(!toggleComment);
  }

  return (
    <MemoizedContainer className={`view-update ${className ? className : ''}`} style={style}>

      <MemoizedDisplayMetadata
        image={author.image}
        alt={author.firstname + author.lastname}
        firstname={author.firstname}
        lastname={author.lastname}
        className='update-data'
      >
        <MemoizedLocalDate date={createdDate} />
      </MemoizedDisplayMetadata>

      <MemoizedBodyContent>
        <MemoizedCardTitle className='update-title' title={title} />
        <MemoizedCardText text={text} />
      </MemoizedBodyContent>

      <MemoizedTextButton onClick={handleToggleShowComment} text={"View comments"} />

      <MemoizedLikeReaction
        onUpdateLike={() => onUpdateAction("like")}
        onUpdateDislike={() => onUpdateAction("dislike")}
        updateId={id}
      />

      {toggleComment
        &&
        <MemoizedCommentList
          comments={comments}
          onAddComment={(comments) => onUpdateAction('comment', comments)}
          onCommentWow={(commentId) => onUpdateAction("wow", commentId)}
          onCommentAngry={(commentId) => onUpdateAction("angry", commentId)} />}
    </MemoizedContainer >
  )
}

export const MemoizedViewUpdate = React.memo(ViewUpdate)