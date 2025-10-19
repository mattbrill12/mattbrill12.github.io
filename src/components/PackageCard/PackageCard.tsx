import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { PackageCardProps } from '../../types';

const Card = styled.div<{ theme: DefaultTheme }>`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(120, 106, 127, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(120, 106, 127, 0.1);
  flex: 0 0 90%;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(120, 106, 127, 0.25);
    border-color: rgba(120, 106, 127, 0.2);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 45%;
  }
`;

const Header = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const Subtitle = styled.p`
  opacity: 0.9;
  font-size: 0.9rem;
  font-style: italic;
`;

const Content = styled.div`
  padding: 2rem;
  background: white;
  color: ${({ theme }) => theme.colors.textDark};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Feature = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(120, 106, 127, 0.2);
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.95rem;
  display: flex;
  align-items: center;

  &::before {
    content: '•';
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2em;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Note = styled.p`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(120, 106, 127, 0.2);
  font-style: italic;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.9rem;
  opacity: 0.8;
`;

export const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <Card>
      <Header>
        <Title>{pkg.title}</Title>
        <Subtitle>{pkg.subtitle}</Subtitle>
      </Header>
      <Content>
        <FeatureList>
          {pkg.features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </FeatureList>
        {pkg.note && <Note>{pkg.note}</Note>}
      </Content>
    </Card>
  );
};
