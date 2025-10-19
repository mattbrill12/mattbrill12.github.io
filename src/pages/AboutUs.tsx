import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 8rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const AboutSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 2rem;
  }
`;

const ContactSection = styled.div`
  margin-top: 4rem;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textDark};
    margin-bottom: 0.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const AboutUs: React.FC = () => {
    return (
        <PageContainer>
            <ContentContainer>
                <AboutSection>
                    <h1>About Us</h1>
                    <p>
                        At Très Petite LLC, we are dedicated to providing exceptional food and
                        beverage service that delights our customers. Our mission is to create
                        memorable experiences through quality ingredients and outstanding
                        hospitality.
                    </p>
                    <p>
                        We specialize in creating beautiful and delicious displays for all types
                        of events, from intimate gatherings to large celebrations. Our attention
                        to detail and commitment to excellence ensures that every event is
                        uniquely special.
                    </p>
                </AboutSection>
                <ContactSection>
                    <h2>Contact Us</h2>
                    <p>130 W. Pleasant Ave Suite 268</p>
                    <p>NJ 07607</p>
                    <p>
                        <a href="mailto:trespetitellc@gmail.com">trespetitellc@gmail.com</a>
                    </p>
                    <p>Hours: Monday - Friday, 09:00 am – 05:00 pm</p>
                </ContactSection>
            </ContentContainer>
        </PageContainer>
    );
};
