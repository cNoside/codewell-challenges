import { HStack } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { IconButton, Button } from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

import { ReactComponent as Logo } from '../assets/workside-logo.svg';
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg';
import { ReactComponent as AvatarSvg } from '../assets/avatar.svg';

function Navbar() {
  return (
    <Flex
      as="nav"
      className="navbar"
      justify="space-between"
      align="center"
      p={{
        base: '32px 20px',
        lg: '36px 40px',
        xl: '36px 100px'
      }}
      mb={{
        lg: '20px',
        xl: '0'
      }}
    >
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <MobileMenu />
      <TabletMenu />
    </Flex>
  );
}

function MobileMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        variant="ghost"
        icon={<HamburgerIcon color="white" w={7} h={7} />}
        display={getMobileDisplay('flex')}
      />
      <MenuList display={getMobileDisplay()}>
        <MenuGroup title="Account - Olivia Benjamin">
          <MenuItem>View Profile</MenuItem>
          <MenuItem>My Applications</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Navigation">
          <MenuItem>Find a Job</MenuItem>
          <MenuItem>Submit a Job</MenuItem>
          <MenuItem>Sponsor Us</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

function TabletMenu() {
  return (
    <>
      <HStack
        fontSize="18px"
        color="brandGray"
        spacing={8}
        display={getTabletDisplay()}
      >
        <Link as={RouterLink} to="/">
          Find a Job
        </Link>
        <Link as={RouterLink} to="#">
          Submit a Job
        </Link>
        <Link as={RouterLink} to="#">
          Sponsor Us
        </Link>
      </HStack>
      <Menu>
        <MenuButton
          display={getTabletDisplay('flex')}
          fontSize="18px"
          fontWeight="normal"
          gap={1}
          align="center"
          as={Button}
          variant="ghost"
          rightIcon={<DownArrow />}
          h="max-content"
          py={1}
        >
          <Flex align="center" gap={3}>
            <AvatarSvg />
            Olivia Benjamin
          </Flex>
        </MenuButton>
        <MenuList display={getTabletDisplay()}>
          <MenuGroup title="Account">
            <MenuItem>View Profile</MenuItem>
            <MenuItem>My Applications</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
}

function getMobileDisplay(displayValue = 'block') {
  return {
    base: displayValue,
    lg: 'none'
  };
}

function getTabletDisplay(displayValue = 'block') {
  return {
    base: 'none',
    lg: displayValue
  };
}

export default Navbar;
