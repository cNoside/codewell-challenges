import { createContext } from 'react';

const JobsContext = createContext({
  jobs: [],
  setJobs: () => {}
});

export default JobsContext;
