import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Assets
import Logo from '@assets/logos/logo.svg';

// Styles
import { Header as StyledHeader } from './styles';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [hovered, setHovered] = useState(false);
  const history = useHistory();

  const handleClick = (): void => {
    history.push('/');
  };

  const toggleHovered = (): void => {
    setHovered(!hovered);
  };

  return (
    <StyledHeader className={className}>
      <img src={Logo} alt="What's In" />
      <i
        aria-hidden="true"
        className={hovered ? 'icon__arrow-white' : 'icon__arrow-grey'}
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
        onClick={handleClick}
      />
    </StyledHeader>
  );
};

export default Header;
