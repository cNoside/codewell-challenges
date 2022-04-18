import { useContext } from 'react';
import { Box, Flex, Spacer, useBreakpoint, Text } from '@chakra-ui/react';

import JobFilterMenu from '../components/JobFilterMenu';
import JobCard from '../components/JobCard';
import JobsContext from '../contexts/JobsContext';

function JobList() {
  const breakpoint = useBreakpoint();
  const { jobs } = useContext(JobsContext);

  return (
    <Box mb={{ base: '100px', lg: '0px' }} h="100%">
      {['base', 'sm', 'md'].includes(breakpoint) && (
        <Flex>
          <Spacer />
          <JobFilterMenu />
        </Flex>
      )}
      {jobs.length > 0 ? (
        <Flex flexDir="column" gap="32px" transition="2s">
          {jobs.map((job) => (
            <JobCard key={`${job.id}-job`} {...job} />
          ))}
        </Flex>
      ) : (
        <Flex
          className="terst"
          color="brandGray"
          h="100%"
          align="center"
          justify="center"
        >
          <Text>Your filters are too strict! Please reduce the filters.</Text>
        </Flex>
      )}
    </Box>
  );
}

export default JobList;
