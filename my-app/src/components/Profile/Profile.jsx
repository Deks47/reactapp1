import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={s.content}>
      
      <div>
        <img src='http://www.fotoprizer.ru/img/120296_orig.jpg'/>
      </div>
      
      <div>ava+description</div>
      <MyPosts />
      
      
    
    </div>
    
}

export default Profile;