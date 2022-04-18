import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Flex, Spacer, useBreakpoint } from '@chakra-ui/react';
import '@fontsource/roboto/400.css'; // regular
import '@fontsource/roboto/700.css'; // bold

import Navbar from './components/Navbar';
import JobFilterMenu from './components/JobFilterMenu';
import JobUnselected from './routes/JobUnselected';
import JobList from './routes/JobList';
import JobDescription from './routes/JobDescription';
import jobsJson from './data/jobs.js';
import JobsContext from './contexts/JobsContext';

function App() {
  const [jobs, setJobs] = useState(jobsJson);
  const breakpoint = useBreakpoint();

  return (
    <JobsContext.Provider value={{ jobs, setJobs }}>
      <Box className="App">
        <Navbar />
        {['base', 'sm', 'md'].includes(breakpoint) ? (
          <MobileApp />
        ) : ['lg'].includes(breakpoint) ? (
          <TabletApp />
        ) : (
          ['xl', '2xl'].includes(breakpoint) && <DesktopApp />
        )}
      </Box>
    </JobsContext.Provider>
  );
}

function MobileApp() {
  return (
    <Box as="main">
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/jobs/:id" element={<JobDescription />} />
      </Routes>
    </Box>
  );
}

function TabletApp() {
  return (
    <Box as="main" p="0 40px" mb="100px">
      <Flex>
        <Spacer />
        <JobFilterMenu />
      </Flex>
      <Flex justify="space-between" gap="20px">
        <Box flexBasis="400px">
          <JobList />
        </Box>
        <Box flexBasis="0" flexGrow="1">
          <Routes>
            <Route path="/" element={<Navigate to="/jobs" />} />
            <Route path="/jobs" element={<JobUnselected />} />
            <Route path="/jobs/:id" element={<JobDescription />} />
          </Routes>
        </Box>
      </Flex>
    </Box>
  );
}

function DesktopApp() {
  return (
    <Box as="main" p="0 100px">
      <Flex justify="space-between" gap="20px">
        <Box>
          <JobFilterMenu />
        </Box>
        <Box flexBasis="400px">
          <JobList />
        </Box>
        <Box flexBasis="0" flexGrow="1">
          <Routes>
            <Route path="/" element={<Navigate to="/jobs" />} />
            <Route path="/jobs" element={<JobUnselected />} />
            <Route path="/jobs/:id" element={<JobDescription />} />
          </Routes>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
