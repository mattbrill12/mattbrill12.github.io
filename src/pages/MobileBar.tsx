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
  background-image: url('${process.env.PUBLIC_URL}/beverage-bar-3.png');
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

const PackageCard = styled.div<{ isComingSoon?: boolean }>`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  opacity: ${({ isComingSoon }) => isComingSoon ? 0.7 : 1};

  ${({ isComingSoon }) => !isComingSoon && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2D1A33;
  text-transform: uppercase;
  letter-spacing: 0.1em;
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

const Note = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin-top: 1rem;
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
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const MobileBar = () => {
    const packages = [
        {
            title: "Graze-tini",
            subtitle: "Perfect for intimate gatherings or budget-friendly events",
            features: [
                "1 Signature Custom Cocktail or Mocktail",
                "Simple cart setup",
                "Up to 2 hours of service"
            ],
            note: "*alcohol must be provided by the client"
        },
        {
            title: "Perfect Pairing",
            subtitle: "Great for birthdays, baby showers, and holiday parties",
            features: [
                "2 Signature Custom Cocktail or Mocktail",
                "Simple cart setup",
                "Up to 2 hours of service"
            ],
            note: "*alcohol must be provided by the client"
        },
        {
            title: "Boba Bliss",
            subtitle: "Perfect for any event!",
            features: [
                "Choice of 2 Boba flavor drinks",
                "Personalized signage (logo or event name)",
                "Simple cart setup",
                "Up to 2 hours of service"
            ],
            isComingSoon: true
        }
    ];

    return (
        <PageContainer>
            <HeroSection>
                <HeroOverlay>
                    <HeroTitle>Mobile Bar</HeroTitle>
                </HeroOverlay>
            </HeroSection>

            <PackagesSection>
                <PackageGrid>
                    {packages.map((pkg, index) => (
                        <PackageCard key={index} isComingSoon={pkg.isComingSoon}>
                            <PackageTitle>{pkg.title}</PackageTitle>
                            <PackageSubtitle>{pkg.subtitle}</PackageSubtitle>
                            <FeatureList>
                                {pkg.features.map((feature, i) => (
                                    <Feature key={i}>{feature}</Feature>
                                ))}
                            </FeatureList>
                            {pkg.note && <Note>{pkg.note}</Note>}
                            {pkg.isComingSoon && (
                                <ComingSoonOverlay>Coming Soon</ComingSoonOverlay>
                            )}
                        </PackageCard>
                    ))}
                </PackageGrid>

                <CTASection>
                    <CTAButton to="/contact">Get a Quote</CTAButton>
                </CTASection>
            </PackagesSection>
        </PageContainer>
    );
};

export default MobileBar;
