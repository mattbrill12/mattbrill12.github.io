import React, { useState } from 'react';
import styled, { DefaultTheme } from 'styled-components';

const NavContainer = styled.nav<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    justify-content: flex-start;
    background: #FBEFFA;
    box-shadow: none;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #786A7F;
  margin-left: -0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: auto;

    span {
      display: none;
    }
  }
`;

const BrandImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #FBEFFA;
`;

const BrandText = styled.span`
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.02em;
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: white;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 100;
`;

const DropdownItem = styled.button<{ as?: string }>`
  width: 100%;
  text-align: left;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: #786A7F;
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(120, 106, 127, 0.1);
  }
`;

const NavLink = styled.button<{ isActive?: boolean }>`
  color: #786A7F;
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.primary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.9')};
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.textLight};
    width: 100%;
    font-size: 1.2rem;
  }

  &:hover {
    opacity: 1;
    background: rgba(120, 106, 127, 0.1);
  }
`;

const MobileNav = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Hamburger = styled.button<{ isActive: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 20;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    margin: 5px 0;
    background: ${({ isActive, theme }) =>
    isActive ? theme.colors.textLight : '#786A7F'};
    transition: all 0.3s ease;

    &:first-child {
      transform: ${({ isActive }) =>
    isActive ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${({ isActive }) => (isActive ? '0' : '1')};
    }

    &:last-child {
      transform: ${({ isActive }) =>
    isActive ? 'rotate(-45deg) translate(7px, -6px)' : 'none'};
    }
  }
`;

const MobileMenu = styled.div<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  padding: 5rem 2rem 2rem;
  z-index: 15;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
`;

interface NavigationProps {
  setActiveModal: (modal: string | null) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ setActiveModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <NavContainer>
      <Brand href="#">
        <BrandImage src={`${process.env.PUBLIC_URL}/logo.png`} alt="Très Petite LLC" />
        <BrandText>Très Petite LLC</BrandText>
      </Brand>

      <DesktopNav>
        <DropdownContainer>
          <NavLink>
            Menu
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginLeft: '4px' }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </NavLink>
          <DropdownMenu>
            <DropdownItem onClick={() => setActiveModal('food')}>Food</DropdownItem>
            <DropdownItem onClick={() => setActiveModal('beverage')}>Beverage</DropdownItem>
            <DropdownItem onClick={() => setActiveModal('seasonal')}>Seasonal</DropdownItem>
            <DropdownItem onClick={() => setActiveModal('about')}>About Us</DropdownItem>
            <DropdownItem
              as="a"
              href="https://www.instagram.com/trespetitellc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Follow Us
            </DropdownItem>
          </DropdownMenu>
        </DropdownContainer>
      </DesktopNav>

      <MobileNav>
        <Hamburger
          onClick={toggleMenu}
          isActive={isMobileMenuOpen}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <MobileMenu isActive={isMobileMenuOpen}>
          <NavLink onClick={() => { closeMenu(); setActiveModal('food'); }}>Food</NavLink>
          <NavLink onClick={() => { closeMenu(); setActiveModal('beverage'); }}>Beverage</NavLink>
          <NavLink onClick={() => { closeMenu(); setActiveModal('seasonal'); }}>Seasonal</NavLink>
          <NavLink onClick={() => { closeMenu(); setActiveModal('about'); }}>About Us</NavLink>
          <NavLink
            as="a"
            href="https://www.instagram.com/trespetitellc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow Us
          </NavLink>
        </MobileMenu>
      </MobileNav>
    </NavContainer>
  );
};
