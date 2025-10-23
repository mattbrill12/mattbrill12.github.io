import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 80px 0 4rem;
  background: white;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('${process.env.PUBLIC_URL}/mobile-charcuterie-cart-2.png');
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
    margin-bottom: 2rem;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceImage = styled.div<{ image: string }>`
  width: 100%;
  height: 250px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 2rem;
    padding: 2rem 1rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #2D1A33;
  color: white;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: #3D2A43;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 26, 51, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const Services = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroOverlay>
          <HeroTitle>Our Services</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <ServicesGrid>
        {services.filter(service => service.id !== 'seasonal').map((service) => (
          <ServiceCard key={service.id} to={`/services/${service.id}`}>
            <ServiceImage image={`${process.env.PUBLIC_URL}${service.image}`} />
            <ServiceContent>
              <ServiceTitle>{service.name}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <CTASection>
        <CTAButton to="/contact">Contact to grab a quote</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default Services;