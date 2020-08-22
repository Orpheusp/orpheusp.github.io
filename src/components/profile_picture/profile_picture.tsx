import * as React from 'react';

import ProfilePicClip from '../../img/profile_pic_clip.inline.svg';
import profilePic from '../../img/profile_pic.jpg';

import './profile_picture.scss';

/** A profile picture clipped. */
export function ProfilePicture(): JSX.Element {
  return (
    <div>
      <ProfilePicClip />
      <div className='profile-picture-clip--img-container'>
        <img className='profile-picture-clip--img' src={profilePic} />
      </div>
    </div>
  );
}
