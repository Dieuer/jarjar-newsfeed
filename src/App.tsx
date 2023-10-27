import React, { Component, useCallback, useState, } from 'react'
import './App.css'
import data, {
  // comment,
  // update,
} from './data'
import { MemoizedNewsFeed } from './components/organisms/newsfeed'

export function App() {


  type Comment = {
    text: string;
  }

  type Update = {
    title: string;
    comments: Comment[];

  }

  const mockUpdates: Update[] = [
    { title: 'Update 1', comments: [] },
    { title: 'Update 2', comments: [] },
    { title: 'Update 3', comments: [] },
    { title: 'Update 4', comments: [] },
    { title: 'Update 5', comments: [] },
  ]

  const [updates, setUpdates] = useState<Update[]>(mockUpdates);

  const handleAddUpdate = useCallback(
    (text) => {
      const newUpdate = { title: text, comments: [] };

      setUpdates((prevUpdates) => [newUpdate, ...prevUpdates]);
      console.log(updates)
    },
    []
  );

  const handleAddComment = useCallback(
    (commentText, updateIndex) => {

      const newComment = { text: commentText };

      setUpdates((prevUpdates) => {
        const updatedUpdates = [...prevUpdates];
        updatedUpdates[updateIndex].comments = [...updatedUpdates[updateIndex].comments, newComment];
        return updatedUpdates;
      });

      console.log(updates);
    },
    [updates]
  );
  return (
    <div className='container'>
      {/* Display the newsfeed */}
      <MemoizedNewsFeed
        title={'Jar-Jar'}
        updates={updates}
        onAddUpdate={handleAddUpdate}
        onAddComment={handleAddComment} />
    </div>
  )
}
