import * as React from 'react';

import ProfilePicClip from '../../img/profile_pic_clip.inline.svg';
import profilePic from '../../img/profile_pic.jpg';

import './profile_picture.scss';

interface Props {
  className?: string;
}

/** A profile picture clipped. */
export function ProfilePicture({ className }: Props): JSX.Element {
  return (
    <div className={className}>
      <ProfilePicClip />
      <div className='profile-picture-clip--img-container'>
        <img className='profile-picture-clip--img' src={profilePic} />
      </div>
    </div>
  );
}
