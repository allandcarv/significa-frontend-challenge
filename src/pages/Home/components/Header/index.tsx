import React, { useContext, useRef, KeyboardEvent } from 'react';

// Assets
import Logo from '@assets/logos/logo.svg';

// Components
import Input from '@shared/components/Input';

// Context
import { MovieContext } from '@core/context/MovieContext';

// Styles
import { Header as StyledHeader } from './styles';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { getMovies, resetMovies } = useContext(MovieContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (inputRef.current?.value) {
        getMovies(inputRef.current?.value);
      } else {
        resetMovies();
      }
    }
  };

  return (
    <StyledHeader className={className}>
      <img src={Logo} alt="What's In" />
      <Input
        placeholder="Search movies..."
        onKeyDown={handleSearch}
        forwardedRef={inputRef}
      />
    </StyledHeader>
  );
};

export default Header;
