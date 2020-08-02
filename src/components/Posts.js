import React from 'react';
import Post from './Post';

export default ({posts}) => {
  if (!posts.length) {
    return <p>Постов пока нет!</p>
  }
  return posts.map(post => <Post post={post} key={post} />)
}