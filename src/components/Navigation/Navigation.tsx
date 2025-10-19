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
  background: transparent;
  object-position: center;
  padding: 0;
  margin: 0;
  display: block;
  box-shadow: 0 0 0 2px #FBEFFA;
  overflow: hidden;
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

const Separator = styled.div<{ isMobile?: boolean }>`
  height: 1px;
  background: ${({ isMobile }) => isMobile ? 'rgba(255, 255, 255, 0.2)' : 'rgba(120, 106, 127, 0.2)'};
  margin: ${({ isMobile }) => isMobile ? '1rem 0' : '0.5rem'};
  width: ${({ isMobile }) => isMobile ? '100%' : 'auto'};
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
  display: block;
  text-decoration: none;

  &:hover {
    background: rgba(120, 106, 127, 0.1);
  }
`;

interface NavLinkProps {
  isActive?: boolean;
  $delay?: number;
}

const NavLink = styled.button`
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
  opacity: 0.9;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4px;
  text-decoration: none;

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

const MobileNavLink = styled(NavLink) <{ $isActive: boolean; $delay: number }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    opacity: 0;
    transform: translateY(20px);
    animation: ${({ $isActive }) => $isActive ? 'slideIn 0.3s forwards' : 'none'};
    animation-delay: ${({ $delay }) => $delay * 0.1}s;
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
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

const MobileMenuOverlay = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 14;
  backdrop-filter: blur(3px);
`;

const MobileMenu = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  padding: 5rem 2rem 2rem;
  z-index: 15;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const CloseButton = styled.button<{ $isActive?: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: opacity 0.2s ease;
  z-index: 20;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    opacity: 0;
    transform: translateY(20px);
    animation: ${({ $isActive }) => $isActive ? 'slideIn 0.3s forwards' : 'none'};
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
            <Separator />
            <DropdownItem as="a" href="#/about">About Us</DropdownItem>
            <DropdownItem
              as="a"
              href="https://www.instagram.com/trespetitellc"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <MobileMenuOverlay isActive={isMobileMenuOpen} onClick={closeMenu} />
        <MobileMenu isActive={isMobileMenuOpen}>
          <CloseButton onClick={closeMenu} aria-label="Close menu" $isActive={isMobileMenuOpen}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseButton>
          <MobileNavLink onClick={() => { closeMenu(); setActiveModal('food'); }} $delay={0} $isActive={isMobileMenuOpen}>Food</MobileNavLink>
          <MobileNavLink onClick={() => { closeMenu(); setActiveModal('beverage'); }} $delay={1} $isActive={isMobileMenuOpen}>Beverage</MobileNavLink>
          <MobileNavLink onClick={() => { closeMenu(); setActiveModal('seasonal'); }} $delay={2} $isActive={isMobileMenuOpen}>Seasonal</MobileNavLink>
          <Separator isMobile />
          <MobileNavLink as="a" href="#/about" onClick={closeMenu} $delay={3} $isActive={isMobileMenuOpen}>About Us</MobileNavLink>
          <MobileNavLink
            as="a"
            href="https://www.instagram.com/trespetitellc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            $delay={4}
            $isActive={isMobileMenuOpen}
          >
            Follow Us
          </MobileNavLink>
        </MobileMenu>
      </MobileNav>
    </NavContainer>
  );
};
