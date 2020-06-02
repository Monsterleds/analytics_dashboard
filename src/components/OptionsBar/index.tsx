import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillGrid1X2Fill } from 'react-icons/bs';
import { IoMdPulse, IoMdSettings } from 'react-icons/io';
import { FiDollarSign } from 'react-icons/fi';
import { GiDatabase } from 'react-icons/gi';

import { Container, OptionBar } from './styles';

const OptionsBar: React.FC = () => (
  <Container>
    <h1>Logo</h1>
    <OptionBar isSelected>
      <BsFillGrid1X2Fill />
      <Link to="/">Dashboard</Link>
    </OptionBar>
    <OptionBar>
      <IoMdPulse />
      <Link to="/">Analytics</Link>
    </OptionBar>
    <OptionBar>
      <GiDatabase />
      <Link to="/">Inventory</Link>
    </OptionBar>
    <OptionBar>
      <FiDollarSign />
      <Link to="/">Sales</Link>
    </OptionBar>
    <OptionBar>
      <IoMdSettings />
      <Link to="/">Settings</Link>
    </OptionBar>
  </Container>
);

export default OptionsBar;
