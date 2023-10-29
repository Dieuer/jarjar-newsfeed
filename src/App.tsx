import React, { Component, useCallback, useState, } from 'react'
import './App.css'

import { v4 as uuidv4 } from 'uuid';
import { MemoizedNewsFeed } from './components/template/newsfeed'
import { Update, User } from './datatypes/datatypes';

import currentUserImage from './assets/images/jarjar.jpg'
import mockUserImage1 from './assets/images/3po.jpg'
import mockUserImage2 from './assets/images/b1droid.jpg'
import mockUserImage3 from './assets/images/r2d2.jpg'


export function App() {


  const currentUser: User = {
    id: "0",
    firstname: "Jar",
    lastname: "Jar",
    image: currentUserImage,
  };


  const mockUser1: User = {
    id: "1",
    firstname: "3po",
    lastname: "droid",
    image: mockUserImage1,
  };

  const mockUser2: User = {
    id: "2",
    firstname: "b1",
    lastname: "droid",
    image: mockUserImage2,
  };

  const mockUser3: User = {
    id: "3",
    firstname: "r2d2",
    lastname: "droid",
    image: mockUserImage3,
  };


  const mockUpdates: Update[] = [
    { id: uuidv4(), author: mockUser1, title: 'Update 1', text: "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.", comments: [], likes: 0, dislikes: 0, createdDate: new Date("2023-10-21T10:00:00.000Z") },
    { id: uuidv4(), author: mockUser2, title: 'Update 2', text: "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome. Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.", comments: [], likes: 0, dislikes: 0, createdDate: new Date("2023-10-21T10:00:00.000Z") },
    { id: uuidv4(), author: mockUser3, title: 'Update 3', text: "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.", comments: [], likes: 0, dislikes: 0, createdDate: new Date("2023-10-21T10:00:00.000Z") },
    { id: uuidv4(), author: mockUser2, title: 'Update 4', text: "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome.", comments: [], likes: 0, dislikes: 0, createdDate: new Date("2023-10-21T10:00:00.000Z") },
    { id: uuidv4(), author: mockUser1, title: 'Update 5', text: "Yousa should follow me now, okay? My warning yous: Gungans no like outsiders. Do not 'spect a warm welcome. ", comments: [], likes: 0, dislikes: 0, createdDate: new Date("2023-10-21T10:00:00.000Z") },
  ];


  const [updates, setUpdates] = useState<Update[]>(mockUpdates);

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

  return (

    <div className='container'>


      <MemoizedNewsFeed
        title={'Jar-Jar'}
        updates={updates}
        onAddUpdate={handleAddUpdate}
        onAddComment={handleAddComment}
        onLikeUpdate={handleLikeUpdate}
        onDislikeUpdate={handleDislikeUpdate}
      />
    </div>
  )
}
