import { Box, Flex, HStack } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/react';
import { Tag } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LocationIcon } from '../assets/location.svg';
import { ReactComponent as VerifiedIcon } from '../assets/checkmark-verified.svg';
import { ReactComponent as NotVerifiedIcon } from '../assets/checkmark-not-verified.svg';

function JobCard(props) {
  const {
    id,
    listing,
    logo: Logo,
    country,
    city,
    tags,
    paymentVerified
  } = props;
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/jobs/${id}`)}
      className="job-card"
      bg="paleBlue"
      p="25px 20px"
      w="100%"
      borderRadius={{ lg: '5px' }}
      cursor="pointer"
      _hover={{ bg: '#283147' }}
      _active={{ bg: '#1c2336', transition: '0s' }}
      transition="0.3s"
    >
      <Flex as="header" align="center" mb="20px">
        <Box mr="20px">
          <Logo />
        </Box>
        <Flex direction="column" justify="space-between">
          <Heading as="h3" fontSize="16px">
            {listing}
          </Heading>
          <Flex align="center" mt={1}>
            <Box mx={1}>
              <LocationIcon />
            </Box>
            <Heading
              as="h4"
              fontSize="16px"
              color="brandGray"
              fontWeight="normal"
            >
              {city && `${city}, `}
              {country}
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      <Flex align="center" justify="space-between" gap={4}>
        <HStack>
          {tags.map((tag) => (
            <Tag
              fontWeight="bold"
              fontSize="14px"
              key={`${listing}-${tag}`}
              colorScheme="veryDarkBlue"
              size="lg"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
        <Flex w="max-content">
          {paymentVerified ? <VerifiedIcon /> : <NotVerifiedIcon />}
          <Text pl={2} fontWeight="bold">
            Payment {paymentVerified ? 'Verified' : 'Unverified'}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default JobCard;
