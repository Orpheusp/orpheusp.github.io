import * as React from 'react';

import { PaneLabel } from '../pane_label/pane_label';
import { Skill, SkillItem } from '../skill_item/skill_item';

import './skills_pane.scss';

interface Skillset {
  name: string;
  skills: Skill[];
}

const skillsets: Skillset[] = [
  {
    name: 'programming languages',
    skills: [
      {
        thumbnailUrl: require('../../img/typescript_logo.svg'),
        label: 'TypeScript',
      },
      {
        thumbnailUrl: require('../../img/javascript_logo.svg'),
        label: 'JavaScript',
      },
      {
        thumbnailUrl: require('../../img/html_logo.svg'),
        label: 'HTML',
      },
      {
        thumbnailUrl: require('../../img/css_logo.svg'),
        label: 'CSS',
      },
      {
        thumbnailUrl: require('../../img/python_logo.svg'),
        label: 'Python',
      },
    ],
  },
  {
    name: 'web libraries',
    skills: [
      {
        thumbnailUrl: require('../../img/react_logo.svg'),
        label: 'React',
      },
      {
        thumbnailUrl: require('../../img/sass_logo.svg'),
        label: 'Sass',
      },
      {
        thumbnailUrl: require('../../img/storybook_logo.svg'),
        label: 'Storybook',
      },
      {
        thumbnailUrl: require('../../img/jasmine_logo.svg'),
        label: 'Jasmine',
      },
    ],
  },
  {
    name: 'design tools',
    skills: [
      {
        thumbnailUrl: require('../../img/sketch_logo.svg'),
        label: 'Sketch',
      },
      {
        thumbnailUrl: require('../../img/figma_logo.svg'),
        label: 'Figma',
      },
    ],
  },
];

/** Returns an skillset list */
function getSkillsetItem(skillset: Skillset): JSX.Element {
  const skills: JSX.Element[] = [];

  skillset.skills.forEach((skill) => {
    skills.push(
      <div className='col-3'>
        <SkillItem skill={skill} key={`${skillset.name} ${skill.label}`} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-12'>
          <div className='subtitle-2 skills-pane--skillset-name'>
            {skillset.name}
          </div>
        </div>
      </div>
      <div className='row'>{skills}</div>
    </React.Fragment>
  );
}

/** A pane that shows a list of skills, grouped by category */
export function SkillsPane(): JSX.Element {
  const skillsetsGroup: JSX.Element[] = [];

  skillsets.forEach((skillset) => {
    skillsetsGroup.push(getSkillsetItem(skillset));
  });

  return (
    <div className='skills-pane'>
      <div className='container'>
        <PaneLabel text='skills' />
        {skillsetsGroup}
      </div>
    </div>
  );
}
