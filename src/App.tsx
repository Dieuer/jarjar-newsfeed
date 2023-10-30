import React, { useCallback, useState, } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MemoizedNewsFeed } from './components/template/newsfeed'
import { Update, User } from './datatypes/datatypes';
import currentUserImage from './assets/images/jarjar.jpg'
import { UpdateApi } from './api/update-api';

import './App.css'

export function App() {

  const mockUpdates: Update[] = UpdateApi.getAll();
  const [updates, setUpdates] = useState<Update[]>(mockUpdates);

  const currentUser: User = {
    id: "0",
    firstname: "Jar",
    lastname: "Jar",
    image: currentUserImage,
  };

  const handleAddUpdate = useCallback(
    (title, text) => {
      const newUpdate = {
        id: uuidv4(),
        author: currentUser,
        title: title,
        text: text,
        createdDate: new Date(),
        comments: [],
        likes: 0,
        dislikes: 0
      };
      setUpdates((prevUpdates) => [newUpdate, ...prevUpdates]);
    },
    [updates]
  );

  const handleAddComment = useCallback(
    (text, updateId) => {
      const newComment = {
        id: uuidv4(),
        author: currentUser,
        text: text,
        createdDate: new Date(),
        wow: 0,
        angry: 0,
      };

      setUpdates((prevUpdates) => {
        return prevUpdates.map((update) => {
          if (update.id === updateId) {
            return { ...update, comments: [...update.comments, newComment] };
          }
          return update;
        });
      });
    },
    [updates]
  );

  const handleLikeUpdate = (updateId: string) => {
    setUpdates((prevUpdates) =>
      prevUpdates.map((update) =>
        update.id === updateId
          ? { ...update, likes: update.likes + 1 }
          : update
      )
    );
  };

  const handleDislikeUpdate = (updateId: string) => {
    setUpdates((prevUpdates) =>
      prevUpdates.map((update) =>
        update.id === updateId
          ? { ...update, dislikes: update.dislikes + 1 }
          : update
      )
    );
  };

  const handleWowUpdate = (commentId: string) => {
    setUpdates((prevUpdates) =>
      prevUpdates.map((update) => {
        const updatedComments = update.comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, wow: comment.wow + 1 };
          }
          return comment;
        });
        return { ...update, comments: updatedComments };
      })
    );
  };

  const handleAngryUpdate = (commentId: string) => {
    setUpdates((prevUpdates) =>
      prevUpdates.map((update) => {
        const updatedComments = update.comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, angry: comment.angry + 1 };
          }
          return comment;
        });
        return { ...update, comments: updatedComments };
      })
    );
  };

  return (

    <div className='container'>

      <MemoizedNewsFeed
        title={'Jar-Jar'}
        updates={updates}
        onAddUpdate={handleAddUpdate}
        onAddComment={handleAddComment}
        onLikeUpdate={handleLikeUpdate}
        onDislikeUpdate={handleDislikeUpdate}
        onCommentWow={handleWowUpdate}
        onCommentAngry={handleAngryUpdate}
      />
    </div>
  )
}
