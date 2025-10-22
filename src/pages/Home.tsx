import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  flex: 1;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('${process.env.PUBLIC_URL}/mobile-charcuterie-cart-1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(192, 170, 216, 0.3);
  z-index: 2;
`;

const MissionStatement = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  width: 100%;
  max-width: 800px;
  padding: 2rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1.5rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: white;
    opacity: 0.95;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem;
    padding: 1.5rem;
    
    h1 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

const OrderButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-family: ${({ theme }) => theme.fonts.secondary};
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #C0AAD8, #A68BC0);
    border-color: #C0AAD8;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(192, 170, 216, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

export const Home: React.FC = () => {
  const handleOrderNow = () => {
    // Scroll to navigation or open contact modal
    const navElement = document.querySelector('nav');
    if (navElement) {
      navElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainContainer>
      <BackgroundImage />
      <Overlay />
      <MissionStatement>
        <h1>Our Mission</h1>
        <p>
          At Très Petite LLC, we are dedicated to providing exceptional food and
          beverage service that delights our customers. Our mission is to create
          memorable experiences through quality ingredients and outstanding
          hospitality.
        </p>
        <OrderButton onClick={handleOrderNow}>
          Order Now
        </OrderButton>
      </MissionStatement>
    </MainContainer>
  );
};
