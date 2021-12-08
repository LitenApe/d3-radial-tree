const frontend = [
  { name: 'ReactJS' },
  { name: 'D3js' },
  { name: 'Accessibility' },
  { name: 'Component Libraries' },
  { name: 'VueJS' },
  { name: 'Svelte' },
  { name: 'Animation' },
  { name: 'Redux' },
];

const sport = [
  { name: 'Running' },
  { name: 'Cycling' },
  { name: 'Hiking' },
  { name: 'Squash' },
  { name: 'Football' },
  { name: 'Volleyball' },
  { name: 'Climbing' },
];

const hobby = [
  { name: 'Gaming' },
  { name: 'Photography' },
  { name: 'Puzzles' },
  { name: 'Guitar' },
  { name: 'Finance' },
];

const language = [
  { name: 'TypeScript' },
  { name: 'Dart' },
  { name: 'Kotlin' },
  { name: 'Rust' },
  { name: 'Java' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Bash' },
  { name: 'C' },
];

const social = [
  { name: 'Github' },
  { name: 'Facebook' },
  { name: 'Instagram' },
  { name: 'Flickr' },
  { name: 'Snapchat' },
];

const lies = [
  { name: 'More' },
  { name: 'lies' },
  { name: 'too' },
  { name: 'fill' },
  { name: 'the' },
  { name: 'graph' },
];

export interface Relation {
  name: string;
  parent: string;
}

export const interests: Array<Relation> = [
  { name: 'LitenApe', parent: '' },

  // Development
  { name: 'Development', parent: 'LitenApe' },

  // Frontend
  { name: 'Frontend', parent: 'Development' },
  ...frontend.map((value) => ({ ...value, parent: 'Frontend' })),

  // Programming Language
  { name: 'Programming Language', parent: 'Development' },
  ...language.map((value) => ({ ...value, parent: 'Programming Language' })),

  // Sport
  { name: 'Sport', parent: 'LitenApe' },
  ...sport.map((value) => ({ ...value, parent: 'Sport' })),

  // Hobby
  { name: 'Hobby', parent: 'LitenApe' },
  ...hobby.map((value) => ({ ...value, parent: 'Hobby' })),

  // Social Media
  { name: 'Social Media', parent: 'LitenApe' },
  ...social.map((value) => ({ ...value, parent: 'Social Media' })),

  // lies
  { name: 'Lies', parent: 'LitenApe' },
  ...lies.map((value) => ({ ...value, parent: 'Lies' })),
];
