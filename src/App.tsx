import React, { useCallback, useMemo, useState, } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { MemoizedNewsFeed } from './components/template/newsfeed'
import { Update, User } from './datatypes/datatypes';
import currentUserImage from './assets/images/jarjar.jpg'
import { UpdateApi } from './api/update-api';
import './App.css'

export function App() {
  const mockUpdates: Update[] = UpdateApi.getAll();
  const [updates, setUpdates] = useState<Update[]>(mockUpdates);

  const currentUser: User = useMemo(() => ({
    id: "0",
    firstname: "Jar",
    lastname: "Jar",
    image: currentUserImage,
  }), []);

  const handleAddUpdate = useCallback((title: string, text: string) => {
    const newUpdate = {
      id: uuidv4(),
      author: currentUser,
      title: title,
      text: text,
      createdDate: new Date(),
      comments: [],
      likes: 0,
      dislikes: 0,
    };
    setUpdates((prevUpdates) => [newUpdate, ...prevUpdates]);
  }, [currentUser]);

  const handleUpdateAction = useCallback((updateId, action: string, value: any) => {
    setUpdates((prevUpdates) => {
      return prevUpdates.map((update) => {
        if (update.id !== updateId) return update;

        switch (action) {
          case "like":
            return { ...update, likes: update.likes + 1 };
          case "dislike":
            return { ...update, dislikes: update.dislikes + 1 };
          case "comment":
            const newComment = {
              id: uuidv4(),
              author: currentUser,
              text: value,
              createdDate: new Date(),
              wow: 0,
              angry: 0,
            };
            return { ...update, comments: [...update.comments, newComment] };
          case "wow":
            const updatedWowComments = update.comments.map((comment) => comment.id === value ? { ...comment, wow: comment.wow + 1 } : comment);
            return { ...update, comments: updatedWowComments };
          case "angry":
            const updatedAngryComments = update.comments.map((comment) => comment.id === value ? { ...comment, angry: comment.angry + 1 } : comment);
            return { ...update, comments: updatedAngryComments };
          default:
            return update;
        }
      });
    });
  }, [currentUser]);

  return (
    <div className='container'>
      <MemoizedNewsFeed
        title={'Jar-Jar'}
        updates={updates}
        onAddUpdate={handleAddUpdate}
        onUpdateAction={handleUpdateAction}
      />
    </div>
  )
}
