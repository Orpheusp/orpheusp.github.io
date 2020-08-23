import * as React from 'react';

import { PaneLabel } from '../pane_label/pane_label';

import './skills_pane.scss';

interface Skill {
  thumbnailUrl: string;
  label: string;
}

interface Skillset {
  name: string;
  skills: Skill[];
}

const skillsets: Skillset[] = [
  {
    name: 'programming languages',
    skills: [
      {
        thumbnailUrl: require('../../img/typescript_logo.png'),
        label: 'TypeScript',
      },
      {
        thumbnailUrl: require('../../img/javascript_logo.png'),
        label: 'JavaScript',
      },
      {
        thumbnailUrl: require('../../img/html_logo.png'),
        label: 'HTML',
      },
      {
        thumbnailUrl: require('../../img/css_logo.png'),
        label: 'CSS',
      },
      {
        thumbnailUrl: require('../../img/python_logo.png'),
        label: 'Python',
      },
    ],
  },
  {
    name: 'web libraries',
    skills: [
      {
        thumbnailUrl: require('../../img/react_logo.png'),
        label: 'React',
      },
      {
        thumbnailUrl: require('../../img/sass_logo.png'),
        label: 'Sass',
      },
      {
        thumbnailUrl: require('../../img/storybook_logo.png'),
        label: 'Storybook',
      },
      {
        thumbnailUrl: require('../../img/jasmine_logo.png'),
        label: 'Jasmine',
      },
    ],
  },
  {
    name: 'design tools',
    skills: [
      {
        thumbnailUrl: require('../../img/sketch_logo.png'),
        label: 'Sketch',
      },
      {
        thumbnailUrl: require('../../img/figma_logo.png'),
        label: 'Figma',
      },
    ],
  },
];

interface SkillItemProps {
  skill: Skill;
}

/** Returns a skill item */
export function SkillItem({ skill }: SkillItemProps): JSX.Element {
  return (
    <div className='skill-item'>
      <img className='skill-item--thumbnail' src={skill.thumbnailUrl} />
      <div className='skill-item--label subtitle-2'>{skill.label}</div>
    </div>
  );
}

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
