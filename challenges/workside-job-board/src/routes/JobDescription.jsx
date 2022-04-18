import { Flex, Spacer, Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Button, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link, useParams } from 'react-router-dom';
import { useBreakpoint } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import jobs from '../data/jobs';
import calcDateDiff from '../utils/calcDateDiff';
import { ReactComponent as VerifiedIcon } from '../assets/checkmark-verified.svg';

function JobDescription() {
  let { id } = useParams();
  id = parseInt(id);
  const Navigate = useNavigate();
  const job = jobs.find((job) => job.id === id);
  const breakpoint = useBreakpoint();

  if (!job) return Navigate('/jobs');
  return (
    <Box
      mt={{ base: '40px', lg: 0 }}
      mb={{ base: '100px', lg: 0 }}
      bg="paleBlue"
      p={{ lg: '20px 30px 0 30px' }}
      borderRadius={{ lg: '5px' }}
    >
      <Flex
        bg="paleBlue"
        justify="space-between"
        p={{ base: '30px 20px', lg: '30px 0' }}
      >
        <Box as="header">
          <Text as="h2" textStyle="h2">
            {job.title}
          </Text>
          <Text as="h4" textStyle="h4">
            {job.city && `${job.city}, `}
            {job.country}
          </Text>
        </Box>
        <Text>Posted {calcDateDiff(job.datePosted)} days ago</Text>
      </Flex>
      <Flex
        bg="veryDarkBlue"
        justify="space-between"
        p="30px 20px"
        borderRadius="5px"
        gap={4}
      >
        <Box>
          <Text as="h3" textStyle="h3">
            Experience
          </Text>
          <Text as="h4" textStyle="h4">
            {job.experience}
          </Text>
        </Box>
        <Box>
          <Text as="h3" textStyle="h3">
            Location
          </Text>
          <Text as="h4" textStyle="h4">
            {job.city ? `${job.city}, ` : ''} {job.country}
          </Text>
        </Box>
        <Box>
          <Text as="h3" textStyle="h3">
            Salary Range
          </Text>
          <Text as="h4" textStyle="h4">
            {`$${job.salary.range[0]}-$${job.salary.range[1]}/${job.salary.rate}`}
          </Text>
        </Box>
      </Flex>
      <Box bg="paleBlue" p={{ base: '30px 20px', lg: '40px 0 0 0' }}>
        <Box mb="32px">
          <Text as="h3" textStyle="h3" mb="20px">
            Company Overview
          </Text>
          <Text color="brandGray" lineHeight="1.6rem">
            {job.companyOverview}
          </Text>
        </Box>
        <Box>
          <Text as="h3" textStyle="h3" mb="20px">
            Job Requirements
          </Text>
          {job.requirements.map((requirement, i) => (
            <Flex key={`${job.id}-requirement-${i}`}>
              <Box as={VerifiedIcon} mr="8px" mb="8px" />
              <Text color="brandGray">{requirement}</Text>
            </Flex>
          ))}
        </Box>
        <Flex pt="40px" pb="60px">
          <Link to="/">
            <IconButton
              display={{
                base: 'block',
                lg: 'none'
              }}
              icon={<ArrowBackIcon w={7} h={7} />}
              variant="link"
              height="100%"
              size="md"
            ></IconButton>
          </Link>
          <Spacer />
          <Button color="white" size="lg" colorScheme="brightBlue">
            Apply to job
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

function JobNotFound() {
  return (
    <Box>
      <Text>Job not found</Text>
    </Box>
  );
}

export default JobDescription;
