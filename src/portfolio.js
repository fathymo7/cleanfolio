const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/fathymo7',
  title: 'FM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Fathy Mohsen',
  role: 'Front End Developer',
  description:
    'Web developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary. With a passion for both personal growth and technical growth. ',
  resume:
    'https://drive.google.com/file/d/1q3I1ieqnRAR_aDcsAb4JYBgrx3UTOXas/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/fathy-mohsen',
    github: 'https://github.com/fathymo7',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Food Order Project',
    description:
      'A page showing items which a user can order, choose the quantity and cancel order at any time. The project is using ReactJs and fetched by RestfulAPI from google firebase. ',
    stack: ['HTML', 'CSS', 'ReactJs', 'API'],
    sourceCode: 'https://github.com/fathymo7/Food-Application',
  },
  {
    name: 'Quotes Project',
    description:
      'In this project, a user can add a quote which is displayed in quotes page while other users can comment on it. This project is using React-Router and fetched by RestfulAPI from google firebase.',
    stack: ['HTML', 'CSS', 'ReactJs', 'React-Router'],
    sourceCode: 'https://github.com/fathymo7/Quotes-Application',
  },
  {
    name: 'Redux Cart',
    description:
      'A page showing Items and the user can pick items to cart and remove items from it. This project using is Redux hooks and fetched by RestfulAPI from google firebase.',
    stack: ['HTML', 'CSS', 'ReactJs', 'React-Router'],
    sourceCode: 'https://github.com/fathymo7/Redux-Cart',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML5',
  'CSS3',
  'JavaScript',
  'ReactJs',
  'Redux',
  'React Router',
  'Git',
  'React Native',
  'Restful API',
  'MongoDB',
  'NextJs',
  'TailwindCSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fathymohsen97@gmail.com',
}

export { header, about, projects, skills, contact }
