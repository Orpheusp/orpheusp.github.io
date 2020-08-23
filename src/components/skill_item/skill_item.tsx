import * as React from 'react';

import './skill_item.scss';

export interface Skill {
  thumbnailUrl: string;
  label: string;
}

interface Props {
  skill: Skill;
}

/** Returns a skill item */
export function SkillItem({ skill }: Props): JSX.Element {
  return (
    <div className='skill-item'>
      <img className='skill-item--thumbnail' src={skill.thumbnailUrl} />
      <div className='skill-item--label subtitle-2'>{skill.label}</div>
    </div>
  );
}
