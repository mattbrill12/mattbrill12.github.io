import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
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


export const Home: React.FC = () => {
    return (
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
    );
};
