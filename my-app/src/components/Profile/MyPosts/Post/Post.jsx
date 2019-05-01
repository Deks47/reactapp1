import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
  
  return (
    <div className={s.item}>
      <img src='https://cdn.onlinewebfonts.com/svg/img_510068.png' />
     { props.message }
          <div>
        <span>likes</span>
      </div>
    </div>
  )

}

export default Post;