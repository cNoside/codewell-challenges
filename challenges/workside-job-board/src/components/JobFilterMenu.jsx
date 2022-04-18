import { useState, useContext } from 'react';
import { Box, Flex, VStack, Heading } from '@chakra-ui/react';
import { Button, Checkbox } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup
} from '@chakra-ui/react';
import { useBreakpoint } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import jobsJson from '../data/jobs';
import JobsContext from '../contexts/JobsContext';

const filters = [
  {
    title: 'Location',
    data: ['Remote', 'United States', 'India', 'Australia', 'Poland', 'Canada']
  },
  {
    title: 'Payment',
    data: ['Verified', 'Unverified']
  },
  {
    title: 'Level',
    data: ['Entry', 'Intermediate', 'Expert']
  }
];

function JobFilterMenu() {
  const breakpoint = useBreakpoint();
  const { setJobs } = useContext(JobsContext);

  const [currentFilters, setCurrentFilters] = useState([
    { title: 'Location', data: [] },
    { title: 'Payment', data: [] },
    { title: 'Level', data: [] }
  ]);

  const handleCheckboxChange = (title) => (e) => {
    const { checked: isChecked, value } = e.target;
    if (isChecked) {
      setCurrentFilters((prevFilters) => {
        prevFilters[
          prevFilters.findIndex((filter) => filter.title === title)
        ].data.push(value);
        return [...prevFilters];
      });
    } else {
      setCurrentFilters((prevFilters) => {
        const filterIndex = prevFilters.findIndex(
          (filter) => filter.title === title
        );
        const data = prevFilters[filterIndex].data;
        prevFilters[filterIndex].data = data.filter((item) => item !== value);
        return [...prevFilters];
      });
    }
    setJobs(() => {
      const keyMapping = {
        Location: 'country',
        Payment: 'paymentVerified',
        Level: 'experience'
      };
      let jobsClone = jobsJson.slice();
      if (currentFilters.every((filter) => filter.data.length === 0)) {
        return jobsClone;
      }

      const filteredJobs = [];
      jobsClone.forEach((job) => {
        let isFilterMatchedArr = Array(currentFilters.length);
        currentFilters.forEach((filter) => {
          const jobKey = keyMapping[filter.title];
          let jobValue;
          if (typeof job[jobKey] === 'boolean') {
            jobValue = job[jobKey] ? 'verified' : 'unverified';
          } else {
            jobValue = String(job[jobKey]).toLowerCase();
          }
          if (filter.data.length === 0 || filter.data.includes(jobValue)) {
            isFilterMatchedArr.push(true);
          } else {
            isFilterMatchedArr.push(false);
            return;
          }
        });
        if (isFilterMatchedArr.every((val) => val === true)) {
          filteredJobs.push(job);
        }
      });

      return filteredJobs;
    });
  };

  // Desktop
  return ['xl', '2xl'].includes(breakpoint) ? (
    <VStack
      display={{
        lg: 'none',
        xl: 'block'
      }}
      spacing="40px"
    >
      {filters.map((filter) => (
        <Flex
          key={`${filter.title}-filter}}`}
          w="150px"
          flexDir="column"
          gap={2}
        >
          <Heading fontSize="18px">{filter.title}</Heading>
          {filter.data.map((item, i) => (
            <Checkbox
              key={`${filter.title}-filter-${i}`}
              color="brandGray"
              value={item.toLowerCase()}
              onChange={handleCheckboxChange(filter.title)}
            >
              {item}
            </Checkbox>
          ))}
        </Flex>
      ))}
    </VStack>
  ) : (
    // Mobile & Tablet
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        size="lg"
        mr={{
          base: '22px',
          lg: '42px'
        }}
        mb="32px"
        color="white"
        colorScheme="buttonBlue"
        rightIcon={<ChevronDownIcon />}
      >
        Filter
      </MenuButton>
      <MenuList as={Box}>
        <Flex>
          <MenuGroup title="Location" type="checkbox">
            {filters
              .find((filter) => filter.title === 'Location')
              .data.map((item, i) => (
                <MenuItem
                  key={`Location-filter-${i}`}
                  as={Checkbox}
                  value={item.toLowerCase()}
                  onChange={handleCheckboxChange('Location')}
                >
                  {item}
                </MenuItem>
              ))}
          </MenuGroup>
          <Box>
            {filters
              .slice()
              .filter(({ title }) => title !== 'Location')
              .map((filter, i) => (
                <MenuGroup
                  key={`${filter.title}-filter-${i}`}
                  title={filter.title}
                  type="checkbox"
                >
                  {filter.data.map((item, i) => (
                    <MenuItem
                      key={`${filter.title}-filter-${i}`}
                      as={Checkbox}
                      value={item.toLowerCase()}
                      onChange={handleCheckboxChange(filter.title)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuGroup>
              ))}
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default JobFilterMenu;
