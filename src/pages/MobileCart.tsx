import React, { useEffect } from 'react';
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
  height: 300px;
  background-image: url('${process.env.PUBLIC_URL}/mobile-charcuterie-cart-3.png');
  background-size: cover;
  background-position: center;
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 150px;
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

const PackagesSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 1400px) {
    max-width: 1100px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
`;

const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PackageImage = styled.div`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  margin-bottom: 1.5rem;
`;

const PackageContent = styled.div`
  padding: 2rem;
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const PackageTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: #2D1A33;
`;

const PackageSubtitle = styled.h4`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
`;

const Feature = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #444;

  &:before {
    content: "✓";
    color: #2D1A33;
    margin-right: 0.5rem;
    font-weight: bold;
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
  margin-top: 2rem;

  &:hover {
    background: #3D2A43;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 26, 51, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 2rem;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const MobileCart = () => {
  useEffect(() => {
    document.title = 'Très Petite LLC | Mobile Cart';
  }, []);

  const mobileCartService = services.find(service => service.id === 'mobile-cart');
  const seasonalService = services.find(service => service.id === 'seasonal');

  return (
    <PageContainer>
      <HeroSection />

      <PackagesSection>
        <SectionTitle style={{ marginTop: 0 }}>Mobile Cart</SectionTitle>
        <Description>
          Our curated mobile cart is designed to bring a touch of elegance and personalization to any special event. Fully tailored to your needs and vision, it offers endless possibilities for customization — ensuring every detail reflects your unique style. It features up to 12 delectable selections of premium fruits, artisanal cheeses, fine meats, and more. Whether you're hosting an intimate gathering or a grand celebration, our mobile cart experience transforms your occasion into something truly unforgettable.
        </Description>

        <PackageGrid>
          {mobileCartService?.packages.map((pkg, index) => (
            <PackageCard key={index}>
              <PackageImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/mobile-charcuterie-cart-${index + 1}.png)` }} />
              <PackageContent>
                <PackageTitle>{pkg.title}</PackageTitle>
                <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                <FeatureList>
                  {pkg.features.map((feature, i) => (
                    <Feature key={i}>{feature}</Feature>
                  ))}
                </FeatureList>
              </PackageContent>
            </PackageCard>
          ))}
        </PackageGrid>

        <SectionTitle>Seasonal Features</SectionTitle>

        <Description>
          Celebrate the magic of the seasons with our curated Seasonal Mobile Cart — a warm, inviting addition to any event that captures the essence of each time of year. Thoughtfully designed and fully customizable, each cart brings a festive touch that enhances your gathering with both beauty and charm.
        </Description>

        <PackageGrid>
          {seasonalService?.packages
            .map((pkg, index) => (
              <PackageCard key={`seasonal-${index}`}>
                <PackageImage style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hot-chocolate-bar-${index + 1}.png)` }} />
                <PackageContent>
                  <PackageTitle>{pkg.title}</PackageTitle>
                  <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                  <FeatureList>
                    {pkg.features.map((feature, i) => (
                      <Feature key={i}>{feature}</Feature>
                    ))}
                  </FeatureList>
                </PackageContent>
              </PackageCard>
            ))}
        </PackageGrid>

        <CTASection>
          <CTAButton to="/contact">Contact to grab a quote</CTAButton>
        </CTASection>
      </PackagesSection>
    </PageContainer>
  );
};

export default MobileCart;
