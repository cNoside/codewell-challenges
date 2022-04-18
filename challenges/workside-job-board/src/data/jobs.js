import { ReactComponent as FirstJobLogo } from '../assets/first-job-logo.svg';
import { ReactComponent as SecondJobLogo } from '../assets/second-job-logo.svg';
import { ReactComponent as ThirdJobLogo } from '../assets/third-job-logo.svg';
import { ReactComponent as FourthJobLogo } from '../assets/fourth-job-logo.svg';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    listing: 'Looking for a freelance frontend developer',
    logo: FirstJobLogo,
    country: 'United States',
    city: 'Virginia',
    tags: ['Frontend', 'Webdev'],
    experience: 'Expert',
    paymentVerified: true,
    salary: {
      range: [100, 120],
      rate: 'hr'
    },
    companyOverview:
      'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.',
    requirements: [
      '4 years of professional working experience.',
      'Understanding of Next.js, React, and Angular.',
      'Experience with Redux, GraphQL, and Apollo.'
    ],
    datePosted: '2022-04-01'
  },
  {
    id: 2,
    title: 'Product Designer',
    listing: 'Product Designer needed',
    logo: SecondJobLogo,
    country: 'Remote',
    tags: ['Design', 'Research'],
    experience: 'Entry',
    paymentVerified: false,
    salary: {
      range: [70, 100],
      rate: 'hr'
    },
    companyOverview:
      'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.',
    requirements: [
      'Relevent experience in design and research.',
      'Experience with Sketch, Figma, or InVision.'
    ],
    datePosted: '2022-04-10'
  },
  {
    id: 3,
    title: 'SEO Specialist',
    listing: 'SEO Specialist for an e-commerce shop',
    logo: ThirdJobLogo,
    country: 'United States',
    city: 'New York',
    tags: ['SEO'],
    experience: 'Expert',
    paymentVerified: false,
    salary: {
      range: [4000, 5000],
      rate: 'month'
    },
    companyOverview:
      'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.',
    requirements: [
      '6 years of professional working experience.',
      'Understanding of Next.js, React, and Angular.',
      'Experience with Redux, GraphQL, and Apollo.'
    ],
    datePosted: '2022-03-20'
  },
  {
    id: 4,
    title: 'Frontend Developer',
    listing: 'Migrate our website from Sketch to Figma',
    logo: FourthJobLogo,
    country: 'India',
    city: 'Mumbai',
    tags: ['Designer'],
    experience: 'Intermediate',
    paymentVerified: true,
    salary: {
      range: [90, 120],
      rate: 'hr'
    },
    companyOverview:
      'Dividstar was established in 1932 by Matthew Cohens in Virginia, United States. Dividstar has been the leader application for personal finance over the past 10 decades and aim to continue holding that position. As times continue to evolve, we do too.',
    requirements: [
      'Relevent experience in design and research.',
      'Understanding of Next.js and React.',
      'Experience with Sketch and Figma.'
    ],
    datePosted: '2022-04-16'
  }
];

export default jobs;
