import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 80px 0 4rem;
  background: white;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('${process.env.PUBLIC_URL}/mobile-charcuterie-cart-1.png');
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 300px;
    margin-bottom: 3rem;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(45, 26, 51, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MissionSection = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.5rem;
    color: #2D1A33;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 2rem;
  }
`;

const ContactSection = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 0;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    color: #2D1A33;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 0.5rem;
  }

  a {
    color: #2D1A33;
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const AboutUs: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroOverlay>
          <HeroTitle>About Us</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <ContentContainer>
        <MissionSection>
          <h2>Our Mission</h2>
          <p>
            At Très Petite LLC, we believe in creating extraordinary moments through
            exceptional food and beverage experiences. Our passion lies in crafting
            beautiful, delicious displays that transform ordinary gatherings into
            unforgettable celebrations.
          </p>
          <p>
            We take pride in our attention to detail, commitment to quality, and
            dedication to outstanding hospitality. Every event is an opportunity for
            us to showcase our creativity and bring joy to our clients and their
            guests through our carefully curated selections and impeccable service.
          </p>
          <p>
            From intimate gatherings to grand celebrations, we specialize in
            elevating your event with our mobile cart services, artisanal beverage
            bars, and expertly crafted bites. Let us help you create memories that
            will be cherished for years to come.
          </p>
        </MissionSection>

        <ContactSection>
          <ContactInfo>
            <h2>Get in Touch</h2>
            <p>130 W. Pleasant Ave Suite 268</p>
            <p>NJ 07607</p>
            <p>
              <a href="mailto:trespetitellc@gmail.com">trespetitellc@gmail.com</a>
            </p>
            <p>Hours: Monday - Friday, 09:00 am – 05:00 pm</p>
          </ContactInfo>
        </ContactSection>
      </ContentContainer>
    </PageContainer>
  );
};