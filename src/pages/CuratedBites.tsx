import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 80px 0 4rem;
  background: white;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('${process.env.PUBLIC_URL}/hot-chocolate-bar-2.png');
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

const PackagesSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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

const CuratedBites = () => {
  const packages = [
    {
      title: "Cup-cuterie",
      subtitle: "Individual portions perfect for any event",
      features: [
        "Individually portioned charcuterie cups",
        "2 cheese varieties",
        "2 cured meats",
        "Fresh and dried fruits",
        "Nuts and olives",
        "Gourmet crackers",
        "Honey drizzle",
        "Eco-friendly packaging"
      ]
    },
    {
      title: "Grazette",
      subtitle: "Small bites with big impact",
      features: [
        "Mini charcuterie boards",
        "3 cheese varieties",
        "3 cured meats",
        "Fresh and dried fruits",
        "Premium nuts and olives",
        "Artisanal crackers",
        "Honey and jam",
        "Decorative garnish"
      ]
    },
    {
      title: "Petite Feast",
      subtitle: "A curated selection of premium bites",
      features: [
        "Luxury individual portions",
        "4 premium cheeses",
        "4 specialty meats",
        "Seasonal fresh fruits",
        "Gourmet dried fruits",
        "Premium nuts and olives",
        "Artisanal crackers and bread",
        "Specialty honey and preserves",
        "Custom garnish and presentation"
      ]
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroOverlay>
          <HeroTitle>Curated Bites</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <PackagesSection>
        <PackageGrid>
          {packages.map((pkg, index) => (
            <PackageCard key={index}>
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

export default CuratedBites;
