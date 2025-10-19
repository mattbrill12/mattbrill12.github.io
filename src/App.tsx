import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { Navigation } from './components/Navigation/Navigation';
import { Modal } from './components/Modal/Modal';
import { PackageCard } from './components/PackageCard/PackageCard';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Package } from './types';

const MainContainer = styled.div<{ theme: DefaultTheme }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 20% 2rem;
  min-height: 100vh;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 6rem 1rem 2rem;
  }
`;

const HeroImage = styled.div`
  width: 600px;
  max-width: 100%;
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const MissionStatement = styled.div`
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 1.8rem;
    color: #786A7F;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #786A7F;
    opacity: 0.9;
  }
`;

const PackageGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  margin: 2rem -1rem;
  padding: 0 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  scroll-padding: 0 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
    margin: 1.5rem -1.5rem;
    padding: 0 1.5rem;
  }
`;

const Splash = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #C0AAD8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeOut 0.5s ease-in-out forwards;
  animation-delay: 2s;
`;

const SplashLogo = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const foodPackages: Package[] = [
  {
    title: '"Mini Graze" Package - Basic',
    subtitle: 'Perfect for intimate celebrations, small parties, or showers.',
    features: [
      'Classic charcuterie cart setup',
      '2 cheese varieties',
      '2 cured meats',
      'Gourmet crackers',
      'Fresh & dried fruits',
      'Assorted olives and nuts',
      'Honey & Jam',
      'Up to 2 hours of service'
    ]
  },
  // Add other packages...
];

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {!isLoaded && (
        <Splash>
          <SplashLogo>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Très Petite LLC" />
          </SplashLogo>
        </Splash>
      )}
      <Navigation setActiveModal={setActiveModal} />
      <MainContainer>
        <HeroImage>
          <img src={`${process.env.PUBLIC_URL}/mobile-charcuterie-cart-1.png`} alt="Très Petite LLC Experience" />
        </HeroImage>
        <MissionStatement>
          <h1>Our Mission</h1>
          <p>
            At Très Petite LLC, we are dedicated to providing exceptional food and
            beverage service that delights our customers. Our mission is to create
            memorable experiences through quality ingredients and outstanding
            hospitality.
          </p>
        </MissionStatement>
      </MainContainer>

      {/* Modals */}
      <Modal
        id="food"
        title="Food"
        isOpen={activeModal === 'food'}
        onClose={() => setActiveModal(null)}
      >
        <PackageGrid>
          {foodPackages.map((pkg, index) => (
            <PackageCard key={index} package={pkg} />
          ))}
        </PackageGrid>
      </Modal>
      {/* Add other modals */}
    </ThemeProvider>
  );
}

export default App;